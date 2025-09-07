
import React from 'react';

const stats = [
  { value: "Top 5", label: "EU Tech Hub" },
  { value: "€1B+", label: "AI Investment" },
  { value: "1000+", label: "Multinational Tech Companies" },
  { value: "Gateway", label: "to EU Market" }
];

const WhyIreland: React.FC = () => {
  return (
    <section id="why-ireland" className="py-20 bg-white border-t border-border-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-near-black">Why Ireland?</h2>
          <p className="text-soft-grey mt-4 max-w-2xl mx-auto">A unique combination of talent, investment, and global connectivity.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="text-4xl md:text-5xl font-extrabold text-near-black mb-2">{stat.value}</p>
              <p className="text-soft-grey">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIreland;