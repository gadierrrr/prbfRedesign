
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker border-t border-brand-yellow/80 pt-16 pb-8 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6 text-brand-yellow">
            <i className="fa-solid fa-sun text-xl"></i>
            <span className="text-xl font-bold text-white">IslaFinder</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            Curating the most breathtaking coastal experiences Puerto Rico has to offer. Find your paradise today.
          </p>
          <div className="flex gap-4">
            {['instagram', 'twitter', 'tiktok'].map((platform) => (
              <a 
                key={platform}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-dark transition-all" 
                href="#"
              >
                <i className={`fa-brands fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 col-span-1 lg:col-span-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-6">About</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a className="hover:text-brand-yellow transition-colors" href="#">Our Story</a></li>
              <li><a className="hover:text-brand-yellow transition-colors" href="#">Team</a></li>
              <li><a className="hover:text-brand-yellow transition-colors" href="#">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Discover</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a className="hover:text-brand-yellow transition-colors" href="#">Beaches</a></li>
              <li><a className="hover:text-brand-yellow transition-colors" href="#">Experiences</a></li>
              <li><a className="hover:text-brand-yellow transition-colors" href="#">Guides</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0">
            <h4 className="text-white font-bold mb-6">Newsletter Sign up</h4>
            <form className="flex flex-col gap-3">
              <input 
                className="bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow w-full" 
                placeholder="Enter your email" 
                type="email" 
              />
              <button className="bg-brand-yellow text-brand-dark font-bold text-sm py-3 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/10 w-full" type="button">
                Subscribe
              </button>
            </form>
            <div className="mt-8">
              <h4 className="text-white font-bold mb-4">Support</h4>
              <div className="flex gap-4 text-xs text-gray-500">
                <a className="hover:text-white" href="#">FAQs</a>
                <a className="hover:text-white" href="#">Contact Us</a>
                <a className="hover:text-white" href="#">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none w-64 h-64 lg:w-96 lg:h-96 opacity-30">
        <img 
          alt="Palm Tree Illustration" 
          className="w-full h-full object-contain object-bottom-right mix-blend-screen" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiqqat254e5SkOwSi3KavRf2MzbaAjP4cni8okk54WPmTPCQ1et0ppd3FgPFSc38QpI__83Tn1qTF2m19yjK-w3PLOZDy5ZU_uap9sVa7r8V85IbNvWHVHmoNZDuLvTFFiaOIzjltI5gPMbVg-dgk0SQYlRIgOHgGOwgj1JSsFLq6CnMsyJqrSr5yS71UQvSXAxZlRKUjotdlNm_bHop92geeU2CJljy_tFNMyV9XcCNIl-SwnENCmLBlaa8jhLFex53TXDJCr_mRE" 
        />
      </div>

      <div className="relative z-10 border-t border-white/5 pt-8 text-center md:text-left">
        <p className="text-xs text-gray-600">© 2023 IslaFinder. All rights reserved.</p>
      </div>
    </footer>
  );
};
