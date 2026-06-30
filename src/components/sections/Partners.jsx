import React from 'react';

const Partners = () => {
  const partners = [
    "Microsoft", "Google Cloud", "AWS", "Databricks", "Snowflake", "NVIDIA"
  ];

  return (
    <section className="py-16 bg-primary-dark border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-black text-gray-500 uppercase tracking-[0.25em] mb-10">
          Empowering the World's Leading Innovators
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20 opacity-40 hover:opacity-80 transition-opacity duration-500">
          {partners.map((p, i) => (
            <div 
              key={i} 
              className="text-2xl md:text-3xl font-black text-white tracking-tighter hover:text-primary hover:scale-105 transition-all duration-300 cursor-default"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
