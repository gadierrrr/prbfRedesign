
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          alt="Puerto Rico Coastline" 
          className="absolute inset-0 w-full h-full object-cover scale-110" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqEoJChhZLm752yPV3RbmObRb-BOYVcbN3th2PzETqdXe0dX2GrIlHWs5cqoAWnIlalErubfw-_Jox3divB2_si-88Ad1Bwca75EcDJLOqOiXDSZimwsj_mduEzKaWkrV3aulXCo3e_wVbfRDfyfuiv483N7VsttGDyIo5YQY1gP4KhUddDlGXNrHnL4R-XUKuTdu8AjT3ATKTeoGNHhJW7RgYlf5Dcz3ccNRTdI-RIY6x5SsXXNK99rXyPeNsFniK7oZRHRLNlQ3A"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 pt-20">
        <div className="mb-6 animate-fade-in-up text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-2 drop-shadow-lg">
            Puerto Rico's Coastline,
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-uncharted text-brand-yellow drop-shadow-lg">
            Uncharted.
          </h1>
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light animate-fade-in-up transition-all delay-100 drop-shadow-md mx-auto text-center opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
          Discover the hidden gems of the archipelago. From the bioluminescent bays to the secluded white sands of the east.
        </p>

        <div className="w-full max-w-2xl relative mb-8 animate-fade-in-up group opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.4s' }}>
          <div className="relative bg-black/40 backdrop-blur-md border border-white/20 rounded-full p-2 flex items-center shadow-2xl transition-all duration-300 group-hover:border-brand-yellow/50">
            <div className="pl-6 pr-4 text-brand-yellow text-xl">
              <i className="fa-regular fa-compass"></i>
            </div>
            <input 
              className="w-full bg-transparent border-none text-white placeholder-gray-400 focus:ring-0 text-lg py-3" 
              placeholder="Where do you want to get lost?" 
              type="text"
            />
            <button className="bg-brand-yellow hover:bg-yellow-400 text-brand-dark w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform group-hover:scale-105">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.6s' }}>
          {[
            { icon: 'fa-water', label: 'Surfing', active: false },
            { icon: 'fa-umbrella-beach', label: 'Family Friendly', active: false },
            { icon: 'fa-tree', label: 'Secluded', active: true },
            { icon: 'fa-mask', label: 'Snorkeling', active: false }
          ].map((tag) => (
            <button 
              key={tag.label} 
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border transition-all group ${tag.active ? 'border-brand-yellow/50 text-brand-yellow' : 'border-white/20 hover:border-brand-yellow/50'}`}
            >
              <i className={`fa-solid ${tag.icon} ${tag.active ? 'text-brand-yellow scale-110' : 'text-gray-300 group-hover:text-brand-yellow'} transition-all`}></i>
              <span className="text-sm font-medium">{tag.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full px-10 flex items-end z-20 justify-end">
        <div className="flex flex-col gap-4">
          <button className="w-14 h-14 rounded-full bg-brand-darker/80 backdrop-blur-md border border-white/20 text-white hover:text-brand-yellow hover:border-brand-yellow flex items-center justify-center transition-all shadow-lg hover:shadow-brand-yellow/20">
            <i className="fa-regular fa-map text-xl"></i>
          </button>
          <button className="w-14 h-14 rounded-full bg-brand-darker/80 backdrop-blur-md border border-white/20 text-white hover:text-brand-yellow hover:border-brand-yellow flex items-center justify-center transition-all shadow-lg hover:shadow-brand-yellow/20">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 animate-bounce">
        <span className="text-[10px] tracking-widest font-bold text-gray-400 uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gray-500"></div>
      </div>
    </header>
  );
};
