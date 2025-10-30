import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-xl py-3' : 'bg-white/95 backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
         
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Sparkles className="w-8 h-8 text-amber-600" />
              <motion.div
                className="absolute inset-0 bg-amber-400 rounded-full blur-md opacity-0 group-hover:opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="text-2xl font-serif text-slate-900 tracking-tight group-hover:tracking-wide transition-all duration-300">
              CrazyFames
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <Link key={item.path} to={item.path} className="relative group">
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`text-sm tracking-wider transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-slate-900 font-semibold' : 'text-gray-600 hover:text-slate-900 font-medium'
                  }`}
                >
                  {item.name.toUpperCase()}
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            
            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm tracking-wider rounded-sm overflow-hidden group"
              >
                <span className="relative z-10">BOOK NOW</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.9, rotate: 90 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 hover:text-amber-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-6 pb-4 space-y-3 border-t border-gray-200 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-3 px-4 text-sm tracking-wider transition-all rounded-sm ${
                      location.pathname === item.path ? 'text-slate-900 font-semibold bg-amber-50' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
