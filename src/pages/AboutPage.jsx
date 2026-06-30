import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck, Award, Heart, Handshake, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Completed", value: "340+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Expert Engineers", value: "80+" }
  ];

  const pillars = [
    { 
      icon: <Award className="text-primary w-6 h-6" />, 
      title: "Deep Expertise", 
      desc: "Deep technical knowledge across multiple domains and technologies." 
    },
    { 
      icon: <Users className="text-primary w-6 h-6" />, 
      title: "Dedicated Team", 
      desc: "Skilled professionals committed to delivering exceptional results." 
    },
    { 
      icon: <Zap className="text-primary w-6 h-6" />, 
      title: "Results-Driven", 
      desc: "Focus on measurable outcomes that drive business growth." 
    },
    { 
      icon: <ShieldCheck className="text-primary w-6 h-6" />, 
      title: "Innovation-First", 
      desc: "Cutting-edge solutions using the latest technologies and methodologies." 
    }
  ];

  const coreValues = [
    {
      icon: <Award className="text-white w-6 h-6" />,
      title: "Excellence",
      desc: "We hold ourselves to the highest standards, delivering solutions designed with precision, quality, and future-proof architecture that scales with your growth."
    },
    {
      icon: <Heart className="text-white w-6 h-6" />,
      title: "Innovation",
      desc: "Constant learning and experimentation fuel our drive to create cutting-edge technologies that solve complex business challenges."
    },
    {
      icon: <Handshake className="text-white w-6 h-6" />,
      title: "Partnership",
      desc: "We believe in forging transparent, collaborative relationships with our clients, fostering trust and shared success throughout every project phase."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-36 pb-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        
        {/* Page Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary"
          >
            <Sparkles size={12} /> About Vivantify
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none text-primary-dark"
          >
            Powering Progress Through <span className="gradient-text italic">Intelligent Tech</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-light leading-relaxed font-semibold max-w-3xl mx-auto"
          >
            Vivantify Technology Solutions was founded on the belief that technology is the key driver of progress. We bridge engineering excellence with robust architectural planning to design next-gen enterprise systems.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              className="bg-white p-8 text-center border-b-4 border-b-primary rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-350 border border-gray-100/80"
            >
              <p className="text-4xl md:text-5xl font-black text-primary-dark mb-2 tracking-tight">{stat.value}</p>
              <p className="text-xxs font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Core Pillar Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full animate-pulse-slow"></div>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-2xl bg-white">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Intelligent World connection diagram" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-primary-dark tracking-tight leading-tight">Our <span className="text-primary italic">Expertise</span> & Drive</h2>
              <p className="text-base md:text-lg text-text-light leading-relaxed font-semibold">
                To empower businesses across industries by delivering advanced IT solutions that address today’s demands while anticipating tomorrow’s ambitions. We help you stay resilient in a fast-paced environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 bg-orange-50 p-2.5 rounded-xl border border-orange-100 h-fit shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black mb-1 text-primary-dark leading-snug">{pillar.title}</h4>
                    <p className="text-gray-500 text-xxs font-semibold leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-20 bg-gray-50/50 rounded-[3.5rem] px-8 md:px-16 mb-10 border border-gray-100/50">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
            <span className="text-xxs font-black uppercase tracking-widest text-primary block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary-dark tracking-tight">Our Core <span className="text-primary italic">Values</span></h2>
            <p className="text-text-light font-semibold text-sm">
              We hold ourselves to strict architectural and behavioral principles to ensure customer success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary/20">
                  {value.icon}
                </div>
                <h3 className="text-xl font-black mb-3 text-primary-dark tracking-tight">{value.title}</h3>
                <p className="text-text-light text-xs font-semibold leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
