import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  Sparkles, 
  Tag, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Gift, 
  Check, 
  ChevronRight,
  Percent,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

const FREE_SHIPPING_THRESHOLD = 1499;

export const CartDrawer = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onProceedToCheckout,
  appliedPromo, 
  setAppliedPromo,
  coupons = [],
  settings = {}
}) => {
  if (!isOpen) return null;

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccessMsg, setPromoSuccessMsg] = useState('');
  const [isGiftWrap, setIsGiftWrap] = useState(false);

  const isTelegram = settings.orderChannel === 'telegram';
  const channelLabel = isTelegram ? 'Telegram' : (settings.orderChannel === 'both' ? 'Direct 1-Click' : 'WhatsApp');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Calculate discount based on active coupons
  let discountAmount = 0;
  if (appliedPromo) {
    const coupon = coupons.find(c => c.code.toUpperCase() === appliedPromo.toUpperCase());
    if (coupon) {
      if (coupon.discountType === 'percentage') {
        discountAmount = Math.round((subtotal * coupon.discountValue) / 100);
      } else {
        discountAmount = Math.min(subtotal, coupon.discountValue);
      }
    } else if (appliedPromo === 'ROYAL10') {
      discountAmount = Math.round(subtotal * 0.10);
    }
  }

  const giftWrapFee = isGiftWrap ? 49 : 0;
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 99;
  const grandTotal = Math.max(0, subtotal - discountAmount + giftWrapFee + (subtotal === 0 ? 0 : shippingFee));

  // Progress to free shipping
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountNeededForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}
  };

  const handleApplyCouponCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    const coupon = coupons.find(c => c.code.toUpperCase() === cleanCode);

    if (coupon) {
      if (subtotal < coupon.minOrderAmount) {
        setPromoError(`Requires minimum order of ₹${coupon.minOrderAmount.toLocaleString('en-IN')}`);
        setPromoSuccessMsg('');
        return;
      }
      setAppliedPromo(cleanCode);
      setPromoError('');
      setPromoSuccessMsg(`🎉 Coupon "${cleanCode}" applied successfully!`);
      triggerConfetti();
    } else if (cleanCode === 'ROYAL10' || cleanCode === 'FESTIVE10') {
      setAppliedPromo(cleanCode);
      setPromoError('');
      setPromoSuccessMsg(`🎉 Coupon "${cleanCode}" applied for 10% OFF!`);
      triggerConfetti();
    } else {
      setPromoError('Invalid coupon code. Try ROYAL10 or select a coupon below.');
      setPromoSuccessMsg('');
    }
  };

  const handleApplyPromoForm = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    handleApplyCouponCode(promoInput);
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoInput('');
    setPromoSuccessMsg('');
    setPromoError('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/70 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#fdfcf9] shadow-2xl border-l border-gold-400 flex flex-col justify-between">
          
          {/* 1. DRAWER HEADER */}
          <div className="p-4 sm:p-5 royal-maroon-bg text-gold-100 flex items-center justify-between border-b border-gold-500/40">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-gold-300" />
              <h2 className="font-serif text-lg font-bold tracking-wide">
                Your Shopping Bag
              </h2>
              <span className="text-xs bg-gold-400 text-brand-950 font-extrabold px-2.5 py-0.5 rounded-full ml-1 shadow-sm">
                {cartItems.reduce((a, c) => a + c.quantity, 0)} Items
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gold-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* 2. FREE DELIVERY PROGRESS BAR (Zara / H&M feature) */}
          <div className="bg-amber-50/90 px-4 py-3 border-b border-amber-200 text-xs">
            <div className="flex items-center justify-between font-bold text-amber-950 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck size={14} className="text-amber-800" />
                {subtotal >= FREE_SHIPPING_THRESHOLD ? (
                  <span className="text-emerald-800">🎉 Congratulations! FREE Express Delivery Unlocked!</span>
                ) : (
                  <span>Add <strong>₹{amountNeededForFreeShip}</strong> more for <strong>FREE Express Delivery</strong></span>
                )}
              </span>
              <span className="text-stone-500 font-mono text-[11px]">{progressPercent}%</span>
            </div>

            <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 via-gold-500 to-emerald-600 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* 3. DRAWER BODY - ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-stone-100 border border-gold-300/40 flex items-center justify-center text-stone-400">
                  <ShoppingBag size={36} className="text-gold-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-800">Your bag is empty</h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore our luxury collection of handcrafted designer Kurtis, Sarees, and Lehengas.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 royal-maroon-bg text-gold-100 text-xs font-bold rounded-full shadow-md hover:opacity-95 transition-all cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div 
                      key={`${item.id}-${item.selectedSize}`}
                      className="bg-white p-3.5 rounded-2xl border border-[#ebdcc7] shadow-xs flex gap-3.5 items-center group"
                    >
                      {/* Thumbnail */}
                      <div className="w-16 h-20 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading text-xs sm:text-sm font-bold text-stone-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          Size: <strong className="text-brand-950 font-bold">{item.selectedSize}</strong> • {item.fabric || "Silk / Cotton"}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-extrabold text-sm text-brand-950">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 bg-stone-100 rounded-lg p-1 border border-stone-200">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                              className="w-6 h-6 rounded bg-white text-stone-700 hover:text-rose-600 flex items-center justify-center font-bold text-xs shadow-xs cursor-pointer"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-bold px-1 text-stone-900">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                              className="w-6 h-6 rounded bg-white text-stone-700 hover:text-brand-900 flex items-center justify-center font-bold text-xs shadow-xs cursor-pointer"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id, item.selectedSize)}
                        className="text-stone-300 hover:text-rose-600 p-1.5 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* 4. COUPON & PROMO CODE SECTION */}
                <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-950">
                    <span className="flex items-center gap-1">
                      <Tag size={13} className="text-amber-700" />
                      <span>Apply Luxury Promo Code</span>
                    </span>
                    {appliedPromo && (
                      <button
                        type="button"
                        onClick={handleRemovePromo}
                        className="text-[11px] text-rose-700 hover:underline font-bold"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  {/* Promo Input */}
                  {!appliedPromo ? (
                    <form onSubmit={handleApplyPromoForm} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter coupon (e.g. ROYAL10)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="flex-1 px-3 py-2 bg-white border border-amber-300 rounded-xl text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-amber-600 text-stone-900"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 royal-maroon-bg text-gold-100 font-bold text-xs rounded-xl hover:opacity-95 transition-all cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                  ) : (
                    <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-800 font-bold">
                      <span className="flex items-center gap-1.5">
                        <Sparkles size={14} className="text-emerald-600" />
                        <span>Code <strong>{appliedPromo}</strong> Applied (-₹{discountAmount.toLocaleString('en-IN')})</span>
                      </span>
                      <Check size={16} className="text-emerald-600" />
                    </div>
                  )}

                  {promoError && (
                    <p className="text-[11px] text-rose-700 font-semibold">{promoError}</p>
                  )}
                  {promoSuccessMsg && (
                    <p className="text-[11px] text-emerald-700 font-bold">{promoSuccessMsg}</p>
                  )}

                  {/* Clickable Quick Coupon Chips */}
                  {!appliedPromo && coupons.length > 0 && (
                    <div className="pt-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">Available Offers:</p>
                      <div className="flex gap-1.5 flex-wrap">
                        {coupons.filter(c => c.isActive).map((coup) => (
                          <button
                            key={coup.code}
                            type="button"
                            onClick={() => handleApplyCouponCode(coup.code)}
                            className="text-[10px] font-bold px-2 py-1 rounded-lg bg-white border border-amber-300 text-amber-900 hover:bg-amber-100 flex items-center gap-1 transition-all cursor-pointer"
                          >
                            <span>🏷️ {coup.code}</span>
                            <span className="text-stone-400">({coup.discountType === 'percentage' ? `${coup.discountValue}% OFF` : `₹${coup.discountValue} OFF`})</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. GIFT WRAP OPTION */}
                <label className="flex items-center justify-between p-3 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-gold-400 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Gift size={18} className="text-amber-700" />
                    <div>
                      <p className="text-xs font-bold text-stone-900">Boutique Luxury Gift Packaging</p>
                      <p className="text-[10px] text-stone-500">Royal ribbon box & custom greeting note (+₹49)</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={isGiftWrap}
                    onChange={(e) => setIsGiftWrap(e.target.checked)}
                    className="rounded text-brand-900 w-4 h-4"
                  />
                </label>
              </>
            )}
          </div>

          {/* 6. DRAWER FOOTER & TOTALS */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#ebdcc7] space-y-3 shadow-lg">
              
              {/* Calculations */}
              <div className="space-y-1.5 text-xs text-stone-600 border-b border-stone-100 pb-3">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-stone-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>Coupon Discount</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {isGiftWrap && (
                  <div className="flex justify-between text-stone-700">
                    <span>Gift Packaging</span>
                    <span>₹49</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span className={shippingFee === 0 ? "text-emerald-700 font-bold" : "text-stone-900 font-semibold"}>
                    {shippingFee === 0 ? "FREE (Express Delivery)" : `₹${shippingFee}`}
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-2 border-t border-stone-200 text-sm sm:text-base font-extrabold text-stone-950">
                  <span>Grand Total (GST Incl.)</span>
                  <span className="font-heading text-lg sm:text-xl text-brand-950">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onProceedToCheckout({
                    discountAmount,
                    giftWrapFee,
                    shippingFee,
                    grandTotal
                  });
                }}
                className={`w-full py-4 text-white font-extrabold text-sm rounded-2xl shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                  isTelegram ? 'bg-sky-600 hover:bg-sky-700' : 'royal-maroon-bg text-gold-100'
                }`}
              >
                {isTelegram ? <Send size={18} /> : <MessageCircle size={18} className="text-gold-300" />}
                <span>Instant 1-Click {channelLabel} Order</span>
                <ArrowRight size={16} />
              </button>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-3 text-[10px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-600" />
                  100% Genuine Handcrafted
                </span>
                <span>•</span>
                <span>7-Day Easy Exchange</span>
                <span>•</span>
                <span>Fast Dispatch</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
