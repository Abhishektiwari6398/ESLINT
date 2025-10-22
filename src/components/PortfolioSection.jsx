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
    <div id="portfolio-section" className="min-h-screen bg-white py-20 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xs tracking-[0.3em] text-gray-500 font-light">PORTFOLIO</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-black leading-tight font-serif">
            Our Work
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-amber-500"></div>
            <div className="w-2 h-2 bg-amber-500 transform rotate-45"></div>
            <div className="w-16 h-px bg-amber-500"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            A glimpse into our world of luxury and excellence
          </p>
        </div>

        {/* Tab Navigation - minimal and elegant */}
        <div className={`flex justify-center mb-16 space-x-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          {['events', 'models'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm tracking-[0.2em] pb-3 transition-all duration-300 ${
                activeTab === tab
                  ? 'text-black'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.toUpperCase()}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - All Equal Size */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioImages[activeTab].map((img, idx) => (
            <div
              key={idx}
              className={`group relative aspect-square overflow-hidden cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img
                src={img}
                alt={`Portfolio ${idx + 1}`}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                    <BsArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-sm tracking-wider">VIEW PROJECT</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="px-10 py-4 border-2 border-black text-black text-sm tracking-[0.15em] hover:bg-black hover:text-white transition-all duration-300">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;