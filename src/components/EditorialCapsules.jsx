import React from 'react';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';

export const EditorialCapsules = ({ onSelectCategory }) => {
  return (
    <section className="py-12 bg-[#faf7f2]">
      <div className="container mx-auto px-4 space-y-8">
        
        {/* Section Title */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold-700 block">
            LIMITED EDITION CAPSULES
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            The Haute Couture Lookbook
          </h2>
          <p className="text-xs text-stone-500 font-light leading-relaxed">
            Curated silhouettes reflecting the intersection of centuries-old Indian artisan heritage and contemporary international runway fashion.
          </p>
        </div>

        {/* 3-Column Editorial Grid (Zara / Net-A-Porter aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Capsule 1: Royal Silk Edit */}
          <div 
            onClick={() => onSelectCategory('Sarees')}
            className="group relative h-[450px] rounded-3xl overflow-hidden shadow-md cursor-pointer border border-[#ebdcc7]"
          >
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
              alt="The Royal Silk Edit"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-300">
                TIMELESS CLASSICS
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                The Royal Silk Edit
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                Pure Katan, Banarasi & Organza handloom sarees woven with pure metallic zari threads.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gold-300 group-hover:translate-x-2 transition-transform">
                <span>Explore Capsule</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* Capsule 2: Modern Anarkali & Kurtis */}
          <div 
            onClick={() => onSelectCategory('Kurtis & Suits')}
            className="group relative h-[450px] rounded-3xl overflow-hidden shadow-md cursor-pointer border border-[#ebdcc7]"
          >
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
              alt="Contemporary Kurtis"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-300">
                SIGNATURE CUTS
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Flared Anarkalis & Sets
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                Flowing silhouettes with intricate gota patti, mirror work and resham thread embroidery.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gold-300 group-hover:translate-x-2 transition-transform">
                <span>Shop The Silhouette</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* Capsule 3: Festive Velvet & Lehengas */}
          <div 
            onClick={() => onSelectCategory('Lehenga Choli')}
            className="group relative h-[450px] rounded-3xl overflow-hidden shadow-md cursor-pointer border border-[#ebdcc7]"
          >
            <img
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
              alt="Wedding & Celebration Capsule"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-300">
                BRIDAL & OCCASION
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                The Grand Celebration
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                Statement bridal lehengas and velvet ensembles designed for unforgettable moments.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gold-300 group-hover:translate-x-2 transition-transform">
                <span>View Wedding Edition</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
