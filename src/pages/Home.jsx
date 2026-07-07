import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';

import FeaturedTechSection from '../components/sections/FeaturedTechSection';
import ProcessSection from '../components/sections/ProcessSection';
import AboutSection from '../components/sections/AboutSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      <FeaturedTechSection />
      <ProcessSection />
      <AboutSection />
    </motion.div>
  );
};

export default Home;
