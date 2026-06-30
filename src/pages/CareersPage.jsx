import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowUpRight, Sparkles, Send, Globe, ShieldCheck, Zap, ChevronDown } from 'lucide-react';

const CareersPage = () => {
  const externalCareersUrl = "https://www.careers-page.com/vivantify-technology-solutions";
  const [activeJobIndex, setActiveJobIndex] = useState(null);

  const openPositions = [
    {
      title: "Frontend Engineer (React)",
      dept: "Engineering",
      loc: "Coimbatore, India (On-site)",
      type: "Full-Time",
      desc: "Seeking a passionate developer to build pixel-perfect, highly responsive interfaces and handle performance optimization for global enterprise SaaS products.",
      requirements: [
        "2+ years of professional React experience.",
        "Deep familiarity with TailwindCSS, Framer Motion, and build systems.",
        "Strong understanding of SEO, page load speeds, and browser rendering optimization."
      ],
      responsibilities: [
        "Craft sleek, responsive user interfaces based on Figma specifications.",
        "Collaborate with backend architects to integrate REST/GraphQL APIs.",
        "Conduct unit tests and environment audits for client-side components."
      ]
    },
    {
      title: "Cloud Infrastructure Architect",
      dept: "DevOps & SRE",
      loc: "Coimbatore / Remote (Hybrid)",
      type: "Full-Time",
      desc: "Join us to architect multi-cloud AWS/Azure setups, optimize Kubernetes clusters, and scale Infrastructure-as-Code workflows for high-availability apps.",
      requirements: [
        "3+ years managing cloud systems (AWS preferred).",
        "Experience writing Infrastructure-as-Code using Terraform or CloudFormation.",
        "Familiarity with Docker, Kubernetes, and CI/CD pipelines (GitHub Actions/Jenkins)."
      ],
      responsibilities: [
        "Architect and maintain secure, reliable, and scalable multi-cloud setups.",
        "Automate system recovery and deployment workflows to eliminate manual steps.",
        "Conduct security audits and penetration risk assessments across endpoints."
      ]
    },
    {
      title: "AI & Machine Learning Developer",
      dept: "Data Science",
      loc: "Coimbatore, India (On-site)",
      type: "Full-Time",
      desc: "Implement modern predictive models, NLP processing, and LLM orchestration tools to provide cognitive layers for business intelligence platforms.",
      requirements: [
        "2+ years experience working with Python and ML libraries (TensorFlow/PyTorch).",
        "Familiarity with vector databases and LLM APIs (OpenAI/LangChain).",
        "Strong mathematical foundations in statistics and linear algebra."
      ],
      responsibilities: [
        "Develop and train predictive analytics engines tailored to client datasets.",
        "Integrate cognitive AI layers (chatbots, semantic search) into enterprise SaaS.",
        "Build robust ETL pipelines to ingest and process unstructured data feeds."
      ]
    }
  ];

  const toggleJob = (index) => {
    setActiveJobIndex(activeJobIndex === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
          <motion.span 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xs font-black uppercase tracking-widest text-primary mb-3 block"
          >
            Join Vivantify
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none text-primary-dark"
          >
            Build the <span className="gradient-text italic">Digital Infrastructure</span> of Tomorrow
          </motion.h1>
          <motion.p 
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-light leading-relaxed font-semibold max-w-2xl mx-auto"
          >
            At Vivantify, we seamlessly blend innovation with expert engineering. Join a team committed to excellence, continuous learning, and crafting solutions that empower global enterprises.
          </motion.p>
        </div>

        {/* Culture / Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {[
            {
              icon: <Globe className="text-primary w-6 h-6" />,
              title: "Dedicated Team",
              desc: "Collaborate with skilled professional engineers committed to delivering exceptional results and pushing technical boundaries."
            },
            {
              icon: <Zap className="text-primary w-6 h-6" />,
              title: "Innovation-First",
              desc: "Constant learning and experimentation fuel our drive. We design for tomorrow's technology architectures today."
            },
            {
              icon: <ShieldCheck className="text-primary w-6 h-6" />,
              title: "Results-Driven",
              desc: "We focus on real, measurable outcomes that enable businesses to scale smarter, innovate faster, and make an impact."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-3 text-primary-dark tracking-tight">{item.title}</h3>
              <p className="text-text-light text-xs font-semibold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Left panel: Expandable Open Positions */}
          <div className="flex-grow w-full lg:w-3/5 flex flex-col space-y-6">
            <h2 className="text-3xl font-black text-primary-dark mb-2 tracking-tight">Active Opportunities</h2>
            <p className="text-xs text-text-light font-semibold mb-6">Click on any position to view details, requirements, and job responsibilities.</p>
            <div className="space-y-4 flex-grow">
              {openPositions.map((pos, idx) => {
                const isOpen = activeJobIndex === idx;
                return (
                  <motion.div 
                    key={idx}
                    layout
                    className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleJob(idx)}
                      className="w-full text-left p-8 outline-none flex items-start justify-between gap-4"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-black text-primary-dark tracking-tight leading-snug">{pos.title}</h3>
                          <span className="px-3.5 py-1 bg-orange-50 text-primary border border-orange-100 rounded-full font-black text-[10px] uppercase tracking-wider">
                            {pos.dept}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 text-gray-400 font-bold text-xs">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-primary" />
                            <span>{pos.loc}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-primary" />
                            <span>{pos.type}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-400 transition-transform duration-300 shrink-0 mt-1 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-8 pb-8 pt-2 border-t border-gray-50 space-y-6">
                            <div className="space-y-2">
                              <h4 className="text-xs font-black uppercase text-primary-dark tracking-wider">Role Description</h4>
                              <p className="text-text-light text-sm font-semibold leading-relaxed">{pos.desc}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div className="space-y-3">
                                <h4 className="text-xs font-black uppercase text-primary-dark tracking-wider">Key Requirements</h4>
                                <ul className="space-y-2.5">
                                  {pos.requirements.map((req, rIdx) => (
                                    <li key={rIdx} className="flex items-start gap-2 text-xs text-text-light font-semibold leading-relaxed">
                                      <span className="text-primary font-black mt-0.5">•</span>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="space-y-3">
                                <h4 className="text-xs font-black uppercase text-primary-dark tracking-wider">Responsibilities</h4>
                                <ul className="space-y-2.5">
                                  {pos.responsibilities.map((resp, rIdx) => (
                                    <li key={rIdx} className="flex items-start gap-2 text-xs text-text-light font-semibold leading-relaxed">
                                      <span className="text-primary font-black mt-0.5">•</span>
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <div className="pt-4 border-t border-gray-50 flex justify-end">
                              <a 
                                href={externalCareersUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary py-3 px-6 text-xs uppercase tracking-widest font-black"
                              >
                                Apply Online <ArrowUpRight size={14} className="ml-1.5" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right panel: Portal Gateway Banner */}
          <div className="w-full lg:w-2/5 relative flex">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full blur-[100px] opacity-20 -z-10"></div>
            <div className="glass-card bg-primary-dark text-white p-8 md:p-12 shadow-2xl border border-white/10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden h-full">
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 rounded-full text-primary font-bold text-[10px] uppercase tracking-wider">
                  <Sparkles size={12} /> Official Hiring Platform
                </span>
                <h3 className="text-3xl font-black tracking-tight leading-tight">
                  Visit Our Central <span className="gradient-text italic">Careers Portal</span>
                </h3>
                <p className="text-gray-400 text-sm font-semibold leading-relaxed">
                  We host our active application pipelines, benefits overview, and complete hiring workflow transparently on our official career gateway.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Immediate application reviews",
                    "Direct response from recruitment officers",
                    "Complete benefits and packages transparency",
                    "Secure credentials handling"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-white/90 font-semibold leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-primary/25 border border-primary/45 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-primary text-[9px] font-black">✓</span>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative z-10 pt-10">
                <a 
                  href={externalCareersUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full btn-primary py-4 px-6 text-sm uppercase tracking-widest font-black inline-flex justify-center items-center shadow-lg hover:-translate-y-1 transition-all"
                >
                  Open Careers Portal
                  <ArrowUpRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default CareersPage;
