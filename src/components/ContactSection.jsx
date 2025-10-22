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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      id="contact-section"
      className="min-h-screen bg-gray-50 py-20 sm:py-32 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24 space-y-6">
          <p className="text-xs tracking-[0.3em] text-gray-500 font-light">
            CONTACT
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-black leading-tight font-serif">
            Get In Touch
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-amber-500"></div>
            <div className="w-2 h-2 bg-amber-500 transform rotate-45"></div>
            <div className="w-16 h-px bg-amber-500"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Let's create something extraordinary together
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl text-black mb-8 font-serif">
                Contact Information
              </h3>
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium  tracking-wide">
                      Office Locations
                    </h4>

                    <p className="text-gray-600 text-sm">
                      Dubai, UAE Riyadh, Saudi Arabia, Mumbai{" "}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium  tracking-wide">
                      Phone
                    </h4>
                    <p className="text-gray-600 text-sm">+91 8595519533</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium  tracking-wide">
                      Email
                    </h4>
                    <p className="text-gray-600 text-sm">
                      contact@crazyfames.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-black font-medium mb-4 tracking-wide">
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
                    className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center hover:bg-black hover:border-black group transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors bg-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors bg-transparent"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors bg-transparent"
                  placeholder="Your Phone"
                  required
                />
              </div>

              <div>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors resize-none bg-transparent"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white text-sm tracking-[0.15em] hover:bg-gray-800 transition-colors mt-4"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
