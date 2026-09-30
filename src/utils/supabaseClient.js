import { createClient } from '@supabase/supabase-js';

const SUPABASE_CONFIG_KEY = 'rkc_supabase_config';

/**
 * Gets Supabase URL and Anon Key from environment variables or stored settings
 */
export const getSupabaseConfig = () => {
  const envUrl = import.meta.env.VITE_SUPABASE_URL;
  const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (envUrl && envKey && envUrl !== 'YOUR_SUPABASE_URL') {
    return { url: envUrl.trim(), anonKey: envKey.trim(), source: 'env' };
  }

  try {
    const stored = localStorage.getItem(SUPABASE_CONFIG_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.url && parsed.anonKey) {
        return { url: parsed.url.trim(), anonKey: parsed.anonKey.trim(), source: 'localStorage' };
      }
    }
  } catch (e) {
    console.error("Failed to read Supabase config from storage", e);
  }

  return { url: '', anonKey: '', source: 'none' };
};

/**
 * Saves Supabase credentials into local config
 */
export const saveSupabaseConfig = (url, anonKey) => {
  try {
    if (!url || !anonKey) {
      localStorage.removeItem(SUPABASE_CONFIG_KEY);
    } else {
      localStorage.setItem(SUPABASE_CONFIG_KEY, JSON.stringify({
        url: url.trim(),
        anonKey: anonKey.trim()
      }));
    }
    // Recreate client
    initSupabaseClient();
    return true;
  } catch (e) {
    console.error("Failed to save Supabase config", e);
    return false;
  }
};

let supabaseInstance = null;

export const initSupabaseClient = () => {
  const { url, anonKey } = getSupabaseConfig();
  if (url && anonKey) {
    try {
      supabaseInstance = createClient(url, anonKey, {
        auth: { persistSession: true },
        realtime: { params: { eventsPerSecond: 10 } }
      });
      return supabaseInstance;
    } catch (e) {
      console.error("Failed to initialize Supabase client", e);
      supabaseInstance = null;
    }
  }
  supabaseInstance = null;
  return null;
};

// Initial setup
initSupabaseClient();

export const getSupabase = () => {
  if (!supabaseInstance) {
    return initSupabaseClient();
  }
  return supabaseInstance;
};

export const isSupabaseConfigured = () => {
  const { url, anonKey } = getSupabaseConfig();
  return Boolean(url && anonKey);
};

/**
 * Tests connection to Supabase
 */
export const testSupabaseConnection = async () => {
  const client = getSupabase();
  if (!client) {
    return { success: false, message: 'Supabase URL or Anon Key is missing.' };
  }

  try {
    const { data, error } = await client.from('products').select('count', { count: 'exact', head: true });
    if (error) {
      // Check if table missing
      if (error.code === '42P01' || error.message?.includes('relation "products" does not exist')) {
        return { 
          success: false, 
          tableMissing: true, 
          message: 'Connected to Supabase, but "products" table does not exist yet. Please run the SQL setup script.' 
        };
      }
      return { success: false, message: error.message || 'Error connecting to Supabase.' };
    }
    return { success: true, message: 'Successfully connected to Supabase Cloud Database! 🚀' };
  } catch (err) {
    return { success: false, message: err.message || 'Connection failed.' };
  }
};
