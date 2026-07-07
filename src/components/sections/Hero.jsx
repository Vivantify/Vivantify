import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Send, Briefcase, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50/40 text-primary-dark">
      {/* Visual spotlights / grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[140px] animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[35%] h-[35%] bg-accent-blue/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side text content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-orange-100/70 border border-orange-200/50 text-primary rounded-full font-black text-xs uppercase tracking-widest backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="flex items-center gap-1"><Sparkles size={12} /> Enterprise technology partner for growing small and mid-size teams</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
            Powering business <br />
            growth with <br />
            <span className="gradient-text">reliable</span> tech delivery
          </h1>
          
          <div className="space-y-4">
            <p className="text-text-light text-lg sm:text-xl leading-relaxed max-w-2xl font-semibold">
              Vivantify builds custom software, cloud, and automation solutions for growing small and mid-size teams that need predictable, high‑quality execution.
            </p>
            <p className="text-text-light/80 text-base sm:text-lg leading-relaxed max-w-2xl font-semibold">
              Our team in Coimbatore and Raleigh helps you modernize legacy systems, streamline operations, and launch new digital products faster—with clear roadmaps and measurable outcomes.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/services" className="btn-primary group py-3.5 px-8 text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20">
              Explore Solutions
              <Compass className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
            <Link to="/contact" className="btn-outline group py-3.5 px-8 text-sm font-black uppercase tracking-widest border-primary text-primary hover:bg-primary/5 bg-white">
              Get Started
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <a 
              href="https://www.careers-page.com/vivantify-technology-solutions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3.5 border border-transparent text-primary-dark/80 hover:text-primary font-bold rounded-xl transition-all duration-300 hover:bg-gray-100 inline-flex items-center justify-center text-sm uppercase tracking-widest"
            >
              Careers
              <Briefcase className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Side mockup card / visual representation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group bg-white p-4 backdrop-blur-xl">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
              alt="Technology Team collaborating" 
              className="w-full h-auto object-cover rounded-[1.8rem] border border-gray-100 transition-all duration-700 group-hover:scale-[1.02]"
            />
          </div>
          
          {/* Glowing Badge status card */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white/95 border border-gray-100 p-5 rounded-2xl shadow-2xl flex items-center gap-4.5 backdrop-blur-md"
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-xl border border-green-500/25 flex items-center justify-center text-green-400">
              <Sparkles size={22} className="animate-pulse" />
            </div>
            <div>
              <p className="text-xxs text-gray-500 font-black uppercase tracking-wider">Deployment Status</p>
              <p className="text-base font-black text-primary-dark">98.4% Live Sprints</p>
            </div>
          </motion.div>

          <div className="absolute -top-8 -right-8 w-60 h-60 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
