import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      id="contact-section"
      className="min-h-screen bg-white py-20 sm:py-32 px-4"
    >
      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.95);
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .contact-item {
          animation: slide-in-left 0.6s ease-out both;
        }

        .form-container {
          animation: slide-in-right 0.6s ease-out both;
        }

        .icon-pulse {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .input-focus-line {
          position: relative;
        }

        .input-focus-line::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f59e0b, transparent);
          transform: translateX(-50%);
          transition: width 0.5s ease-out;
        }

        .input-focus-line.focused::after {
          width: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24 space-y-6">
          <p className="text-xs tracking-[0.3em] text-gray-500 font-light">
            CONTACT
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight font-serif">
            Get In Touch
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-amber-500"></div>
            <div className="w-2 h-2 bg-amber-500 transform rotate-45"></div>
            <div className="w-16 h-px bg-amber-500"></div>
          </div>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Let's create something extraordinary together
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl text-slate-900 mb-8 font-serif">
                Contact Information
              </h3>
              <div className="space-y-8">
                {/* Location */}
                <div 
                  className="flex items-start space-x-5 contact-item group"
                  style={{ animationDelay: '0.1s' }}
                >
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 icon-pulse">
                    <FaMapMarkerAlt className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium tracking-wide">
                      Office Locations
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Dubai, UAE • Riyadh, Saudi Arabia • Mumbai
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div 
                  className="flex items-start space-x-5 contact-item group"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <FaPhone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium tracking-wide">
                      Phone
                    </h4>
                    <p className="text-gray-700 text-sm">+91 8595519533</p>
                  </div>
                </div>

                {/* Email */}
                <div 
                  className="flex items-start space-x-5 contact-item group"
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium tracking-wide">
                      Email
                    </h4>
                    <p className="text-gray-700 text-sm">
                      contact@crazyfames.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div 
              className="contact-item"
              style={{ animationDelay: '0.4s' }}
            >
              <h4 className="text-slate-900 font-medium mb-4 tracking-wide">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { Icon: FaInstagram, label: "Instagram" },
                  { Icon: FaFacebookF, label: "Facebook" },
                  { Icon: FaLinkedinIn, label: "LinkedIn" },
                ].map(({ Icon, label }, idx) => (
                  <button
                    key={idx}
                    className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 group transition-all duration-500 hover:rotate-12 hover:scale-110"
                    aria-label={label}
                    style={{
                      transitionDelay: `${idx * 50}ms`
                    }}
                  >
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-neutral-50 p-8 sm:p-12 form-container">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className={`input-focus-line ${focusedField === 'name' ? 'focused' : ''}`}>
                <input
                  type="text"
                  value={formData.name}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-b border-gray-300 py-4 text-slate-900 placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors bg-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className={`input-focus-line ${focusedField === 'email' ? 'focused' : ''}`}>
                <input
                  type="email"
                  value={formData.email}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-gray-300 py-4 text-slate-900 placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors bg-transparent"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className={`input-focus-line ${focusedField === 'phone' ? 'focused' : ''}`}>
                <input
                  type="tel"
                  value={formData.phone}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border-b border-gray-300 py-4 text-slate-900 placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors bg-transparent"
                  placeholder="Your Phone"
                  required
                />
              </div>

              <div className={`input-focus-line ${focusedField === 'message' ? 'focused' : ''}`}>
                <textarea
                  value={formData.message}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full border-b border-gray-300 py-4 text-slate-900 placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors resize-none bg-transparent"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full py-4 bg-slate-900 text-white text-sm tracking-[0.15em] hover:bg-slate-800 transition-all duration-500 mt-4 relative overflow-hidden"
              >
                <span className="relative z-10">SEND MESSAGE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;