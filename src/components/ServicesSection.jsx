import React, { useEffect, useState } from "react";
import { FaUsers, FaCalendarAlt, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const services = [
    {
      title: 'Model Management',
      description: 'Representing elite models and influencers for fashion shows, campaigns, and brand collaborations worldwide.',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800',
      icon: FaUsers,
    },
    {
      title: 'Luxury Events',
      description: 'Producing unforgettable high-end events, galas, and fashion shows in prestigious locations across the Middle East.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      icon: FaCalendarAlt,
    },
    {
      title: 'Celebrity Booking',
      description: 'Connecting brands with A-list celebrities and influencers for endorsements, appearances, and exclusive collaborations.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      icon: FaStar,
    },
  ];

  return (
    <div
      id="services-section"
      className="min-h-screen bg-white py-20 sm:py-32 px-4"
    >
      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes iconBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .hover-lift {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-10px);
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.7s;
        }

        .shine-effect:hover::before {
          left: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 sm:mb-24 space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 font-light">SERVICES</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight font-serif">
            What We Offer
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
            Comprehensive solutions for brands, models, and event organizers
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group bg-white overflow-hidden hover-lift ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: `${idx * 150}ms`,
                boxShadow: hoveredIndex === idx ? '0 20px 40px rgba(0,0,0,0.15)' : '0 0 0 rgba(0,0,0,0)',
                transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden shine-effect">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredIndex === idx ? 'scale-110 grayscale-0' : 'scale-100 grayscale-[30%]'
                  }`}
                />
                <div className={`absolute inset-0 bg-slate-900 transition-opacity duration-500 ${
                  hoveredIndex === idx ? 'opacity-20' : 'opacity-0'
                }`}></div>
                
                {/* Icon overlay */}
                <div 
                  className="absolute top-6 right-6 transition-all duration-500"
                  style={{
                    transform: hoveredIndex === idx ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)'
                  }}
                >
                  <div className="w-12 h-12 bg-white/90 flex items-center justify-center relative">
                    <service.icon className="w-6 h-6 text-slate-900" />
                    {hoveredIndex === idx && (
                      <div 
                        className="absolute inset-0 border-2 border-amber-500"
                        style={{
                          animation: 'ripple 1s ease-out infinite'
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl text-slate-900 font-serif">
                  {service.title}
                </h3>
                <div 
                  className="h-px bg-amber-500"
                  style={{
                    width: hoveredIndex === idx ? '80px' : '48px',
                    transition: 'width 0.5s ease-out'
                  }}
                ></div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <button className="flex items-center space-x-2 text-sm tracking-wider text-slate-900 hover:text-amber-600 transition-colors pt-2 group/btn">
                  <span>LEARN MORE</span>
                  <BsArrowRight 
                    className="w-4 h-4 transition-transform duration-300"
                    style={{
                      transform: hoveredIndex === idx ? 'translateX(10px)' : 'translateX(0)'
                    }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-700 mb-6">Ready to elevate your brand?</p>
          <button className="group px-10 py-4 bg-slate-900 text-white text-sm tracking-[0.15em] hover:bg-slate-800 transition-all duration-500 relative overflow-hidden">
            <span className="relative z-10">GET STARTED</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;