import React from 'react';

const principles = [
  "Collaboration Over Competition: We believe a rising tide lifts all boats.",
  "Innovation with Integrity: Ethical considerations are at the core of technological advancement.",
  "Global Ambition, Local Roots: Championing Irish talent on the world stage.",
  "Education as Empowerment: Fostering a culture of continuous learning and adaptation.",
  "Bold and Decisive Action: Moving with speed and conviction to seize opportunities."
];

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 bg-white border-t border-border-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-near-black">Our Manifesto</h2>
          <p className="text-soft-grey mt-4 max-w-2xl mx-auto">The core principles that guide our mission and community.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 mb-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 text-near-black rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-lg text-soft-grey pt-1">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;