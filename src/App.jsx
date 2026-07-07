import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';

const seoConfig = {
  '/': {
    title: 'Vivantify Technology Solutions | Custom Software, Cloud & Automation in India',
    description: 'Vivantify Technology Solutions is a Coimbatore-based enterprise technology partner for growing small and mid-size teams in India. We deliver reliable custom software, cloud, and automation solutions to modernize legacy systems, streamline operations, and launch new digital products faster.',
    keywords: 'software development company Coimbatore, cloud computing services India, custom software developers Tamil Nadu, DevOps automation consultants, enterprise software partners India'
  },
  '/about': {
    title: 'About Vivantify | Premium Software Engineering Team in Coimbatore',
    description: 'Learn about Vivantify Technology Solutions, Coimbatore\'s premium tech team. Discover our core values, delivery approach, and engineering expertise in building custom software, cloud, and automation.',
    keywords: 'Vivantify Coimbatore, software engineering team Tamil Nadu, IT consultancy Coimbatore, custom software developers India, about Vivantify'
  },
  '/services': {
    title: 'Software, Cloud & Automation Services | Vivantify Coimbatore',
    description: 'Explore our technology services: application development, responsive web development, cloud computing on AWS/Azure, AI/Data models, DevOps pipelines, and digital transformation for Indian SMBs.',
    keywords: 'cloud migration services India, web development Coimbatore, app developers Tamil Nadu, AI solutions business India, cybersecurity consulting Coimbatore, DevOps setup India'
  },
  '/contact': {
    title: 'Start Your Project | Contact Vivantify Coimbatore',
    description: 'Ready to streamline your business workflows? Get in touch with our Coimbatore tech squad for a free virtual technology review and blueprint consultation.',
    keywords: 'contact Vivantify, software development consultation Coimbatore, hire cloud developers India, IT project query Tamil Nadu'
  },
  '/careers': {
    title: 'Careers at Vivantify | Software Engineer Jobs in Coimbatore',
    description: 'Join our growing engineering team in Coimbatore. Explore job openings for React developers, Node backend engineers, cloud architects, and QA specialists.',
    keywords: 'software engineer jobs Coimbatore, React developer openings Tamil Nadu, IT careers Coimbatore, tech jobs Coimbatore, backend developer hiring'
  }
};

function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const meta = seoConfig[currentPath] || seoConfig['/'];

    // Update Title
    document.title = meta.title;

    // Update Description
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', meta.description);

    // Update Keywords
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', meta.keywords);

    // Update Open Graph tags dynamically
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', meta.title);

    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescTag) {
      ogDescTag = document.createElement('meta');
      ogDescTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescTag);
    }
    ogDescTag.setAttribute('content', meta.description);

    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (!ogUrlTag) {
      ogUrlTag = document.createElement('meta');
      ogUrlTag.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlTag);
    }
    ogUrlTag.setAttribute('content', window.location.href);

  }, [location]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOManager />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;