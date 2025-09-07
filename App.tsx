import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCompanies from './components/FeaturedCompanies';
import About from './components/About';
import Sectors from './components/Sectors';
import WhyIreland from './components/WhyIreland';
import Mission from './components/Mission';
import Manifesto from './components/Manifesto';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-off-white font-sans text-near-black">
      <Header />
      <main>
        <Hero />
        <FeaturedCompanies />
        <About />
        <Mission />
        <Sectors />
        <WhyIreland />
        <Manifesto />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;