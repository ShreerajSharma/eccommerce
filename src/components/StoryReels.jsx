import React from 'react';
import { Sparkles, Flame, Crown, Heart, Gift, Zap } from 'lucide-react';

const STORY_ITEMS = [
  {
    id: 'story-1',
    title: 'New Drops',
    tag: 'NEW IN',
    category: 'Kurtis & Suits',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=300&q=80',
    isLive: true
  },
  {
    id: 'story-2',
    title: 'Silk Sarees',
    tag: 'HANDLOOM',
    category: 'Sarees',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=300&q=80',
    isLive: false
  },
  {
    id: 'story-3',
    title: 'Royal Bridal',
    tag: 'WEDDING',
    category: 'Lehenga Choli',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=300&q=80',
    isLive: true
  },
  {
    id: 'story-4',
    title: 'Western Luxe',
    tag: 'TRENDING',
    category: 'Western Dresses',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=300&q=80',
    isLive: false
  },
  {
    id: 'story-5',
    title: 'Co-ord Sets',
    tag: 'MUST HAVE',
    category: 'Co-ord Sets',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80',
    isLive: false
  },
  {
    id: 'story-6',
    title: 'Festive Deals',
    tag: 'FLAT 50%',
    category: 'All',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=300&q=80',
    isLive: true
  }
];

export const StoryReels = ({ onSelectCategory }) => {
  return (
    <div className="py-4 bg-[#fcfaf7] border-b border-[#ebdcc7]/50">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {STORY_ITEMS.map((story) => (
            <button
              key={story.id}
              onClick={() => onSelectCategory(story.category)}
              className="flex flex-col items-center gap-1.5 group shrink-0 transition-transform active:scale-95 cursor-pointer"
            >
              {/* Animated Gradient Ring */}
              <div className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-amber-600 via-gold-400 to-brand-900 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                
                {/* Inner white border gap */}
                <div className="p-0.5 rounded-full bg-white">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>

                {/* Mini Badge */}
                {story.isLive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[8px] font-black uppercase px-1.5 py-0.2 rounded-full tracking-tighter shadow-sm border border-white">
                    HOT
                  </span>
                )}
              </div>

              {/* Title & Tag */}
              <div className="text-center">
                <span className="text-[11px] sm:text-xs font-bold text-stone-800 group-hover:text-brand-950 block leading-tight">
                  {story.title}
                </span>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-gold-700 block">
                  {story.tag}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
