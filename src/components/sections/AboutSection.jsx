import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, Users, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Deep Expertise",
      desc: "Hands-on experience across enterprise applications, cloud infrastructure, data platforms, and automation."
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Dedicated Team",
      desc: "Engineers and consultants who stay engaged from discovery through post-launch support."
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "Results-Driven",
      desc: "Focus on outcomes such as reduced manual work, improved reliability, and faster delivery cycles."
    },
    {
      icon: <ShieldCheck className="text-primary" size={24} />,
      title: "Pragmatic Innovation",
      desc: "Thoughtful use of modern tools and AI where they add real value, not unnecessary complexity."
    }
  ];

  return (
    <section id="about" className="py-28 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-[-10%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Text Left */}
          <div className="flex-grow lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary">
              <Sparkles size={12} /> ABOUT VIVANTIFY
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary-dark tracking-tight leading-[1.1]">
              Crafting Scalable <br />
              <span className="gradient-text">Digital Solutions</span>
            </h2>
            <div className="space-y-4 text-lg text-text-light leading-relaxed font-semibold">
              <p>
                Vivantify Technology Solutions India Pvt Ltd is a Coimbatore‑based technology company that helps growing small and mid-size teams build secure, scalable digital solutions across software, cloud, and automation.
              </p>
              <p className="text-base text-text-light/90 font-medium">
                Founded by engineers with experience in enterprise IT and product development, we focus on practical architectures, reliable execution, and long‑term maintainability.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100/10 rounded-3xl border-l-4 border-primary shadow-sm">
              <h4 className="font-black text-primary-dark uppercase text-xxs tracking-widest mb-1.5">Our Core Mission</h4>
              <p className="text-text-main text-sm font-semibold leading-relaxed">
                Our mission is to help growing small and mid‑size teams adopt scalable, secure software and cloud architectures without the overhead of a large in‑house IT department.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {values.map((v, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4, x: 2 }}
                  className="group flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary hover:bg-orange-50/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="mt-0.5 bg-white p-3 rounded-xl h-fit shadow-sm border border-gray-100/80 text-primary shrink-0 transition-colors duration-300 group-hover:border-primary/30">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-black text-primary-dark mb-1 transition-colors duration-300">{v.title}</h4>
                    <p className="text-text-light text-xs font-semibold leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Graphic Right */}
          <div className="flex-shrink-0 lg:w-1/2 relative w-full">
            <div className="bg-primary/5 absolute inset-0 rounded-[2.5rem] -rotate-3 scale-105 pointer-events-none"></div>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Vivantify team meeting" 
                className="w-full h-auto object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
