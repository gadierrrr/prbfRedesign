
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrendingSection } from './components/TrendingSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main className="relative z-10 bg-brand-dark">
        <TrendingSection />
        
        {/* Additional Content Areas can be added here */}
        <section className="py-24 px-6 md:px-20 text-center">
          <div className="max-w-4xl mx-auto border border-brand-yellow/20 rounded-3xl p-12 bg-white/5 backdrop-blur-sm">
            <h3 className="text-4xl font-serif italic text-white mb-6">Start your journey into the unknown.</h3>
            <p className="text-gray-400 mb-8 text-lg">Our AI guide can help you find the exact beach vibe you're looking for, whether it's for surfing, relaxation, or bioluminescent wonders.</p>
            <button className="px-12 py-4 bg-brand-yellow text-brand-dark font-bold rounded-full hover:scale-105 transition-transform">
              Ask Our Guide
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
