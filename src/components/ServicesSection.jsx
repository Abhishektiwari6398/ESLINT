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
            <div className="w-16 h-px bg-amber-500"></div>
            <div className="w-2 h-2 bg-amber-500 transform rotate-45"></div>
            <div className="w-16 h-px bg-amber-500"></div>
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
              className={`group bg-white overflow-hidden transition-all duration-700 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
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
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/90 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-slate-900" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl text-slate-900 font-serif">
                  {service.title}
                </h3>
                <div className="w-12 h-px bg-amber-500"></div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <button className="flex items-center space-x-2 text-sm tracking-wider text-slate-900 hover:text-amber-600 transition-colors pt-2 group">
                  <span>LEARN MORE</span>
                  <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - subtle */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-700 mb-6">Ready to elevate your brand?</p>
          <button className="px-10 py-4 bg-slate-900 text-white text-sm tracking-[0.15em] hover:bg-slate-800 transition-colors">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;