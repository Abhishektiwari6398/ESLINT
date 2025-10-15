import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { GiLaurelsTrophy } from "react-icons/gi";
import { RiGlobalFill } from "react-icons/ri";

import CountUp from "react-countup";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTrigger((prev) => prev + 1);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

 const stats = [
  { icon:GiLaurelsTrophy, value: 500, suffix: '+', label: 'Events Completed' },
  { icon:FaUsers, value: 200, suffix: '+', label: 'Talented Models' },
  { icon: BsStars, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: RiGlobalFill , value: 50, suffix: '+', label: 'Global Clients' },
];
  return (
    <div
      id="about-section"
      className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black py-16 sm:py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            A legacy of excellence in model management and event production
          </p>
        </div>

        {/* Image & description */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1  rounded-2xl blur-xl opacity-50 group-hover:opacity-10 transition-all duration-500 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
              alt="Luxury Event"
              className="relative rounded-2xl shadow-2xl w-full h-64 sm:h-72 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white">
              Globally Recognized Excellence
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              With over 15 years of experience in the industry, we've
              established ourselves as the premier choice for luxury events and
              model management across Dubai, Saudi Arabia, and beyond. Our
              portfolio includes high-profile events, fashion shows, celebrity
              appearances, and corporate galas.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We represent some of the most sought-after talent in the industry
              and have produced unforgettable experiences for global brands and
              distinguished clients.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Fashion Events",
                "Celebrity Management",
                "Corporate Galas",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 sm:px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-xs sm:text-sm hover:bg-purple-500/30 hover:scale-110 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30  border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2  hover:shadow-purple-500/20"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500"></div>
              <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              <div className="text-2xl sm:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                    redraw={true} 
                  />
                ) : (
                  "0"
                )}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
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
