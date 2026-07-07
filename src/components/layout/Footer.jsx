import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark pt-24 pb-12 text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Vivantify" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm font-semibold">
              Vivantify delivers software, cloud, and automation solutions that help growing small and mid-size teams streamline operations and launch new digital capabilities faster.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3.5 text-gray-400 font-bold text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><a href="https://www.careers-page.com/vivantify-technology-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider text-white">Enterprise Services</h4>
            <ul className="space-y-3.5 text-gray-400 font-bold text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Enterprise application development services</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Managed cloud infrastructure & migration</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">AI & machine learning solutions</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Cybersecurity consulting & security engineering</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">DevOps, CI/CD & automation services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider text-white">Contact Info</h4>
            <div className="space-y-4 text-gray-400 text-sm font-semibold">
              <p className="leading-relaxed">
                25, Subramaniam St, Olymbus,<br />
                Bharathi Nagar, Ramanathapuram,<br />
                Coimbatore, Tamil Nadu – 641045
              </p>
              <p className="flex flex-col gap-1">
                <span>Phone: <a href="tel:+919366615960" className="hover:text-primary transition-colors">+91 9366615960</a></span>
                <span>Email: <a href="mailto:info@vivantify.com" className="hover:text-primary transition-colors">info@vivantify.com</a></span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-bold text-sm">
            © 2026 Vivantify LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-black text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute bottom-12 right-12 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-2 transition-transform duration-300"
      >
        <ArrowUp size={28} />
      </button>
    </footer>
  );
};

export default Footer;

