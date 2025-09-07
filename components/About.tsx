
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-near-black">The Epicenter of Irish Innovation</h2>
          <p className="text-soft-grey mt-4 max-w-2xl mx-auto">AI4I.ai is the nexus for Ireland's burgeoning tech landscape, spotlighting the pioneers and game-changers shaping our digital future.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img src="https://picsum.photos/seed/irelandtech/600/400" alt="Irish Tech Scene" className="rounded-lg shadow-md" />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-serif font-bold text-near-black mb-4">Our Vision</h3>
            <p className="text-soft-grey mb-4">
              To build a cohesive platform that accelerates growth and collaboration within the Irish technology sector. We connect startups, established corporations, investors, and talent, creating a powerful network effect that propels Ireland to the forefront of global innovation.
            </p>
            <p className="text-soft-grey">
              From Dublin's Silicon Docks to tech hubs in Cork, Galway, and beyond, we celebrate the unique spirit and relentless ambition that defines Ireland's tech community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;