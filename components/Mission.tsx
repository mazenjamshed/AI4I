import React from 'react';
import LeadersIcon from './icons/LeadersIcon';
import IndustryIcon from './icons/IndustryIcon';
import PublicIcon from './icons/PublicIcon';

const missions = [
  {
    icon: <LeadersIcon />,
    title: "Empower Leaders",
    description: "Equip Irish business and policy leaders with the knowledge and network to navigate the AI landscape and drive strategic adoption."
  },
  {
    icon: <IndustryIcon />,
    title: "Catalyze Industry",
    description: "Foster a collaborative ecosystem where startups, SMEs, and multinationals can innovate, scale, and compete on a global stage."
  },
  {
    icon: <PublicIcon />,
    title: "Engage the Public",
    description: "Promote a national dialogue on the ethical and societal implications of AI, ensuring a future that is both innovative and inclusive."
  }
];

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white border-t border-border-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-near-black">Our Mission</h2>
          <p className="text-soft-grey mt-4 max-w-2xl mx-auto">To accelerate Ireland's AI maturity by connecting and empowering the entire ecosystem.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {missions.map((mission, index) => (
            <div 
              key={mission.title} 
              className="bg-off-white p-8 rounded-lg border border-transparent hover:border-border-grey transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-4 text-near-black">
                {mission.icon}
              </div>
              <h3 className="text-xl font-bold text-near-black mb-2">{mission.title}</h3>
              <p className="text-soft-grey text-sm">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;