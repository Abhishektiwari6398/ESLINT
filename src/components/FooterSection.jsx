import React from 'react';
import { motion } from 'framer-motion';
import {  Sparkles } from 'lucide-react';
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  const footer = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <motion.footer initial="hidden" whileInView="show" variants={footer} viewport={{ once: true, amount: 0.2 }} className="bg-gradient-to-b from-black to-purple-950/20 border-t border-white/10 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto text-center relative">
        <motion.div  className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
          <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-purple-500" />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> crazyfames</span>
        </motion.div>

        <motion.p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
          Redefining excellence in model management and event production across the Middle East
        </motion.p>

        <div className="flex justify-center space-x-4 mb-6">
          {[FaInstagramSquare , FaFacebook,  RiTwitterXFill].map((Icon, idx) => (
            <motion.button key={idx} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} className="p-2 bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all">
              <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </motion.button>
          ))}
        </div>

        <motion.p className="text-gray-500 text-xs sm:text-sm">© 2025  crazyfames. All rights reserved.</motion.p>

  
        <motion.div aria-hidden className="absolute left-0 right-0 bottom-1 h-0.5 mx-auto max-w-lg rounded-full opacity-30"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.25), transparent)' }}
          animate={{ x: [0, 120, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
