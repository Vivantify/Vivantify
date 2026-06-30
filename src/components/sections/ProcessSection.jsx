import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Code2, Zap, Rocket, Sparkles } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: <Compass size={28} />,
      title: "Discovery & Strategy",
      desc: "We deep-dive into your business goals, target audience, and market landscape to build a bulletproof roadmap."
    },
    {
      step: "02",
      icon: <Code2 size={28} />,
      title: "Architecture & Design",
      desc: "Our architects draft scalable systems while our designers craft high-fidelity, user-centric interfaces."
    },
    {
      step: "03",
      icon: <Zap size={28} />,
      title: "Agile Development",
      desc: "Regular sprints and feedback loops keep the project on track with continuous integration and deployment."
    },
    {
      step: "04",
      icon: <Rocket size={28} />,
      title: "Testing & Launch",
      desc: "Rigorous quality assurance ensures a flawless rollout, followed by ongoing optimization and support."
    }
  ];

  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[35%] h-[35%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary">
            <Sparkles size={12} /> Execution Workflow
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary-dark tracking-tight leading-tight">
            How We <span className="gradient-text italic">Deliver</span> Excellence
          </h2>
          <p className="text-lg text-text-light font-semibold">
            Our refined development methodology ensures transparency, speed, and uncompromising quality at every stage of the project lifecycle.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-[2.5rem] bg-white border border-gray-100/80 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="w-14 h-14 bg-orange-50 text-primary border border-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 shadow-sm">
                    {s.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-200 group-hover:text-primary/20 transition-colors duration-500">
                    {s.step}
                  </span>
                </div>
                <h4 className="text-xl font-black mb-3 text-primary-dark tracking-tight leading-snug">{s.title}</h4>
                <p className="text-text-light text-sm font-semibold leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
