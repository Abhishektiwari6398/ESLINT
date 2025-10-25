import React from 'react';
import { Sparkles, Linkedin } from 'lucide-react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
      <style>{`
        @keyframes float-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 5px rgba(245, 158, 11, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.6);
          }
        }

        .footer-item {
          animation: float-up 0.6s ease-out both;
        }

        .social-icon {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-icon:hover {
          transform: translateY(-5px) rotate(10deg);
          animation: glow-pulse 1.5s ease-in-out infinite;
        }

        .link-hover {
          position: relative;
          transition: all 0.3s ease;
        }

        .link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #f59e0b;
          transition: width 0.3s ease;
        }

        .link-hover:hover::after {
          width: 100%;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      {/* Background Pattern */}
      <div className="background-pattern"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Logo & Description */}
          <div 
            className="space-y-4 footer-item"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center space-x-2 group">
              <div className="w-10 h-10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <span className="text-2xl font-serif tracking-tight group-hover:tracking-wide transition-all duration-300">
                CrazyFames
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining excellence in model management and event production across the Middle East and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div 
            className="footer-item"
            style={{ animationDelay: '0.2s' }}
          >
            <h4 className="text-white font-medium mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="link-hover text-gray-400 text-sm hover:text-amber-500 transition-colors inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div 
            className="footer-item"
            style={{ animationDelay: '0.3s' }}
          >
            <h4 className="text-white font-medium mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Dubai, UAE</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">+91 8595519533</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">contact@crazyfames.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p 
            className="text-gray-500 text-xs footer-item"
            style={{ animationDelay: '0.4s' }}
          >
            © 2025 CrazyFames. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div 
            className="flex space-x-4 footer-item"
            style={{ animationDelay: '0.5s' }}
          >
            {[FaInstagramSquare, FaFacebook, Linkedin].map((Icon, idx) => (
              <button
                key={idx}
                className="social-icon w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-amber-500 group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <Icon className="w-4 h-4 text-gray-500 group-hover:text-amber-500 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;