import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';

export const CustomerReviews = ({ reviews = [] }) => {
  if (reviews.length === 0) return null;

  return (
    <section className="py-14 bg-gradient-to-b from-[#faf7f2] via-white to-[#faf7f2] border-t border-[#ebdcc7]/60">
      <div className="container mx-auto px-4 space-y-10">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2 max-w-xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={13} className="text-amber-700" />
            <span>Over 10,000+ Happy Patrons Across India</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
            Voices of Royal Elegance
          </h2>
          <p className="text-xs text-stone-500 font-light">
            Real experiences from boutique buyers who cherish handcrafted excellence and fine fabrics.
          </p>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#fdfcf9] p-6 rounded-3xl border border-[#ebdcc7] shadow-xs hover:shadow-xl transition-all space-y-4 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-4 right-4 text-amber-300/30" size={40} />

              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>

                {rev.productName && (
                  <p className="text-[11px] text-amber-900 font-semibold">
                    Purchased: <strong>{rev.productName}</strong>
                  </p>
                )}
              </div>

              {/* Author */}
              <div className="pt-3 border-t border-[#ebdcc7]/60 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-xs text-stone-900">{rev.name}</h4>
                    {rev.verifiedBuyer && (
                      <CheckCircle size={13} className="text-emerald-600" title="Verified Buyer" />
                    )}
                  </div>
                  <p className="text-[10px] text-stone-400">{rev.city} • {rev.date}</p>
                </div>

                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                  Verified Buyer
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
