import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/FooterSection';


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <ServicesSection />
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="pt-20">
      <PortfolioSection />
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <style>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
        
        <Navbar />
        
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;