import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sparkles, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-4' 
        : 'bg-white/98 backdrop-blur-sm py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-black" />
              <div className="absolute inset-0 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <span className="text-2xl font-serif text-black tracking-tight">CrazyFames</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm tracking-wider transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'text-black font-medium' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name.toUpperCase()}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500"></span>
                )}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black hover:text-gray-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-gray-200 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left py-2 text-sm tracking-wider transition-colors ${
                  location.pathname === item.path 
                    ? 'text-black font-medium' 
                    : 'text-gray-600'
                }`}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full px-6 py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors mt-4 text-center"
            >
              BOOK NOW
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;