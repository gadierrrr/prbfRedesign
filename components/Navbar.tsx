
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${scrolled ? 'bg-brand-darker/90 backdrop-blur-md shadow-lg' : ''}`}>
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="text-brand-yellow text-2xl group-hover:rotate-180 transition-transform duration-700">
          <i className="fa-solid fa-sun"></i>
        </div>
        <span className="text-2xl font-bold tracking-tight text-white">IslaFinder</span>
      </div>

      <div className="hidden md:flex items-center gap-8 bg-brand-darker/50 backdrop-blur-sm px-8 py-2 rounded-full border border-white/10">
        {NAV_LINKS.map((link) => (
          <a key={link.label} className="text-sm font-medium hover:text-brand-yellow transition-colors text-white" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block bg-brand-yellow hover:bg-yellow-400 font-bold text-sm px-6 py-2 rounded-full transition-colors shadow-lg shadow-yellow-500/20 text-black">
          Sign In
        </button>
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors border border-white/10">
          <i className="fa-regular fa-user text-white"></i>
        </div>
      </div>
    </nav>
  );
};
