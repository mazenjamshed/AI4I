import React from 'react';

const WakeUpCall: React.FC = () => {
  return (
    <section className="py-20 bg-accent-lime text-tech-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">This is Ireland's Wake-Up Call</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          The AI revolution isn't coming; it's here. Ireland has a once-in-a-generation opportunity to lead, not follow. The time for talk is over. The time for action is now.
        </p>
      </div>
    </section>
  );
};

export default WakeUpCall;
