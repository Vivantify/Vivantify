import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

const FeaturedTechSection = () => {
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
              <Sparkles size={12} /> Innovation Hub
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Driving the <span className="gradient-text">Future</span> of Enterprise Tech
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-semibold leading-relaxed">
              We combine human creativity with machine intelligence to build systems that don't just solve problems, but create new opportunities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: <Zap className="text-primary" size={24} />, title: "Hyper-Speed", desc: "Optimized for extreme processing performance." },
                { icon: <Target className="text-primary" size={24} />, title: "Precision", desc: "Data-driven architecture decisions." },
                { icon: <ShieldCheck className="text-primary" size={24} />, title: "Security", desc: "Next-gen zero-trust encryption protocols." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-2xl">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-white mb-1 tracking-tight text-base">{item.title}</h4>
                    <p className="text-xs text-gray-400 font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
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
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/15 bg-gray-950 p-4 shadow-2xl max-w-md w-full">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Futuristic cyber security network server" 
                className="rounded-[1.8rem] border border-white/5 animate-float shadow-2xl w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedTechSection;
