import React, { useEffect, useState } from "react";
import { FaUsers, FaCalendarCheck, FaTrophy, FaGlobeAmericas } from "react-icons/fa";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    events: 0,
    models: 0,
    years: 0,
    clients: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
       
          const duration = 2000;
          const steps = 60;
          const increment = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOutQuad = 1 - (1 - progress) * (1 - progress);
            setCounts({
              events: Math.floor(500 * easeOutQuad),
              models: Math.floor(200 * easeOutQuad),
              years: Math.floor(15 * easeOutQuad),
              clients: Math.floor(50 * easeOutQuad)
            });
            
            if (step >= steps) clearInterval(timer);
          }, increment);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    { icon: FaCalendarCheck, value: counts.events, suffix: '+', label: 'Events Completed' },
    { icon: FaUsers, value: counts.models, suffix: '+', label: 'Elite Models' },
    { icon: FaTrophy, value: counts.years, suffix: '+', label: 'Years Experience' },
    { icon: FaGlobeAmericas, value: counts.clients, suffix: '+', label: 'Global Clients' },
  ];

  return (
    <div
      id="about-section"
      className="min-h-screen bg-neutral-50 py-20 sm:py-32 px-4"
    >
      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }

        .animate-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 sm:mb-24 space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 font-light">ABOUT US</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight font-serif">
            A Legacy of Excellence
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
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 sm:mb-32">
          {/* Image */}
          <div 
            className={`relative group transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="h-[400px] overflow-hidden relative animate-shimmer">
              <img
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
                alt="Luxury Event"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-amber-500 -z-10 transition-all duration-700 group-hover:scale-110"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translate(20px, -20px)',
                transition: 'opacity 0.7s ease-out 0.5s, transform 0.7s ease-out 0.5s'
              }}
            ></div>
          </div>

          {/* Text Content */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <h3 className="text-3xl sm:text-4xl text-slate-900 leading-tight font-serif">
              Globally Recognized Excellence
            </h3>
            <div 
              className="h-px bg-amber-500"
              style={{
                width: isVisible ? '80px' : '0px',
                transition: 'width 0.8s ease-out 0.6s'
              }}
            ></div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              With over 15 years of experience in the industry, we've established ourselves as the premier choice for luxury events and model management across Dubai, Saudi Arabia, and beyond.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our portfolio includes high-profile events, fashion shows, celebrity appearances, and corporate galas. We represent some of the most sought-after talent in the industry and have produced unforgettable experiences for global brands.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-6">
              {['Fashion Events', 'Celebrity Management', 'Corporate Galas'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2 border border-gray-300 text-gray-700 text-xs tracking-wider hover:border-slate-900 hover:text-slate-900 hover:shadow-md transition-all duration-300 cursor-default transform hover:-translate-y-1"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease-out ${0.8 + idx * 0.1}s`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.4 + idx * 0.1}s` }}
            >
              <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              <div className="text-3xl sm:text-5xl font-light text-slate-900 mb-2 font-serif">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;