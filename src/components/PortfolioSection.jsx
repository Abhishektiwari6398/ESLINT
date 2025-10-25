import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const portfolioImages = {
    events: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600',
      'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600',
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600',
    ],
    models: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600',
      'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=600',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600',
    ],
  };

  return (
    <div id="portfolio-section" className="min-h-screen bg-neutral-50 py-20 sm:py-32 px-4">
      <style>{`
        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes tab-slide {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .image-tilt {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-tilt:hover {
          transform: perspective(1000px) rotateY(5deg) rotateX(-5deg);
        }

        .glow-effect {
          position: relative;
        }

        .glow-effect::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease-out, height 0.6s ease-out;
          pointer-events: none;
        }

        .glow-effect:hover::after {
          width: 300px;
          height: 300px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xs tracking-[0.3em] text-gray-500 font-light">PORTFOLIO</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight font-serif">
            Our Work
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div 
              className="h-px bg-amber-500"
              style={{
                width: isVisible ? '64px' : '0px',
                transition: 'width 0.8s ease-out 0.3s'
              }}
            ></div>
            <div className="w-2 h-2 bg-amber-500 transform rotate-45"></div>
            <div 
              className="h-px bg-amber-500"
              style={{
                width: isVisible ? '64px' : '0px',
                transition: 'width 0.8s ease-out 0.3s'
              }}
            ></div>
          </div>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            A glimpse into our world of luxury and excellence
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-16 space-x-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          {['events', 'models'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm tracking-[0.2em] pb-3 transition-all duration-300 ${
                activeTab === tab
                  ? 'text-slate-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.toUpperCase()}
              {activeTab === tab && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                  style={{
                    animation: 'tab-slide 0.3s ease-out'
                  }}
                ></div>
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioImages[activeTab].map((img, idx) => (
            <div
              key={`${activeTab}-${idx}`}
              className={`group relative aspect-square overflow-hidden cursor-pointer image-tilt glow-effect ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${idx * 100}ms`,
                animation: isVisible ? `float-in 0.7s ease-out ${idx * 0.1}s both` : 'none'
              }}
            >
              <img
                src={img}
                alt={`Portfolio ${idx + 1}`}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/0 to-slate-900/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-center space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 border-2 border-white flex items-center justify-center mx-auto bg-white/10 backdrop-blur-sm">
                    <BsArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <p className="text-white text-sm tracking-wider">VIEW PROJECT</p>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-amber-500 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-amber-500 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group px-10 py-4 border-2 border-slate-900 text-slate-900 text-sm tracking-[0.15em] hover:bg-slate-900 hover:text-white transition-all duration-500 relative overflow-hidden">
            <span className="relative z-10">VIEW ALL PROJECTS</span>
            <div className="absolute inset-0 bg-slate-900 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;