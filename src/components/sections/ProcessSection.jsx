import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

const ProcessSection = ({ bgClass = "bg-gray-50" }) => {
  const steps = [
    {
      step: "01",
      title: "We start with your reality",
      desc: "Before we suggest tools or architectures, we map your current systems, constraints, and priorities so we only propose changes that make sense for your business and team capacity.",
      highlights: [
        "Focus on the problems that slow you down today",
        "Identify quick wins as well as long-term improvements"
      ]
    },
    {
      step: "02",
      title: "We design for maintainability",
      desc: "Our architects and engineers prioritize clear boundaries, clean code, and sensible documentation so your team—or ours—can safely evolve the system over time.",
      highlights: [
        "Use proven patterns instead of over-engineering",
        "Document key decisions and trade-offs in plain language"
      ]
    },
    {
      step: "03",
      title: "We deliver in small, visible steps",
      desc: "Work is organized into small, trackable increments with regular demos, so you see progress often and can adjust priorities before anything goes off-track.",
      highlights: [
        "Frequent check-ins and progress updates",
        "Early feedback from real users where possible"
      ]
    },
    {
      step: "04",
      title: "We launch carefully and support after go-live",
      desc: "We plan rollouts, monitoring, and handover together with you so launch day is controlled, not chaotic, and your team knows what to expect next.",
      highlights: [
        "Clear runbooks for deployment and incident response",
        "Post-launch support and iterative improvements based on real usage"
      ]
    },
    {
      step: "05",
      title: "We look for compounding wins",
      desc: "After initial delivery, we help you spot patterns—repeated manual work, recurring errors, or frequently requested features—that can become the next wave of automation or product enhancements.",
      highlights: [
        "Turn one-off projects into reusable components",
        "Build a roadmap that compounds value over time"
      ]
    }
  ];

  return (
    <section className={`py-16 ${bgClass} relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-[35%] h-[35%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary">
            <Sparkles size={12} /> HOW WE WORK
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary-dark tracking-tight leading-tight">
            Our Delivery Approach
          </h2>
          <p className="text-lg text-text-light font-semibold">
            We make it easy for busy teams to move from problem to deployed solution with a delivery approach that is transparent, predictable, and built for the long term.
          </p>
        </div>

        {/* Process Steps List */}
        <div className="space-y-4 max-w-5xl mx-auto relative z-10">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white border border-gray-100/80 hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
            >
              {/* Left Side: Number & Title */}
              <div className="flex items-start gap-4 md:w-1/3 shrink-0">
                <span className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors duration-300">
                  {s.step}
                </span>
                <div>
                  <h4 className="text-lg font-black text-primary-dark tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h4>
                </div>
              </div>

              {/* Middle: Description */}
              <div className="flex-grow md:w-2/5">
                <p className="text-text-light text-sm font-semibold leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Right Side: Bullet highlights */}
              <div className="md:w-1/3 bg-gray-50/50 group-hover:bg-orange-50/10 border border-gray-100/50 rounded-xl p-4 space-y-3 shrink-0 transition-colors duration-300">
                {s.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-text-main leading-relaxed">
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
