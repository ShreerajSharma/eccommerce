import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingBag, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Ruler, 
  Check, 
  Plus, 
  Minus,
  Tag,
  Send
} from 'lucide-react';
import { generateSingleProductChannelUrl } from '../utils/whatsapp';

export const ProductQuickView = ({ product, onClose, onAddToCart, settings = {} }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const isTelegram = settings.orderChannel === 'telegram';
  const channelLabel = isTelegram ? 'Telegram' : 'WhatsApp';

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const savingsAmount = product.originalPrice ? product.originalPrice - product.price : 0;

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleChannelOrder = () => {
    const url = generateSingleProductChannelUrl({ product, selectedSize, settings });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-stone-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#fdfcf9] rounded-3xl shadow-2xl border border-gold-300/60 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-stone-700 hover:bg-brand-900 hover:text-white shadow-md flex items-center justify-center transition-all"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery */}
          <div className="p-4 sm:p-6 bg-[#faf5ed] flex flex-col justify-between">
            {/* Main Active Image */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-gold-300/50 shadow-md">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 royal-maroon-bg text-gold-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gold-400/40">
                  {product.badge}
                </span>
              )}
              {product.offer && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-amber-600 via-brand-900 to-amber-700 text-gold-100 px-3 py-1.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md">
                  <Sparkles size={14} className="text-gold-300 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>{product.offer}</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 mt-3 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === img ? 'border-brand-900 scale-105' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="p-5 sm:p-8 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-700 bg-gold-100/80 px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                  <Star size={16} fill="currentColor" />
                  <span>{product.rating || 4.8}</span>
                  <span className="text-stone-400 font-normal text-xs">({product.reviewsCount || 45} Verified Ratings)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                {product.name}
              </h2>

              {/* Offer Banner if present */}
              {product.offer && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold rounded-lg">
                  <Tag size={13} className="text-amber-700" />
                  <span>Exclusive Offer: {product.offer}</span>
                </div>
              )}

              {/* Price & Savings */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-950">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-sm sm:text-base text-stone-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">
                      {discountPercent}% OFF (Save ₹{savingsAmount.toLocaleString('en-IN')})
                    </span>
                  </>
                )}
              </div>

              <p className="text-xs text-stone-500 mt-1">
                Inclusive of all taxes • Express 2-4 day shipping across India
              </p>

              {/* Size Selector */}
              <div className="mt-5 pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-stone-700">
                    Select Size
                  </label>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-xs text-brand-900 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Ruler size={13} />
                    <span>{showSizeGuide ? 'Hide Size Chart' : 'Size Chart'}</span>
                  </button>
                </div>

                {/* Size Options */}
                <div className="flex gap-2 flex-wrap">
                  {(product.sizes || ["XS", "S", "M", "L", "XL", "XXL", "3XL", "Free Size"]).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
                        selectedSize === size
                          ? 'royal-maroon-bg text-gold-100 border-brand-950 shadow-md scale-105'
                          : 'bg-white text-stone-700 border-stone-300 hover:border-brand-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Size Guide Table */}
                {showSizeGuide && (
                  <div className="mt-3 p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-xs animate-fadeIn">
                    <p className="font-bold text-amber-900 mb-1">Standard Size Chart (Inches):</p>
                    <div className="grid grid-cols-4 gap-1 text-[11px] text-stone-700 text-center">
                      <div className="font-bold bg-amber-100/80 p-1 rounded">Size</div>
                      <div className="font-bold bg-amber-100/80 p-1 rounded">Bust</div>
                      <div className="font-bold bg-amber-100/80 p-1 rounded">Waist</div>
                      <div className="font-bold bg-amber-100/80 p-1 rounded">Hip</div>
                      
                      <div className="p-1">S</div><div className="p-1">36"</div><div className="p-1">32"</div><div className="p-1">38"</div>
                      <div className="p-1">M</div><div className="p-1">38"</div><div className="p-1">34"</div><div className="p-1">40"</div>
                      <div className="p-1">L</div><div className="p-1">40"</div><div className="p-1">36"</div><div className="p-1">42"</div>
                      <div className="p-1">XL</div><div className="p-1">42"</div><div className="p-1">38"</div><div className="p-1">44"</div>
                      <div className="p-1">XXL</div><div className="p-1">44"</div><div className="p-1">40"</div><div className="p-1">46"</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs uppercase font-bold tracking-wider text-stone-700">Quantity:</span>
                <div className="flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-stone-600 hover:bg-stone-100 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 text-xs font-bold text-stone-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-stone-600 hover:bg-stone-100 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Fabric & Specifications */}
              <div className="mt-4 p-3.5 bg-stone-100/70 rounded-2xl space-y-1.5 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-900 w-20">Fabric:</span>
                  <span>{product.fabric || 'Artisan Handcrafted Material'}</span>
                </div>
                {product.color && (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900 w-20">Color:</span>
                    <span>{product.color}</span>
                  </div>
                )}
                <div className="flex items-start gap-2 pt-1 border-t border-stone-200">
                  <span className="font-bold text-stone-900 w-20 shrink-0">Details:</span>
                  <span className="text-stone-600 leading-relaxed">{product.description}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'royal-maroon-bg text-gold-100 hover:opacity-95'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check size={18} />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} className="text-gold-300" />
                      <span>Add to Bag (₹{(product.price * quantity).toLocaleString('en-IN')})</span>
                    </>
                  )}
                </button>

                {/* Direct WhatsApp / Telegram Buy */}
                <button
                  onClick={handleChannelOrder}
                  disabled={!product.inStock}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
                    isTelegram 
                      ? 'bg-sky-500 hover:bg-sky-600' 
                      : 'bg-emerald-600 hover:bg-emerald-700'
                  }`}
                >
                  {isTelegram ? <Send size={16} /> : <MessageCircle size={18} />}
                  <span>Order on {channelLabel}</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-stone-500 text-center font-medium">
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck size={13} className="text-brand-800" />
                  <span>100% Original</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Truck size={13} className="text-amber-700" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <RefreshCw size={13} className="text-emerald-700" />
                  <span>Easy Exchange</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
