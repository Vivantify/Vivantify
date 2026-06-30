import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Vivantify transformed our legacy infrastructure into a high-performance cloud ecosystem. Their technical depth and commitment to our success were unparalleled.",
      author: "David Chen",
      role: "CTO, Global Logistics Corp",
      image: "https://i.pravatar.cc/150?u=david"
    },
    {
      text: "The custom software solution they built for us reduced our operational costs by 40% in just six months. They are true partners in innovation.",
      author: "Sarah Jenkins",
      role: "Head of Digital, Artex Group",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      text: "Their team doesn't just write code; they solve business problems. Highly recommended for any enterprise looking to scale intelligently.",
      author: "Michael Rodriguez",
      role: "Founder, FinTech Solutions",
      image: "https://i.pravatar.cc/150?u=mike"
    }
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary">
              <Sparkles size={12} /> Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary-dark tracking-tight leading-[1.1]">
              What Our <span className="gradient-text italic">Partners</span> Say
            </h2>
            <p className="text-lg text-text-light font-semibold">
              Trust is the foundation of every relationship we build. Hear from the leaders who have scaled with us.
            </p>
          </div>
          <div className="hidden lg:flex gap-3">
            <button className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm">
              ←
            </button>
            <button className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm">
              →
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100/80 hover:border-orange-200/50 hover:bg-white flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative group"
            >
              <div>
                <Quote size={40} className="text-primary/10 group-hover:text-primary/20 mb-6 transition-colors" />
                <p className="text-text-main font-semibold italic leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border border-orange-100 shadow-sm" />
                <div>
                  <h4 className="font-black text-primary-dark text-sm leading-snug">{t.author}</h4>
                  <p className="text-xxs text-gray-400 font-black uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
