import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: 'https://www.careers-page.com/vivantify-technology-solutions', isExternal: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-xl py-2 border-b border-gray-100/50' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-1">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Vivantify" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => 
              link.isExternal ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary relative group py-2 text-primary-dark/80"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 h-[3px] bg-primary rounded-full transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary relative group py-2 ${
                    location.pathname === link.href ? 'text-primary font-black' : 'text-primary-dark/80'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[3px] bg-primary rounded-full transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            )}
            <Link to="/contact" className="btn-primary py-2.5 px-7 text-xs uppercase tracking-widest font-black">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary-dark p-2 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 border-t border-gray-100">
          {navLinks.map((link) => 
            link.isExternal ? (
              <a 
                key={link.name} 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-primary-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-xl font-bold transition-colors ${
                  location.pathname === link.href ? 'text-primary' : 'text-primary-dark hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
          <Link to="/contact" className="btn-primary py-3.5 w-full text-center text-sm uppercase tracking-widest font-black" onClick={() => setIsMenuOpen(false)}>
            Contact Specialist
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;


