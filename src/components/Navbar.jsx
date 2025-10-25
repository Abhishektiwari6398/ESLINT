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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-md py-4' 
        : 'bg-white/98 backdrop-blur-sm py-6'
    }`}>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .nav-item {
          position: relative;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f59e0b, #d97706);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-item:hover::before {
          width: 100%;
        }

        .menu-item {
          animation: fadeInScale 0.3s ease-out both;
        }

        .logo-glow {
          position: relative;
        }

        .logo-glow::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, transparent, #f59e0b, transparent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .logo-glow:hover::after {
          opacity: 0.3;
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative logo-glow">
              <Sparkles className="w-8 h-8 text-black group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-serif text-black tracking-tight group-hover:tracking-wide transition-all duration-300">
              CrazyFames
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item text-sm tracking-wider transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'text-black font-medium' 
                    : 'text-gray-600 hover:text-black'
                }`}
                style={{
                  animation: 'slideDown 0.5s ease-out both',
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group"
              style={{
                animation: 'slideDown 0.5s ease-out both',
                animationDelay: '0.5s'
              }}
            >
              <span className="relative z-10">BOOK NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black hover:text-gray-600 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 transform rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-gray-200 pt-4">
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`menu-item block w-full text-left py-2 text-sm tracking-wider transition-colors ${
                  location.pathname === item.path 
                    ? 'text-black font-medium' 
                    : 'text-gray-600'
                }`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="menu-item block w-full px-6 py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors mt-4 text-center"
              style={{ animationDelay: '0.25s' }}
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