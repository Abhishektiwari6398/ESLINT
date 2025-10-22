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
            setCounts({
              events: Math.floor(500 * progress),
              models: Math.floor(200 * progress),
              years: Math.floor(15 * progress),
              clients: Math.floor(50 * progress)
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
            <div className="w-16 h-px bg-amber-500"></div>
            <div className="w-2 h-2 bg-amber-500 transform rotate-45"></div>
            <div className="w-16 h-px bg-amber-500"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 sm:mb-32 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          {/* Image - Reduced height */}
          <div className="relative group">
            <div className="h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
                alt="Luxury Event"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-amber-500 -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl text-slate-900 leading-tight font-serif">
              Globally Recognized Excellence
            </h3>
            <div className="w-20 h-px bg-amber-500"></div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              With over 15 years of experience in the industry, we've established ourselves as the premier choice for luxury events and model management across Dubai, Saudi Arabia, and beyond.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our portfolio includes high-profile events, fashion shows, celebrity appearances, and corporate galas. We represent some of the most sought-after talent in the industry and have produced unforgettable experiences for global brands.
            </p>
            
            {/* Service tags - minimal design */}
            <div className="flex flex-wrap gap-3 pt-6">
              {['Fashion Events', 'Celebrity Management', 'Corporate Galas'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2 border border-gray-300 text-gray-700 text-xs tracking-wider hover:border-slate-900 hover:text-slate-900 transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid - Clean and minimal */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
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