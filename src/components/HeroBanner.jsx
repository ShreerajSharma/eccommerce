import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, MessageCircle, RefreshCw, Crown, Heart, Send } from 'lucide-react';
import { getDirectChannelLink } from '../utils/whatsapp';

export const HeroBanner = ({ onExploreClick, settings }) => {
  const isTelegram = settings.orderChannel === 'telegram';
  const channelLabel = isTelegram ? 'Telegram' : 'WhatsApp';
  const directCatalogUrl = getDirectChannelLink(
    settings,
    `Hello ${settings.storeName || 'Aura Ethnic'}! I would like to see your latest festive Kurti & ethnic collection catalog.`
  );
  return (
    <div className="relative overflow-hidden mb-8 md:mb-12">
      {/* Light Luxury Editorial Hero Banner (Zara / H&M Summer Lookbook Style) */}
      <div className="relative bg-gradient-to-r from-[#faf5ee] via-[#f7eee0] to-[#f2e4cf] text-stone-900 rounded-3xl mx-3 sm:mx-6 lg:mx-auto max-w-7xl overflow-hidden shadow-lg border border-[#e8d5be]">
        
        {/* Subtle Background Pattern & Soft Glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#b45309_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-14">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left z-10">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-amber-300/80 text-amber-900 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs backdrop-blur-md">
              <Sparkles size={14} className="text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Spring / Summer 2026 • Curated Luxury Collection</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-stone-900">
              Grace & Timeless <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-bold">Women's Couture</span>
            </h1>

            {/* Description */}
            <p className="text-stone-600 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover authentic handcrafted Lucknowi Chikankari, Banarasi Pure Silk Sarees, and breathable Jaipur Cotton Kurtis. Add to cart & place direct instant orders on {channelLabel}.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-700 via-amber-800 to-stone-900 text-white font-extrabold text-sm sm:text-base rounded-full shadow-lg hover:shadow-amber-900/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Shop Collection</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={directCatalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-stone-50 border font-bold text-sm sm:text-base rounded-full shadow-xs transition-all flex items-center justify-center gap-2 ${
                  isTelegram ? 'border-sky-300 text-sky-900 hover:bg-sky-50' : 'border-stone-300 text-stone-800 hover:bg-stone-50'
                }`}
              >
                {isTelegram ? (
                  <Send size={18} className="text-sky-500" />
                ) : (
                  <MessageCircle size={18} className="text-emerald-600" />
                )}
                <span>{channelLabel} Catalog</span>
              </a>
            </div>

            {/* Tagline */}
            <div className="pt-2 text-xs text-amber-950/80 font-bold tracking-wide">
              ⚡ Instant {channelLabel} Confirmation • Pan-India Free Delivery • 7-Day Easy Exchange
            </div>
          </div>

          {/* Right Visual Banner Showcase */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Main Luxury Image */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
                  alt="Festive Anarkali Kurti"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent"></div>
                
                {/* Floating Discount Tag */}
                <div className="absolute top-3.5 right-3.5 bg-amber-700 text-white px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-lg border border-amber-500">
                  Up To 50% OFF
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#ebdcc7] shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-amber-800 font-extrabold uppercase tracking-widest">Trending Now</p>
                    <p className="text-sm font-extrabold text-stone-900">Chanderi Zari Anarkalis</p>
                  </div>
                  <span className="text-xs font-extrabold bg-amber-100 text-amber-900 px-3 py-1 rounded-full border border-amber-300">
                    From ₹999
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Pillars / Value Propositions (Clean Light Cards) */}
      <div className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white border border-[#e8d5be] p-4 rounded-2xl flex items-center gap-3.5 shadow-xs hover:border-amber-400 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0 shadow-inner">
              <ShieldCheck size={22} />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">100% Authentic</p>
              <p className="text-[10px] text-stone-500">Handcrafted Pure Silks</p>
            </div>
          </div>

          <div className="bg-white border border-[#e8d5be] p-4 rounded-2xl flex items-center gap-3.5 shadow-xs hover:border-amber-400 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0 shadow-inner">
              <Truck size={22} />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">Express Delivery</p>
              <p className="text-[10px] text-stone-500">Fast Pan-India Dispatch</p>
            </div>
          </div>

          <div className="bg-white border border-[#e8d5be] p-4 rounded-2xl flex items-center gap-3.5 shadow-xs hover:border-amber-400 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-800 shrink-0 shadow-inner">
              <RefreshCw size={22} />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">Easy Exchange</p>
              <p className="text-[10px] text-stone-500">7-Day Hassle Free</p>
            </div>
          </div>

          <div className="bg-white border border-[#e8d5be] p-4 rounded-2xl flex items-center gap-3.5 shadow-xs hover:border-amber-400 transition-colors">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-inner ${
              isTelegram ? 'bg-sky-50 border border-sky-200 text-sky-700' : 'bg-blue-50 border border-blue-200 text-blue-800'
            }`}>
              {isTelegram ? <Send size={20} /> : <MessageCircle size={22} />}
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">Direct Support</p>
              <p className="text-[10px] text-stone-500">Instant {channelLabel} Help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
