import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Globe, 
  Cloud, 
  Brain, 
  Database, 
  ShieldCheck, 
  Infinity as InfinityIcon, 
  RefreshCw, 
  Compass, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', label: 'All Services' },
    { name: 'Software', label: 'Software & Web' },
    { name: 'Cloud', label: 'Cloud & DevOps' },
    { name: 'Data', label: 'AI, Data & Strategy' }
  ];

  const servicesList = [
    {
      category: 'Software',
      icon: <Code2 size={32} />,
      title: "Application Development & Maintenance",
      desc: "Custom-built, secure applications tailored to your unique business needs, ensuring long-term reliability and agility.",
      features: [
        "Custom-built, secure applications tailored to your unique business needs.",
        "Scalable architecture ensuring high performance and reliability.",
        "Ongoing support, updates, and bug fixes for long-term stability."
      ]
    },
    {
      category: 'Software',
      icon: <Globe size={32} />,
      title: "Web Development",
      desc: "Responsive, high-performance websites leveraging cutting-edge web frameworks for seamless engagement.",
      features: [
        "Responsive, user-friendly websites using modern frameworks like React and Angular.",
        "SEO-optimized and fast-loading designs to boost visibility.",
        "Seamless integration with backend services and third-party APIs."
      ]
    },
    {
      category: 'Cloud',
      icon: <Cloud size={32} />,
      title: "Cloud Computing Services",
      desc: "Scale with confidence using enterprise-ready multi-cloud setups and optimized cloud infrastructures.",
      features: [
        "Expert cloud migration and infrastructure management on AWS, Azure, and Google Cloud.",
        "Scalable, cost-effective cloud solutions with disaster recovery and backup.",
        "Secure cloud-native architecture optimized for performance and compliance."
      ]
    },
    {
      category: 'Data',
      icon: <Brain size={32} />,
      title: "AI & Machine Learning Solutions",
      desc: "Harness cognitive intelligence and data models to drive automation and next-gen analytics.",
      features: [
        "Intelligent automation and predictive analytics to drive smarter business decisions.",
        "Development of AI-powered chatbots, recommendation engines, and data models.",
        "Real-time insights that enhance personalization and operational efficiency."
      ]
    },
    {
      category: 'Data',
      icon: <Database size={32} />,
      title: "Big Data & Analytics",
      desc: "Streamline raw pipelines into high-fidelity data lakes for real-time visualization and business intelligence.",
      features: [
        "Creation of data lakes and pipelines for seamless data collection and processing.",
        "Interactive dashboards and visualization tools for actionable insights.",
        "Advanced analytics to identify trends, patterns, and customer behaviors."
      ]
    },
    {
      category: 'Cloud',
      icon: <ShieldCheck size={32} />,
      title: "Cybersecurity & Risk Management",
      desc: "Fortify your data assets and cloud workspaces with enterprise zero-trust security layers.",
      features: [
        "Comprehensive threat detection, firewall management, and data encryption.",
        "Regular security audits and vulnerability assessments to minimize risk.",
        "Implementation of identity and access management protocols like MFA and SSO."
      ]
    },
    {
      category: 'Cloud',
      icon: <InfinityIcon size={32} />,
      title: "Devops & Automation Services",
      desc: "Unleash continuous integration speed while safeguarding environment stability.",
      features: [
        "Automated CI/CD pipelines for faster, error-free software delivery.",
        "Infrastructure as Code (IaC) for consistent and scalable environment management.",
        "Continuous monitoring and automated testing to ensure system reliability."
      ]
    },
    {
      category: 'Software',
      icon: <RefreshCw size={32} />,
      title: "Digital Transformation Solutions",
      desc: "Modernize legacy cores with intelligent integrations and robust automated workflows.",
      features: [
        "Modernizing legacy systems with automation and cloud integration.",
        "Enhancing customer experience through digital process reengineering.",
        "Streamlining operations for increased agility and reduced costs."
      ]
    },
    {
      category: 'Data',
      icon: <Compass size={32} />,
      title: "IT Consulting & Strategy",
      desc: "Align software architectures and system models with actual scalability goals.",
      features: [
        "Strategic IT planning aligned with your business goals and growth vision.",
        "Technology assessments and vendor selection to optimize investments.",
        "Roadmap development for sustainable digital transformation."
      ]
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? servicesList 
    : servicesList.filter(s => s.category === selectedCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Services Hero */}
      <section className="pt-44 pb-28 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-blue rounded-full blur-[120px] animate-pulse"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl space-y-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest"
          >
            <Sparkles size={14} /> Our Comprehensive Offerings
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-none"
          >
            Transformative <span className="gradient-text italic">Technology Services</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed font-semibold max-w-2xl mx-auto"
          >
            Comprehensive technology solutions to accelerate your business growth and digital transformation. We bridge engineering excellence with strategic planning.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs & Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest border transition-all duration-300 ${
                  selectedCategory === cat.name
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                    : 'bg-white text-primary-dark border-gray-100 hover:border-orange-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of services */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, i) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={service.title}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 bg-primary-dark text-primary rounded-2xl flex items-center justify-center mb-6 shadow-md border border-white/5">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-black mb-3 text-primary-dark tracking-tight leading-snug">{service.title}</h3>
                    <p className="text-text-light text-sm font-semibold mb-6 leading-relaxed">{service.desc}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-text-main leading-relaxed">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-5 border-t border-gray-50 flex items-center text-primary font-black uppercase tracking-wider text-xs hover:gap-3 transition-all mt-auto">
                    <Link to="/contact" className="flex items-center gap-1.5">
                      Discuss Requirements <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Strategic IT Consulting Highlight Component */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent rounded-l-full blur-3xl -z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-primary block">Premium Consulting Division</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  Strategic <span className="gradient-text italic">IT Consulting</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed font-semibold">
                  Get expert guidance on IT planning, system architecture, and technology investments. Our consultants align IT strategies with business goals to achieve long-term scalability and measurable ROI.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-2">
                  {[
                    "Strategic IT Planning",
                    "Technology Assessment",
                    "Digital Roadmap",
                    "ROI Optimization"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                        <CheckCircle2 size={12} className="text-primary" />
                      </div>
                      <span className="font-bold text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 w-full lg:w-96 bg-white text-primary-dark rounded-[2.2rem] p-8 text-center shadow-2xl relative overflow-hidden group border border-gray-100">
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary shadow-sm">
                  <Compass size={28} />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-primary mb-1 block">Free Consultation Available</span>
                <h4 className="text-2xl font-black mb-3">Accelerate Growth</h4>
                <p className="text-gray-500 text-xs font-semibold leading-relaxed mb-6">
                  Schedule a private tech optimization session with our senior strategy officers.
                </p>
                <Link to="/contact" className="w-full btn-primary py-4 px-6 text-sm uppercase tracking-widest font-black inline-flex justify-center items-center shadow-lg group-hover:-translate-y-1 transition-all">
                  Schedule Consultation
                  <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
