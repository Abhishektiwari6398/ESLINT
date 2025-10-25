import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Menu, X, Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight, Star, Calendar, Users, Award, Globe } from 'lucide-react';


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative h-screen overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={slides[currentSlide]} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs tracking-[0.3em] text-white/80 mb-6 font-light"
          >
            DUBAI • RIYADH • MUMBAI
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-playfair text-white leading-tight"
            >
              Elegance
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-6xl md:text-8xl font-playfair text-white leading-tight"
            >
              Redefined
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="h-px bg-amber-400 w-16" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-amber-400 rotate-45"
            />
            <div className="h-px bg-amber-400 w-16" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-xl text-white/90 mb-10 font-light tracking-wide"
          >
            Premier Model Management & Luxury Event Production
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black text-sm tracking-[0.15em] font-medium flex items-center justify-center space-x-2 group"
            >
              <span>VIEW PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-white text-white text-sm tracking-[0.15em] font-medium hover:bg-white hover:text-black transition-all"
            >
              CONTACT US
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all ${
              idx === currentSlide ? 'bg-white w-12 h-0.5' : 'bg-white/40 w-2 h-0.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;