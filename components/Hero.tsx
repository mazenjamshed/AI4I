import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-off-white">
      <div className="relative z-10 container mx-auto px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-near-black leading-tight mb-4">
          Ireland's AI Revolution <br /> Starts Here.
        </h1>
        <p className="text-lg md:text-xl text-soft-grey max-w-3xl mx-auto mb-8">
          Uniting innovators, investors, and industry leaders to forge the future of artificial intelligence in Ireland.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#about" className="bg-near-black text-off-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105">
            Explore
          </a>
          <a href="https://www.artificialintelligence-news.com/" target="_blank" rel="noopener noreferrer" className="bg-transparent text-near-black font-medium py-3 px-8 rounded-md border border-border-grey hover:border-near-black transition-all transform hover:scale-105">
            Latest News
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;