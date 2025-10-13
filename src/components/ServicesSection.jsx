import React, { useEffect, useState } from 'react';
import {  ChevronRight, Star, Users, Calendar } from 'lucide-react';

const ServicesSection = () => {
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
    },
    {
      title: 'Luxury Events',
      description: 'Producing unforgettable high-end events, galas, and fashion shows in prestigious locations.',
      icon: Calendar,
      gradient: 'from-pink-600 to-red-600',
    },
    {
      title: 'Celebrity Booking',
      description: 'Connecting brands with A-list celebrities and influencers for endorsements and appearances.',
      icon: Star,
      gradient: 'from-blue-600 to-purple-600',
    },
  ];

  return (
    <div id="services-section" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive solutions for brands, models, and event organizers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700`}></div>
              
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                
                <button className="flex items-center space-x-2 text-purple-400 font-semibold group-hover:text-pink-400 transition-colors duration-300">
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;