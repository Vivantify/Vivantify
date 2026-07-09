import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck, Award, Heart, Handshake, Sparkles } from 'lucide-react';
import ProcessSection from '../components/sections/ProcessSection';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    { 
      icon: <Award className="text-primary w-6 h-6" />, 
      title: "Deep Expertise", 
      desc: "Hands-on experience across enterprise applications, cloud infrastructure, data platforms, and automation.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    { 
      icon: <Users className="text-primary w-6 h-6" />, 
      title: "Dedicated Team", 
      desc: "Engineers and consultants who stay engaged from discovery through post-launch support.",
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    { 
      icon: <Zap className="text-primary w-6 h-6" />, 
      title: "Results-Driven", 
      desc: "Focus on outcomes like reduced manual work, improved reliability, and faster delivery cycles.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    { 
      icon: <ShieldCheck className="text-primary w-6 h-6" />, 
      title: "Pragmatic Innovation", 
      desc: "Thoughtful use of modern tools and AI where they add real value, not unnecessary complexity.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];



  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 overflow-hidden bg-white"
    >
      {/* 1. Hero Section */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-gray-50/60 via-white to-white border-b border-gray-100/50 relative overflow-hidden">
        {/* Decorative Grid and Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#ea580c05_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Animated decorative shapes */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[25%] hidden lg:block w-16 h-16 bg-gradient-to-br from-primary to-orange-400 rounded-2xl opacity-20 blur-[1px] shadow-lg"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[15%] hidden lg:block w-24 h-24 bg-gradient-to-tr from-accent-blue to-purple-400 rounded-full opacity-10 blur-[2px] shadow-lg"
        />
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[12%] bottom-[15%] hidden lg:block px-4 py-2 bg-white/40 border border-white/60 backdrop-blur-sm rounded-full shadow-sm text-xxs font-black text-gray-500 uppercase tracking-widest"
        >
          RALEIGH, USA
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[15%] bottom-[20%] hidden lg:block p-4 bg-white/50 border border-white/70 backdrop-blur-md rounded-2xl shadow-sm text-xxs font-black text-primary uppercase tracking-widest"
        >
          COIMBATORE, IN
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Page Hero Header */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary"
            >
              <Sparkles size={12} /> ABOUT VIVANTIFY
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black mb-6 tracking-tight leading-[1.1] text-primary-dark"
            >
              Building Reliable <br />
              <span className="gradient-text">Enterprise-Grade Software</span>
            </motion.h1>

            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="w-20 h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto my-8 rounded-full origin-center"
            ></motion.div>

            <motion.div 
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text-light leading-relaxed font-semibold max-w-3xl mx-auto space-y-4"
            >
              <p>
                Vivantify Technology Solutions was founded on the belief that thoughtfully applied technology is a powerful driver of business progress.
              </p>
              <p className="text-base md:text-lg text-text-light/90 font-medium max-w-2xl mx-auto">
                We bridge engineering expertise and practical delivery to design and build systems that actually work for the people who use and maintain them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are & What We Do Section */}
      <section className="py-16 bg-gray-50/50 border-b border-gray-100/50 relative">
        <div className="absolute top-1/2 left-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6">
          
          {/* Top Block: Our Expertise & Who We Are (Full Width) */}
          <div className="w-full mb-12 space-y-3">
            <span className="text-xxs font-black uppercase tracking-widest text-primary block">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary-dark tracking-tight leading-tight">
              Who <span className="text-primary italic">We Are</span>
            </h2>
            <p className="text-base text-text-light leading-relaxed font-semibold w-full">
              With headquarters in Raleigh, North Carolina, USA, and a state-of-the-art engineering delivery center in Coimbatore, India, we combine global expertise with offshore excellence to deliver digital transformation, software engineering, and technology solutions for organizations across the globe. We focus on custom software, cloud, and automation for growing small and mid-size teams, drawing on our background in enterprise IT and product development to balance long-term architecture decisions with real-world delivery constraints. We typically partner with B2B SaaS companies, internal IT and operations teams at mid‑market enterprises, and product leaders in sectors like finance, real estate, and professional services, and our engineers have led and delivered enterprise‑grade platforms, cloud migrations, and automation initiatives across North America and India. We favor clear communication, well‑structured systems, and pragmatic use of modern tools and AI so technology remains an enabler—not a source of complexity—for your teams.
            </p>
          </div>

          {/* Bottom Block: Parallel layout for Picture and What We Do */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Picture */}
            <div className="lg:col-span-6 relative w-full lg:sticky lg:top-24">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full animate-pulse-slow"></div>
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-2xl bg-white">
                <motion.img 
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={pillars[activeTab].image} 
                  alt={pillars[activeTab].title} 
                  className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover"
                />
              </div>
            </div>
            
            {/* Right Column: What We Do & Pillars list */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-primary-dark tracking-tight">
                  What <span className="text-primary italic">We Do</span>
                </h3>
                <p className="text-sm text-text-light/90 leading-relaxed font-semibold">
                  We help growing small and mid‑size teams modernize legacy systems, move to the cloud, and automate critical workflows so they can operate more efficiently and respond faster to change.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {pillars.map((pillar, i) => {
                  const isActive = activeTab === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`w-full text-left group flex gap-3 p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? "bg-orange-50/20 border-primary shadow-lg shadow-primary/5" 
                          : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-primary hover:bg-orange-50/10"
                      }`}
                    >
                      <div className={`mt-0.5 p-2 rounded-lg border h-fit shrink-0 transition-colors duration-300 ${
                        isActive 
                          ? "bg-primary/20 border-primary/30 text-white" 
                          : "bg-orange-50 border-orange-100 text-primary group-hover:border-primary/30"
                      }`}>
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-black mb-1 text-primary-dark leading-snug transition-colors duration-300">{pillar.title}</h3>
                        <p className="text-gray-500 text-xxs font-semibold leading-relaxed">{pillar.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. How We Work Process Section */}
      <ProcessSection bgClass="bg-white border-b border-gray-100/50" />




    </motion.div>
  );
};

export default AboutPage;
