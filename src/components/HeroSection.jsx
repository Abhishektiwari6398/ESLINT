import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  const slides = [
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200',
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img src={slide} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/50 to-black/80"></div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className={`max-w-5xl space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 animate-in fade-in slide-in-from-top duration-700 hover:scale-105 transition-transform">
            <Globe className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-sm text-gray-200">Dubai • Saudi Arabia • India</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Redefining Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            Premier Model Management & Luxury Event Production across the Middle East and Beyond
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <button
              onClick={() => navigate('/portfolio')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden transition-all hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 hover:border-white/50 hover:scale-110 transition-all duration-300 backdrop-blur-sm active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full ${
              idx === currentSlide ? 'bg-purple-400 w-8 h-2' : 'bg-white/40 hover:bg-white/60 w-2 h-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};


export default HeroSection;