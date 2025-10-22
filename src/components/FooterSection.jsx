import React from 'react';
import { Sparkles, Linkedin } from 'lucide-react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-serif tracking-tight">CrazyFames</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining excellence in model management and event production across the Middle East and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 text-sm hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Dubai, UAE</li>
              <li>+91 8595519533</li>
              <li>contact@crazyfames.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs">© 2025 CrazyFames. All rights reserved.</p>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            {[FaInstagramSquare, FaFacebook, Linkedin].map((Icon, idx) => (
              <button
                key={idx}
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-amber-500 group transition-colors"
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