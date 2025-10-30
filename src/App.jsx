import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Sparkles } from 'lucide-react'; // install lucide-react or replace with your preferred icon

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/FooterSection';

/* Page transition variants */
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4 }
  }
};

const AnimatedPage = ({ children }) => (
  <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
    {children}
  </motion.div>
);

const HomePage = () => (
  <AnimatedPage>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <ContactSection />
  </AnimatedPage>
);

const AboutPage = () => (
  <AnimatedPage>
    <div className="pt-20">
      <AboutSection />
    </div>
  </AnimatedPage>
);

const ServicesPage = () => (
  <AnimatedPage>
    <div className="pt-20">
      <ServicesSection />
    </div>
  </AnimatedPage>
);

const PortfolioPage = () => (
  <AnimatedPage>
    <div className="pt-20">
      <PortfolioSection />
    </div>
  </AnimatedPage>
);

const ContactPage = () => (
  <AnimatedPage>
    <div className="pt-20">
      <ContactSection />
    </div>
  </AnimatedPage>
);

/* Scroll-to-top on route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

/* Progress bar using useScroll + useSpring */
const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 origin-left z-[100]"
    />
  );
};

/* New loader (the one you provided, with Sparkles) */
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[200]">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <motion.div
        className="w-20 h-20 border-4 border-amber-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Sparkles className="w-8 h-8 text-amber-500" />
      </motion.div>
    </motion.div>
  </div>
);

/* AppContent — this keeps Router context usage correct */
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // small delay so loader shows briefly; adjust duration if you want
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ProgressBar />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Optional: 404 route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

/* Root App — Router wraps everything */
const App = () => (
  <Router>
    <div className="bg-white text-slate-900 min-h-screen overflow-x-hidden font-sans">
      <AppContent />
    </div>
  </Router>
);

export default App;
