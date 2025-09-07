import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-off-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-near-black">AI4I.ai</a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-soft-grey hover:text-near-black transition-colors">About</a>
            <a href="#sectors" className="text-soft-grey hover:text-near-black transition-colors">Sectors</a>
            <a href="#why-ireland" className="text-soft-grey hover:text-near-black transition-colors">Why Ireland</a>
            <a href="#news" className="text-soft-grey hover:text-near-black transition-colors">News</a>
            <a href="#oireachtas-insights" className="text-soft-grey hover:text-near-black transition-colors">Oireachtas Insights</a>
            <a href="#ai-education" className="text-soft-grey hover:text-near-black transition-colors">AI Education</a>
          </nav>
          <button className="hidden md:block bg-near-black text-off-white font-medium py-2 px-5 rounded-md hover:bg-opacity-90 transition-all">
            Get Involved
          </button>
          <button className="md:hidden text-near-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;