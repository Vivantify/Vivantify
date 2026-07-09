import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, ShieldCheck, Sparkles } from 'lucide-react';

const FeaturedTechSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    { 
      icon: <Zap className="text-primary" size={24} />, 
      title: "Performance", 
      desc: "Built for high throughput and stability with careful capacity planning, optimization, and load testing so your systems stay responsive as you scale.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      icon: <Target className="text-primary" size={24} />, 
      title: "Precision", 
      desc: "Data-informed architecture and implementation decisions using metrics, observability, and real-world usage patterns to continuously refine your platforms.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      icon: <ShieldCheck className="text-primary" size={24} />, 
      title: "Security", 
      desc: "Solutions designed with role-based access, least-privilege principles, and industry-standard encryption to help protect your applications and data end-to-end.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-28 bg-primary-dark relative overflow-hidden text-white">
      {/* Background spotlights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-primary rounded-full blur-[130px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-accent-blue rounded-full blur-[130px] animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Left */}
          <div className="flex-grow lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary">
              <Sparkles size={12} /> INNOVATION HUB
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Solving the <br />
              Toughest Enterprise <br />
              <span className="gradient-text">Tech Challenges</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-semibold leading-relaxed">
              We combine experienced engineers with modern AI and automation tools to build systems that reduce manual work, improve reliability, and uncover new opportunities for your business.
            </p>
            
            <div className="flex flex-col gap-4 pt-4">
              {pillars.map((item, i) => {
                const isActive = activeTab === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`w-full text-left flex gap-5 p-5 rounded-3xl border transition-all duration-300 backdrop-blur-md cursor-pointer ${
                      isActive 
                        ? "bg-white/10 border-primary/45 shadow-2xl ring-1 ring-primary/20" 
                        : "bg-white/[0.03] border-white/5 opacity-70 hover:opacity-100 hover:bg-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isActive ? "bg-primary/20 border-primary/30 text-white" : "bg-white/5 border-white/5"
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-white mb-1 tracking-tight text-base">{item.title}</h3>
                      <p className="text-xs text-gray-300 font-semibold leading-relaxed">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Visual Right */}
          <div className="flex-shrink-0 lg:w-1/2 relative w-full flex justify-center items-center">
            {/* Spinning decorative border */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-white/10 rounded-full scale-[1.1] pointer-events-none"
            ></motion.div>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/15 bg-gray-950 p-4 shadow-2xl max-w-2xl w-full">
              <motion.img 
                key={activeTab}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={pillars[activeTab].image} 
                alt={pillars[activeTab].title} 
                className="rounded-[1.8rem] border border-white/5 shadow-2xl w-full h-[240px] sm:h-[340px] md:h-[450px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedTechSection;
