import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  const slides = [
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-slate-900">
      {/* Background Images - Smooth Fade Only */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide} alt="" className="w-full h-full object-cover" />
          {/* Natural overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className={`max-w-5xl space-y-8 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Location indicator - minimal */}
          <p className="text-xs tracking-[0.3em] opacity-80 font-light">
            DUBAI • RIYADH • MUMBAI
          </p>
          
          {/* Main headline - elegant serif font */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl leading-tight font-serif">
            Elegance<br/>Redefined
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-amber-400"></div>
            <div className="w-2 h-2 bg-amber-400 transform rotate-45"></div>
            <div className="w-16 h-px bg-amber-400"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed tracking-wide opacity-90">
            Premier Model Management & Luxury Event Production
          </p>

          {/* CTA Buttons - clean and minimal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => navigate('/portfolio')}
              className="group px-10 py-4 bg-white text-black text-sm font-medium tracking-[0.15em] hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <span>VIEW PORTFOLIO</span>
              <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-4 border-2 border-white text-white text-sm font-medium tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Minimal slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 ${
              idx === currentSlide 
                ? 'bg-white w-12 h-0.5' 
                : 'bg-white/40 hover:bg-white/60 w-0.5 h-0.5'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center space-y-2 text-white/60 text-xs tracking-widest animate-bounce">
        <span className="rotate-90 origin-center">SCROLL</span>
        <div className="w-px h-12 bg-white/40"></div>
      </div>
    </div>
  );
};

export default HeroSection;