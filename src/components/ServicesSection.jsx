import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { BsCalendarCheckFill,BsStars } from "react-icons/bs";

import { ChevronRight, Star, Users, ArrowUpRight, Sparkles, } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [countStarted, setCountStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCountStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const services = [
    {
      title: 'Model Management',
      description: 'Representing elite models and influencers for fashion shows, campaigns, and brand collaborations worldwide.',
      icon: Users,
      gradient: 'from-purple-600 to-pink-600',
      stats: 500,
      feature: 'Global Network'
    },
    {
      title: 'Luxury Events',
      description: 'Producing unforgettable high-end events, galas, and fashion shows in prestigious locations.',
      icon:BsCalendarCheckFill ,
      gradient: 'from-pink-600 to-red-600',
      stats: 200,
      feature: 'Premium Venues'
    },
    {
      title: 'Celebrity Booking',
      description: 'Connecting brands with A-list celebrities and influencers for endorsements and appearances.',
      icon: BsStars ,
      gradient: 'from-blue-600 to-purple-600',
      stats: 1000,
      feature: 'A-List Access'
    },
  ];

  const stats = [
    { label: 'Active Models', value: 500, },
    { label: 'Events Produced', value: 200, },
    { label: 'Brand Partners', value: 150, },
    { label: 'Countries', value: 25,  }
  ];

  return (
    <div id="services-section" className="min-h-screen bg-black relative overflow-hidden">
    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.06),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
     
        <div className={`text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-3">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs sm:text-sm text-purple-300 font-medium">Services</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            What we offer?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions for brands, models, and event organizers
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col items-center">
                 
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {countStarted ? <CountUp end={stat.value} duration={2} /> : 0}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-purple-500/50 transition-all duration-500 flex flex-col">
                {/* Icon & Stats Badge */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className={`inline-flex p-2 sm:p-3 rounded-2xl bg-gradient-to-r ${service.gradient} group-hover:scale-110 transition-all duration-500`}>
                    <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-xs text-purple-300 font-medium">
                    {countStarted ? <CountUp end={service.stats} duration={2} /> : 0}+
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Feature Tag */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">{service.feature}</span>
                  <button className="flex items-center gap-2 text-xs sm:text-sm text-purple-400 font-semibold group-hover:text-pink-400 transition-colors duration-300">
                    <span className="hidden sm:inline">Explore</span>
                    <ArrowUpRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${hoveredCard === idx ? 'translate-x-1 -translate-y-1' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-8 sm:mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-70 group-hover:opacity-100"></div>
            <button className="relative px-4 sm:px-6 py-2.5 sm:py-3 bg-black border border-purple-500/50 rounded-full text-white font-semibold hover:border-purple-400 transition-all duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base">
              <span>Get Started Today</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
