import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, MessageCircle, Check, Sparkles, Heart, Zap, Send } from 'lucide-react';
import { generateSingleProductChannelUrl } from '../utils/whatsapp';

export const ProductCard = ({ 
  product, 
  onAddToCart, 
  onQuickView, 
  settings = {},
  isWishlisted = false,
  onToggleWishlist
}) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const isTelegram = settings.orderChannel === 'telegram';
  const channelLabel = isTelegram ? 'Telegram' : 'WhatsApp';

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAdd = (e, sizeToUse = selectedSize) => {
    e.stopPropagation();
    onAddToCart(product, sizeToUse);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1800);
  };

  const handleDirectChannelOrder = (e) => {
    e.stopPropagation();
    const url = generateSingleProductChannelUrl({ product, selectedSize, settings });
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group bg-white rounded-3xl overflow-hidden border border-[#ebdcc7]/80 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer relative"
    >
      {/* Top Image Container (Zara / H&M High Fashion Aspect Ratio) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Wishlist Floating Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleWishlist) onToggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 z-20 shadow-md ${
            isWishlisted 
              ? 'bg-rose-600 text-white scale-110' 
              : 'bg-white/80 text-stone-700 hover:bg-white hover:text-rose-600'
          }`}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="royal-maroon-bg text-gold-100 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md border border-gold-400/40">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-emerald-700 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md tracking-wider shadow-sm">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Special Offer Ribbon Strip */}
        {product.offer && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-amber-700 via-brand-950 to-amber-800 text-gold-100 px-3 py-1 text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-md z-10">
            <Sparkles size={12} className="text-gold-300 animate-pulse" />
            <span className="line-clamp-1">{product.offer}</span>
          </div>
        )}

        {/* Quick Size Pills overlay on Hover (Zara style) */}
        <div className="absolute inset-x-3 bottom-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-gold-300/60 hidden sm:flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
            Quick Add Size:
          </span>
          <div className="flex gap-1.5 flex-wrap justify-center">
            {(product.sizes || ['S', 'M', 'L', 'XL']).map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={(e) => {
                  setSelectedSize(sz);
                  handleAdd(e, sz);
                }}
                className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-brand-900 hover:text-gold-200 text-stone-800 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer"
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-stone-900/65 backdrop-blur-[2px] flex items-center justify-center z-20">
            <span className="bg-rose-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Details (Zara Minimalist Fashion Layout) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
            <span className="uppercase tracking-widest font-bold text-[10px] text-gold-800">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-xs">
              <Star size={13} fill="currentColor" />
              <span>{product.rating || 4.9}</span>
              <span className="text-stone-400 text-[10px]">({product.reviewsCount || 38})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-heading text-sm sm:text-base font-bold text-stone-900 line-clamp-1 group-hover:text-brand-900 transition-colors">
            {product.name}
          </h3>

          {/* Fabric & Color Subtitle */}
          <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
            {product.fabric || "Pure Silk / Cotton"} {product.color ? `• ${product.color}` : ''}
          </p>

          {/* Price Strip */}
          <div className="flex items-baseline gap-2.5 mt-2.5">
            <span className="font-heading text-base sm:text-lg font-extrabold text-brand-950">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs sm:text-sm text-stone-400 line-through font-normal">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="text-[11px] font-extrabold text-emerald-700">
                Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-[#ebdcc7]/60 flex gap-2">
          
          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer ${
              isAddedRecently
                ? 'bg-emerald-700 text-white'
                : 'royal-maroon-bg text-gold-100 hover:opacity-95'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isAddedRecently ? (
              <>
                <Check size={14} className="animate-bounce" />
                <span>Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                <span>Add to Bag</span>
              </>
            )}
          </button>

          {/* Direct WhatsApp / Telegram Order Button */}
          <button
            type="button"
            onClick={handleDirectChannelOrder}
            className={`p-2.5 rounded-xl text-white font-bold text-xs shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
              isTelegram 
                ? 'bg-sky-500 hover:bg-sky-600 shadow-sky-200' 
                : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
            }`}
            title={`Instant 1-Click Order on ${channelLabel}`}
          >
            {isTelegram ? <Send size={15} /> : <MessageCircle size={16} />}
          </button>

        </div>

      </div>

    </div>
  );
};
