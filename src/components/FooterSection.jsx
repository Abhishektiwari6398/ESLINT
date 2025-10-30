import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Linkedin } from 'lucide-react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ backgroundSize: '200% 100%' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-serif">CrazyFames</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining excellence in model management and event production across the Middle East and beyond.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 text-sm hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Dubai, UAE</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">+91 8595519533</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">contact@crazyfames.com</li>
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs">© 2025 CrazyFames. All rights reserved.</p>
          
          <div className="flex space-x-4">
            {[FaInstagramSquare, FaFacebook, Linkedin].map((Icon, idx) => (
              <motion.button
                key={idx}
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-amber-500 group rounded-lg"
              >
                <Icon className="w-4 h-4 text-gray-500 group-hover:text-amber-500 transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;