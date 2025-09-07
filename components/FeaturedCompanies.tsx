
import React from 'react';

const companies = [
  "https://logo.clearbit.com/stripe.com",
  "https://logo.clearbit.com/intercom.com",
  "https://logo.clearbit.com/workday.com",
  "https://logo.clearbit.com/shopify.com",
  "https://logo.clearbit.com/hubspot.com",
  "https://logo.clearbit.com/fenergo.com",
];

const FeaturedCompanies: React.FC = () => {
  return (
    <section id="featured-companies" className="py-16 bg-off-white">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-soft-grey text-sm font-semibold uppercase tracking-wider mb-8">
          Powering the Irish Tech Ecosystem
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {companies.map((logoUrl, index) => (
            <img 
              key={index}
              src={logoUrl} 
              alt={`Company logo ${index + 1}`}
              className="h-7 object-contain filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;