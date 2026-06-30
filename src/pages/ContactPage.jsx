import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, HelpCircle, ChevronDown } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceOfInterest: 'Application Development & Maintenance',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  const services = [
    "Application Development & Maintenance",
    "Web Development",
    "Cloud Computing Services",
    "AI & Machine Learning Solutions",
    "Big Data & Analytics",
    "Cybersecurity & Risk Management",
    "Devops & Automation Services",
    "Digital Transformation Solutions",
    "IT Consulting & Strategy"
  ];

  const faqs = [
    { 
      q: "What is your typical project timeline?", 
      a: "Timelines vary based on scope. Our discovery phase typically takes 1 to 2 weeks, with prototype/MVP deliveries ranging from 6 to 12 weeks of agile sprints." 
    },
    { 
      q: "Do you offer post-launch support?", 
      a: "Yes. We offer continuous DevOps, maintenance, security audits, and bug fixes to ensure complete operational stability long-term." 
    },
    { 
      q: "Can you collaborate with our in-house engineering team?", 
      a: "Absolutely. We seamlessly integrate with existing in-house squads, providing technical leadership, specialized resources, or pure execution velocity." 
    },
    { 
      q: "How does the free consultation work?", 
      a: "Simply fill out our message form above or email us. We'll schedule a virtual tech review to analyze your processes, identify bottlenecks, and map out a growth blueprint." 
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 min-h-screen bg-gray-50/50"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Left Panel: Contact Info */}
          <div className="flex-1 lg:max-w-xl flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-sm font-black uppercase tracking-widest text-primary mb-3 block">Get In Touch</span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1] text-primary-dark">
                Start Your <span className="gradient-text italic">Digital Transformation</span>
              </h1>
              <p className="text-lg text-text-light font-semibold leading-relaxed">
                Ready to accelerate your business growth? Schedule a consultation with our technology experts to discuss your project requirements and strategic objectives.
              </p>

              <div className="space-y-6 pt-6">
                {[
                  { 
                    icon: <Mail className="w-5 h-5" />, 
                    title: "Email Address", 
                    detail: "info@vivantify.com", 
                    link: "mailto:info@vivantify.com" 
                  },
                  { 
                    icon: <Phone className="w-5 h-5" />, 
                    title: "Phone Number", 
                    detail: "+91 9366615960", 
                    link: "tel:+919366615960" 
                  },
                  { 
                    icon: <MapPin className="w-5 h-5" />, 
                    title: "Registered Office", 
                    detail: "4-1, Thiruvalluvar Nagar, 3rd Street, Ramanathapuram, Coimbatore South, Tamil Nadu, India – 641045", 
                    link: "https://maps.google.com/?q=4-1,+Thiruvalluvar+Nagar,+3rd+Street,+Ramanathapuram,+Coimbatore+South,+Tamil+Nadu,+India+641045" 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-primary shrink-0 border border-orange-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-400 uppercase text-xxs tracking-widest mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-base font-black text-primary-dark hover:text-primary transition-colors leading-snug block">
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-base font-black text-primary-dark leading-snug">{item.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-primary-dark text-white rounded-[2rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-0"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-primary font-bold text-xxs uppercase tracking-wider mb-3">
                  Consultation
                </span>
                <h4 className="text-lg font-black mb-2">Free Consultation Available</h4>
                <p className="text-gray-400 group-hover:text-white/80 transition-colors text-xs font-semibold leading-relaxed">
                  We look forward to analyzing your challenges and crafting scalable growth architectures.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Glassmorphic Form */}
          <div className="flex-1 w-full relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full blur-[100px] opacity-20 -z-10"></div>
            <div className="glass-card bg-white p-8 md:p-12 shadow-2xl border border-gray-100 rounded-[2.5rem] h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-black text-primary-dark mb-1.5 tracking-tight">Send us a Message</h3>
                      <p className="text-xs text-text-light font-semibold">Fill out the fields below and we'll reply within 24 hours.</p>
                    </div>
                    
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xxs font-black uppercase text-gray-400 tracking-wider">Full Name</label>
                          <input 
                            type="text" 
                            required
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-semibold text-primary-dark" 
                            placeholder="Your full name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xxs font-black uppercase text-gray-400 tracking-wider">Email Address</label>
                          <input 
                            type="email" 
                            required
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-semibold text-primary-dark" 
                            placeholder="your.mail@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xxs font-black uppercase text-gray-400 tracking-wider">Phone Number</label>
                          <input 
                            type="tel" 
                            required
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-semibold text-primary-dark" 
                            placeholder="+91 12345 67890"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xxs font-black uppercase text-gray-400 tracking-wider">Company Name</label>
                          <input 
                            type="text" 
                            required
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-semibold text-primary-dark" 
                            placeholder="Your company name"
                            value={formData.companyName}
                            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xxs font-black uppercase text-gray-400 tracking-wider">Service of Interest</label>
                        <select 
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-semibold text-primary-dark appearance-none"
                          value={formData.serviceOfInterest}
                          onChange={(e) => setFormData({...formData, serviceOfInterest: e.target.value})}
                        >
                          {services.map((srv, idx) => (
                            <option key={idx} value={srv}>{srv}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xxs font-black uppercase text-gray-400 tracking-wider">Message</label>
                        <textarea 
                          required
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[120px] text-sm font-semibold text-primary-dark" 
                          placeholder="Tell us about your project requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                      </div>

                      <button className="w-full btn-primary py-4 text-sm font-black group">
                        Send Your Message 
                        <Send size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-green-500/10">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-primary-dark mb-4">Thank You!</h3>
                    <p className="text-text-light font-semibold max-w-sm mx-auto leading-relaxed mb-8 text-sm">
                      We've received your request, <strong className="text-primary-dark">{formData.fullName}</strong>. A technology architect will review your challenges and contact you at <span className="text-primary-dark">{formData.email}</span> shortly.
                    </p>
                    <button 
                      onClick={() => { setIsSubmitted(false); setFormData({ fullName: '', email: '', phone: '', companyName: '', serviceOfInterest: 'Application Development & Maintenance', message: '' }); }}
                      className="btn-outline px-8 py-3 text-xs uppercase tracking-widest font-black"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* FAQ Section with Accordion */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-black uppercase tracking-widest text-primary mb-3 block">Got Questions?</span>
            <h2 className="text-4xl font-black text-primary-dark tracking-tight">Frequently Asked Questions</h2>
            <p className="text-text-light font-semibold mt-1">Quick answers to common inquiries about our engagement models.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-6 text-left outline-none"
                  >
                    <h4 className="text-base md:text-lg font-black text-primary-dark flex items-center gap-3">
                      <HelpCircle size={18} className="text-primary shrink-0" />
                      <span>{faq.q}</span>
                    </h4>
                    <ChevronDown 
                      size={18} 
                      className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
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
                        <div className="px-6 pb-6 pl-14 text-text-light text-sm font-semibold border-t border-gray-50 pt-4 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ContactPage;
