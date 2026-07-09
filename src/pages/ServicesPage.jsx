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
    { name: 'All', label: 'All services' },
    { name: 'Software', label: 'Software & Web' },
    { name: 'Cloud', label: 'Cloud & DevOps' },
    { name: 'Data', label: 'AI, Data & Strategy' }
  ];

  const servicesList = [
    {
      category: 'Software',
      icon: <Code2 size={32} />,
      title: "Application Development & Maintenance",
      desc: "Custom business applications designed for your specific workflows, with a focus on security, maintainability, and long‑term support. Examples include internal tools, customer portals, and workflow systems such as loan processing or document automation platforms.",
      features: [
        "Custom applications built around your real business processes.",
        "Scalable architecture for stable performance as usage grows.",
        "Ongoing support, updates, and fixes to keep systems healthy over time."
      ],
      cta: "Discuss application requirements"
    },
    {
      category: 'Software',
      icon: <Globe size={32} />,
      title: "Responsive Web Development",
      desc: "Modern, responsive websites built with current web frameworks, designed to load fast and clearly explain what your business offers. We design and build web apps and sites using modern frameworks like React/Next.js or widely supported CMS platforms, focusing on performance, accessibility, and maintainability.",
      features: [
        "User‑friendly, responsive websites using modern frameworks.",
        "Fast, SEO‑conscious builds to improve visibility and experience.",
        "Clean integrations with your backend systems and services."
      ],
      cta: "Discuss web project"
    },
    {
      category: 'Cloud',
      icon: <Cloud size={32} />,
      title: "Cloud Computing Services",
      desc: "Cloud migration and infrastructure services that help you run reliably on AWS, Azure, or Google Cloud without unnecessary complexity. We help teams move from on‑prem or shared hosting to managed cloud on AWS, Azure, or Google Cloud, setting up secure environments, monitoring, backup, and cost controls.",
      features: [
        "Plan and execute migrations to AWS, Azure, or Google Cloud.",
        "Design cost‑aware, scalable infrastructure with backup and recovery.",
        "Implement cloud‑native architectures with security and compliance in mind."
      ],
      cta: "Discuss cloud needs"
    },
    {
      category: 'Data',
      icon: <Brain size={32} />,
      title: "AI & Machine Learning Solutions",
      desc: "Use practical AI and machine learning to automate routine tasks, improve decisions, and personalize user experiences. We favor explainable, maintainable models and integrate them into existing tools rather than building opaque experiments that are hard to support.",
      features: [
        "Automation and predictive models to support daily decision‑making.",
        "AI‑powered chatbots, recommenders, or classifiers tailored to your use cases.",
        "Dashboards and alerts that turn model output into actions your team can use."
      ],
      cta: "Discuss AI initiatives"
    },
    {
      category: 'Data',
      icon: <Database size={32} />,
      title: "Big Data & Analytics",
      desc: "Collect, organize, and visualize your data so teams can see what’s happening and act on it faster, to reduce reporting time and make trends visible to non‑technical stakeholders.",
      features: [
        "Set up pipelines and storage to centralize data from key systems.",
        "Build dashboards and reports that answer your important questions.",
        "Apply analytics to spot trends, risks, and opportunities."
      ],
      cta: "Discuss analytics needs"
    },
    {
      category: 'Cloud',
      icon: <ShieldCheck size={32} />,
      title: "Cybersecurity & Risk Management",
      desc: "Improve the security of your applications and cloud environments with practical controls, reviews, and monitoring.",
      features: [
        "Threat detection, firewall configuration, and data encryption.",
        "Regular security reviews and vulnerability checks to reduce risk.",
        "Identity and access management with MFA and SSO where appropriate, integrated into your existing tools and cloud providers."
      ],
      cta: "Discuss security posture"
    },
    {
      category: 'Cloud',
      icon: <InfinityIcon size={32} />,
      title: "DevOps & Automation Services",
      desc: "Streamline how you build, test, and deploy software using DevOps practices and automation. We implement CI/CD with platforms like GitHub Actions, GitLab CI, or cloud‑native pipelines, and automate routine tasks so engineers can focus on meaningful work.",
      features: [
        "CI/CD pipelines for more frequent, predictable releases.",
        "Infrastructure as Code to keep environments consistent.",
        "Monitoring and automated tests to catch issues early."
      ],
      cta: "Discuss DevOps setup"
    },
    {
      category: 'Software',
      icon: <RefreshCw size={32} />,
      title: "Digital Transformation Solutions",
      desc: "Modernize legacy systems step by step, connecting them to modern tools and automating key processes.",
      features: [
        "Incrementally modernize legacy applications with cloud and API integrations.",
        "Redesign key journeys to improve customer and internal user experience.",
        "Simplify operations to reduce manual work and ongoing operational cost."
      ],
      cta: "Discuss transformation roadmap"
    },
    {
      category: 'Data',
      icon: <Compass size={32} />,
      title: "IT Consulting & Strategy",
      desc: "Get independent, project‑linked advice on architecture reviews, technology choices, implementation roadmaps, and tooling selection so your software works for your business.",
      features: [
        "Ongoing architecture reviews and technology choices.",
        "Practical implementation roadmaps to guide development.",
        "Hands‑on selection of tools, platforms, and frameworks."
      ],
      cta: "Discuss consulting needs"
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
            <Sparkles size={14} /> OUR SERVICES
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black tracking-tight leading-[1.1]"
          >
            Software, Cloud & <br />
            <span className="gradient-text italic">Automation Services</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed font-semibold max-w-3xl mx-auto"
          >
            Practical technology solutions for small and mid‑size teams that need reliable software, modern cloud infrastructure, and targeted automation.
          </motion.p>
          <motion.p 
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs md:text-sm text-gray-400 leading-relaxed font-semibold max-w-2xl mx-auto pt-1"
          >
            We combine engineering expertise and honest consulting to ship systems that are maintainable, observable, and aligned with your business priorities, so your teams can ship changes consistently without turning every release into an incident.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs & Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-16 bg-orange-50/30 p-2 rounded-2xl w-fit mx-auto border border-orange-100/50">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat.name}>
                {idx > 0 && <span className="text-orange-200/50 font-light mx-1 hidden sm:inline">|</span>}
                <button
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.name
                      ? 'bg-primary text-white shadow-md'
                      : 'text-primary-dark hover:text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              </React.Fragment>
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
                  className="h-full bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
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
                      {service.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Strategic IT Consulting Highlight Component */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100/50">
        {/* Decorative subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000001_1px,transparent_1px),linear-gradient(to_bottom,#00000001_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent rounded-r-full blur-3xl -z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gray-50/70 border border-gray-100 rounded-[3rem] p-8 md:p-16 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-primary block">PREMIUM CONSULTING</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-primary-dark">
                  Strategic <span className="gradient-text italic">IT Consulting</span>
                </h2>
                <p className="text-base text-text-light leading-relaxed font-semibold">
                  Get leadership-level, high-impact consulting to align your technology investments with your business strategy and growth goals.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {[
                    "Strategic IT planning for founders and executives",
                    "Architecture and technology assessment for major initiatives",
                    "Digital roadmap design aligned with growth goals",
                    "Prioritized, ROI‑aware initiative roadmap"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                        <CheckCircle2 size={12} className="text-primary" />
                      </div>
                      <span className="font-bold text-sm text-primary-dark">{item}</span>
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
                <h4 className="text-2xl font-black mb-3">Make Confident Technology Decisions</h4>
                <p className="text-gray-500 text-xs font-semibold leading-relaxed mb-6">
                  Schedule a private technology assessment and optimization session with our senior architects.
                </p>
                <Link to="/contact" className="w-full btn-primary py-4 px-6 text-sm uppercase tracking-widest font-black inline-flex justify-center items-center shadow-lg group-hover:-translate-y-1 transition-all">
                  Schedule a consultation
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
