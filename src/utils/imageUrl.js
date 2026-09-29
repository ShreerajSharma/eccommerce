/**
 * Utility for handling image URLs, auto-converting Google Drive, Dropbox, 
 * and other cloud storage links to direct high-res image URLs.
 */

export const extractGoogleDriveId = (url) => {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();

  // Match /file/d/FILE_ID
  const matchFileD = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (matchFileD && matchFileD[1]) return matchFileD[1];

  // Match id=FILE_ID
  const matchId = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (matchId && matchId[1]) return matchId[1];

  // Match lh3.googleusercontent.com/d/FILE_ID
  const matchLh3 = trimmed.match(/lh3\.googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/);
  if (matchLh3 && matchLh3[1]) return matchLh3[1];

  return null;
};

export const normalizeImageUrl = (url) => {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';

  // 1. Google Drive Links
  if (trimmed.includes('drive.google.com') || trimmed.includes('docs.google.com') || trimmed.includes('lh3.googleusercontent.com')) {
    const driveId = extractGoogleDriveId(trimmed);
    if (driveId) {
      // Direct CDN high-resolution embed format for Google Drive
      return `https://lh3.googleusercontent.com/d/${driveId}`;
    }
  }

  // 2. Dropbox Links
  if (trimmed.includes('dropbox.com')) {
    if (trimmed.includes('dl.dropboxusercontent.com')) return trimmed;
    return trimmed.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace(/[?&]dl=0/, '');
  }

  // 3. OneDrive Links
  if (trimmed.includes('1drv.ms') || trimmed.includes('onedrive.live.com')) {
    if (!trimmed.includes('embed')) {
      return trimmed.replace('/redir?', '/embed?').replace('/view?', '/embed?');
    }
  }

  return trimmed;
};

/**
 * Checks whether an input URL is a Google Drive link
 */
export const isGoogleDriveUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  return url.includes('drive.google.com') || url.includes('docs.google.com') || url.includes('lh3.googleusercontent.com');
};
