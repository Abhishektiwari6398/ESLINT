import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-slate-900">
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { 
            transform: translateY(-100px) translateX(20px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: rotate(45deg) scale(1); }
          50% { transform: rotate(45deg) scale(1.2); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-slideInUp {
          animation: slideInUp 1s ease-out both;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-bounce-custom {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>

      {/* Background Images with Ken Burns Effect */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: idx === currentSlide ? `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` : 'scale(1)',
            transition: 'transform 0.3s ease-out, opacity 2s ease-in-out'
          }}
        >
          <img 
            src={slide} 
            alt="" 
            className="w-full h-full object-cover"
            style={{
              animation: idx === currentSlide ? 'slowZoom 20s ease-in-out infinite alternate' : 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60"></div>
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div 
          className={`max-w-5xl space-y-8 text-white transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
          }}
        >
          <p 
            className="text-xs tracking-[0.3em] opacity-80 font-light animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            DUBAI • RIYADH • MUMBAI
          </p>
          
          <div className="overflow-hidden">
            <h1 className="text-5xl sm:text-6xl md:text-8xl leading-tight font-serif">
              <span 
                className="inline-block animate-slideInUp"
                style={{ animationDelay: '0.4s' }}
              >
                Elegance
              </span>
              <br/>
              <span 
                className="inline-block animate-slideInUp"
                style={{ animationDelay: '0.6s' }}
              >
                Redefined
              </span>
            </h1>
          </div>
          
          <div 
            className="flex items-center justify-center space-x-4 animate-fadeIn"
            style={{ animationDelay: '0.8s' }}
          >
            <div 
              className="h-px bg-amber-400"
              style={{
                width: isVisible ? '64px' : '0px',
                transition: 'width 1s ease-out 0.8s'
              }}
            ></div>
            <div className="w-2 h-2 bg-amber-400 transform rotate-45 animate-pulse-custom"></div>
            <div 
              className="h-px bg-amber-400"
              style={{
                width: isVisible ? '64px' : '0px',
                transition: 'width 1s ease-out 0.8s'
              }}
            ></div>
          </div>
          
          <p 
            className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed tracking-wide opacity-90 animate-fadeInUp"
            style={{ animationDelay: '1s' }}
          >
            Premier Model Management & Luxury Event Production
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fadeInUp"
            style={{ animationDelay: '1.2s' }}
          >
            <button 
              onClick={() => navigate('/portfolio')}
              className="group px-10 py-4 bg-white text-black text-sm font-medium tracking-[0.15em] hover:bg-amber-500 hover:text-white transition-all duration-500 flex items-center space-x-2 overflow-hidden relative"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            >
              <span className="relative z-10">VIEW PORTFOLIO</span>
              <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="group px-10 py-4 border-2 border-white text-white text-sm font-medium tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10">CONTACT US</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 ease-out ${
              idx === currentSlide 
                ? 'bg-white w-12 h-0.5' 
                : 'bg-white/40 hover:bg-white/60 w-0.5 h-0.5'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center space-y-2 text-white/60 text-xs tracking-widest animate-bounce-custom">
        <span className="rotate-90 origin-center">SCROLL</span>
        <div className="w-px h-12 bg-white/40"></div>
      </div>
    </div>
  );
};

export default HeroSection;