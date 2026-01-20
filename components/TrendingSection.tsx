
import React, { useRef } from 'react';
import { DESTINATIONS } from '../constants';
import { Destination } from '../types';

const DestinationCard: React.FC<{ destination: Destination }> = ({ destination }) => (
  <article className="min-w-[300px] md:min-w-[400px] lg:min-w-[450px] relative group cursor-pointer snap-start rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
    <img 
      alt={destination.name} 
      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" 
      src={destination.image} 
    />
    <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
      <span className="text-orange-500">🔥</span>
      <span className="text-xs font-semibold text-white">{destination.views} views this week</span>
    </div>
    <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <span className="uppercase text-xs font-bold tracking-wider text-brand-yellow mb-2 block">{destination.location}</span>
      <h3 className="text-3xl font-bold text-white mb-2 font-serif italic">{destination.name}</h3>
      <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        {destination.description}
      </p>
    </div>
  </article>
);

export const TrendingSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 pl-6 md:pl-12 lg:pl-20 overflow-hidden bg-brand-dark">
      <div className="flex items-center justify-between pr-6 md:pr-12 lg:pr-20 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Trending Now</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 flex items-center justify-center transition-colors text-white"
          >
            <i className="fa-solid fa-chevron-left text-sm"></i>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 flex items-center justify-center transition-colors text-white"
          >
            <i className="fa-solid fa-chevron-right text-sm"></i>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar pr-6 md:pr-12 lg:pr-20 snap-x snap-mandatory"
      >
        {DESTINATIONS.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
        
        <article className="min-w-[300px] md:min-w-[400px] lg:min-w-[450px] relative group cursor-pointer snap-start rounded-xl overflow-hidden shadow-2xl opacity-60 hover:opacity-100 transition-all">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
          <div className="w-full h-[400px] bg-brand-darker flex items-center justify-center border border-white/5">
            <span className="text-white/20 font-bold text-xl uppercase tracking-widest">More to Explore</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 z-20">
            <h3 className="text-2xl font-bold text-white mb-1 font-serif italic">See All Experiences</h3>
            <p className="text-sm text-gray-400">Puerto Rico Archipelago</p>
          </div>
        </article>
      </div>
    </section>
  );
};
