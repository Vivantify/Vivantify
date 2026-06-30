import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Code2, Brain, Globe, ShieldCheck, Database, ArrowRight, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Cloud size={28} className="text-white" />,
      title: "Cloud Computing",
      desc: "Expert cloud migration and infrastructure management on AWS, Azure, and Google Cloud.",
      color: "bg-blue-600 shadow-blue-500/25"
    },
    {
      icon: <Code2 size={28} className="text-white" />,
      title: "Application Development",
      desc: "Custom-built, secure applications and architectures tailored to your unique business needs.",
      color: "bg-orange-600 shadow-orange-500/25"
    },
    {
      icon: <Brain size={28} className="text-white" />,
      title: "AI & Machine Learning",
      desc: "Intelligent automation and predictive analytics to drive smarter, personalization decisions.",
      color: "bg-indigo-600 shadow-indigo-500/25"
    },
    {
      icon: <Globe size={28} className="text-white" />,
      title: "Web Development",
      desc: "Responsive, user-friendly websites leveraging modern React & Angular frameworks.",
      color: "bg-green-600 shadow-green-500/25"
    },
    {
      icon: <ShieldCheck size={28} className="text-white" />,
      title: "Cybersecurity Solutions",
      desc: "Comprehensive threat detection, firewall management, and advanced data encryption.",
      color: "bg-red-600 shadow-red-500/25"
    },
    {
      icon: <Database size={28} className="text-white" />,
      title: "Big Data & Analytics",
      desc: "Creation of data lakes and pipelines for seamless data processing and insights.",
      color: "bg-purple-600 shadow-purple-500/25"
    }
  ];

  return (
    <section id="services" className="py-28 bg-gray-50/50 relative">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary">
            <Sparkles size={12} /> What We Excel At
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary-dark tracking-tight leading-tight">
            Enterprise Solutions for a <span className="gradient-text italic">Digital World</span>
          </h2>
          <p className="text-lg text-text-light font-semibold">
            We provide a comprehensive suite of digital capabilities designed to propel your business growth and operational efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100/70 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className={`${s.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-black text-primary-dark mb-3 tracking-tight">{s.title}</h3>
                <p className="text-text-light text-sm font-semibold leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>
              <div className="pt-5 border-t border-gray-50 flex items-center text-primary font-black uppercase tracking-wider text-xs group-hover:gap-2 transition-all mt-auto">
                <Link to="/services" className="flex items-center gap-1">
                  Learn More <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
