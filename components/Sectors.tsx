
import React from 'react';
import FintechIcon from './icons/FintechIcon';
import MedtechIcon from './icons/MedtechIcon';
import AgritechIcon from './icons/AgritechIcon';
import GreenTechIcon from './icons/GreenTechIcon';

const sectors = [
  {
    icon: <FintechIcon />,
    name: "FinTech",
    description: "Revolutionizing finance from Dublin's IFSC to global markets with blockchain, payments, and RegTech innovations."
  },
  {
    icon: <MedtechIcon />,
    name: "MedTech",
    description: "Pioneering the future of healthcare with cutting-edge medical devices, diagnostics, and digital health solutions."
  },
  {
    icon: <AgritechIcon />,
    name: "AgriTech",
    description: "Fusing heritage with technology to create sustainable and efficient farming for a global population."
  },
  {
    icon: <GreenTechIcon />,
    name: "GreenTech",
    description: "Driving the green transition with renewable energy, sustainable materials, and circular economy technologies."
  }
];

const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="py-20 bg-off-white border-t border-border-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-near-black">Key Innovation Sectors</h2>
          <p className="text-soft-grey mt-4 max-w-2xl mx-auto">Ireland is a global leader across a diverse range of high-tech industries.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div 
              key={sector.name} 
              className="bg-white p-8 rounded-lg border border-border-grey hover:border-near-black hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-4 text-near-black">
                {sector.icon}
              </div>
              <h3 className="text-xl font-bold text-near-black mb-2">{sector.name}</h3>
              <p className="text-soft-grey text-sm">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;