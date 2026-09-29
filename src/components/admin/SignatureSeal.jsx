import React, { useState } from 'react';
import { RefreshCw, Check, Stamp, PenTool } from 'lucide-react';

// Preset realistic signature SVG designs
const SIGNATURE_STYLES = [
  {
    id: 'executive-flourish',
    name: 'Executive Royal Flourish',
    renderSvg: (color = '#0f2b5c') => (
      <svg viewBox="0 0 240 70" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 20 42 C 25 15, 38 10, 48 24 C 55 35, 32 55, 26 48 C 22 43, 38 28, 56 32 C 68 35, 72 45, 82 32 C 92 20, 95 38, 105 34 C 115 30, 122 40, 134 33 C 146 25, 155 35, 170 28 C 182 22, 195 18, 205 14"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dynamic sweeping underline flourish */}
        <path
          d="M 15 52 C 55 58, 120 54, 185 45 C 210 41, 225 36, 215 46 C 205 54, 160 62, 110 60 C 80 59, 45 61, 35 63"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Signature Accent Dots */}
        <circle cx="218" cy="42" r="1.8" fill={color} />
        <circle cx="226" cy="40" r="1.8" fill={color} />
      </svg>
    )
  },
  {
    id: 'dynamic-loop',
    name: 'Modern Swift Cursive',
    renderSvg: (color = '#1e3a8a') => (
      <svg viewBox="0 0 240 70" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Looping initial P / S */}
        <path
          d="M 28 55 C 22 35, 32 12, 45 15 C 56 18, 52 42, 38 46 C 30 48, 24 38, 42 36 C 65 34, 78 48, 92 36 C 104 24, 108 42, 120 38 C 132 34, 142 46, 158 35 C 172 24, 185 22, 202 20"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Ascender loop */}
        <path
          d="M 88 40 C 92 18, 102 14, 98 32 C 94 48, 110 52, 130 46"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Underline loop */}
        <path
          d="M 25 58 C 70 56, 140 52, 210 42 C 224 40, 200 62, 145 62"
          stroke={color}
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    id: 'artisan-classic',
    name: 'Vintage Master Ink',
    renderSvg: (color = '#092347') => (
      <svg viewBox="0 0 240 70" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* High ascender & deep loop */}
        <path
          d="M 22 48 C 30 18, 42 8, 46 22 C 50 36, 25 45, 32 54 C 40 62, 58 36, 75 36 C 88 36, 85 48, 98 42 C 112 36, 125 45, 142 38 C 158 30, 175 38, 190 26 C 200 18, 215 14, 222 18"
          stroke={color}
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 18 56 C 65 62, 135 58, 205 48 C 220 46, 228 52, 218 56 C 200 64, 150 64, 90 62"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="215" cy="32" r="2" fill={color} />
      </svg>
    )
  },
  {
    id: 'royal-script',
    name: 'Calligraphic Authority',
    renderSvg: (color = '#172554') => (
      <svg viewBox="0 0 240 70" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Treble loop start */}
        <path
          d="M 35 15 C 20 28, 22 52, 38 52 C 50 52, 48 30, 60 28 C 72 26, 74 44, 86 40 C 98 36, 106 24, 118 36 C 128 46, 140 32, 154 36 C 168 40, 182 28, 198 30 C 210 32, 218 25, 225 22"
          stroke={color}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 28 62 C 80 58, 150 52, 218 45"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 195 52 C 210 50, 225 48, 228 54"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    id: 'elegant-crest',
    name: 'Boutique Proprietor',
    renderSvg: (color = '#1e293b') => (
      <svg viewBox="0 0 240 70" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 25 38 C 32 14, 48 12, 52 28 C 55 42, 36 50, 42 56 C 52 64, 70 38, 85 36 C 98 34, 105 48, 118 40 C 132 30, 145 44, 160 36 C 175 28, 192 34, 210 24"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 20 54 Q 110 62 220 46"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="218" cy="38" r="2.2" fill={color} />
      </svg>
    )
  }
];

export const SignatureSeal = ({ 
  companyName = "AURA ETHNIC BOUTIQUE",
  signatoryName = "Pawan Kumar (Proprietor)",
  isEditing = false
}) => {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [inkColor, setInkColor] = useState('#0f2b5c'); // Classic fountain pen blue
  const [showStamp, setShowStamp] = useState(true);
  const [customName, setCustomName] = useState(signatoryName);

  // Randomize Signature
  const handleRandomize = () => {
    setCurrentStyleIndex((prev) => (prev + 1) % SIGNATURE_STYLES.length);
  };

  const currentStyle = SIGNATURE_STYLES[currentStyleIndex];

  return (
    <div className="relative flex flex-col items-end justify-center select-none">
      
      {/* Controls Bar (Visible during edit mode or on hover, hidden during printing) */}
      {isEditing && (
        <div className="no-print mb-2 p-1.5 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2 text-[10px] shadow-sm">
          <button
            type="button"
            onClick={handleRandomize}
            className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg flex items-center gap-1 transition-all cursor-pointer active:scale-95"
            title="Generate another realistic signature style"
          >
            <RefreshCw size={11} className="animate-spin-once" />
            <span>🎲 Random Signature</span>
          </button>

          <div className="flex items-center gap-1">
            <span className="text-stone-500 font-medium">Ink:</span>
            <button
              type="button"
              onClick={() => setInkColor('#0f2b5c')}
              className={`w-4 h-4 rounded-full bg-[#0f2b5c] border ${inkColor === '#0f2b5c' ? 'ring-2 ring-amber-500' : ''}`}
              title="Royal Navy Blue"
            />
            <button
              type="button"
              onClick={() => setInkColor('#111827')}
              className={`w-4 h-4 rounded-full bg-[#111827] border ${inkColor === '#111827' ? 'ring-2 ring-amber-500' : ''}`}
              title="Classic Black"
            />
          </div>

          <label className="flex items-center gap-1 text-stone-700 cursor-pointer ml-1 font-semibold">
            <input
              type="checkbox"
              checked={showStamp}
              onChange={(e) => setShowStamp(e.target.checked)}
              className="rounded text-amber-700 w-3 h-3"
            />
            <span>Stamp Seal</span>
          </label>
        </div>
      )}

      {/* Signature & Stamp Container */}
      <div className="relative w-48 h-20 flex items-center justify-center">
        
        {/* 1. OFFICIAL BOUTIQUE RUBBER STAMP (Realistic Semi-transparent Ink Seal) */}
        {showStamp && (
          <div 
            className="absolute left-2 top-0 w-20 h-20 pointer-events-none transform -rotate-6 opacity-75 mix-blend-multiply"
            style={{ filter: 'contrast(1.2)' }}
          >
            <div className="w-full h-full rounded-full border-2 border-dashed border-indigo-900/80 p-0.5 flex flex-col items-center justify-center text-center text-indigo-950 font-bold bg-indigo-50/20 shadow-inner">
              <div className="w-full h-full rounded-full border border-indigo-900/90 flex flex-col items-center justify-between p-1">
                <span className="text-[6px] font-extrabold uppercase tracking-tighter text-indigo-900 line-clamp-1">
                  ★ {companyName.slice(0, 14)} ★
                </span>
                <div className="py-0.5 border-y border-indigo-900/50 w-full text-center">
                  <span className="text-[7px] font-black tracking-widest text-indigo-950 block">VERIFIED</span>
                  <span className="text-[5.5px] font-bold text-indigo-800 tracking-tighter block uppercase">SIGNATURE</span>
                </div>
                <span className="text-[5.5px] font-semibold text-indigo-900 tracking-tight">
                  GOVT. REGD.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 2. REALISTIC VECTOR CURSIVE SIGNATURE (Overlaid on Stamp) */}
        <div className="relative z-10 w-44 h-16 transform -rotate-2">
          {currentStyle.renderSvg(inkColor)}
        </div>

      </div>

      {/* Signatory Name & Designation */}
      <div className="text-right mt-0.5">
        {isEditing ? (
          <input
            type="text"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            className="border border-stone-300 px-1 py-0.5 text-xs text-right font-bold text-stone-900 w-48 rounded"
            placeholder="Signatory Name"
          />
        ) : (
          <p className="text-[11px] font-bold text-stone-900 tracking-wide">
            {customName}
          </p>
        )}
        <p className="text-[9px] text-stone-500 font-semibold tracking-wider uppercase">
          Authorized Signatory / Proprietor
        </p>
      </div>

    </div>
  );
};
