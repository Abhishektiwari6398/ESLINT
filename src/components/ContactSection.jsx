import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Menu, X, Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight, Star, Calendar, Users, Award, Globe } from 'lucide-react';
const AnimatedSection = ({ children, id }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <AnimatedSection id="contact">
      <div className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-playfair text-slate-900"
            >
              Get In Touch
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: MapPin, title: 'Office Locations', text: 'Dubai, UAE • Riyadh, Saudi Arabia • Mumbai' },
                { icon: Phone, title: 'Phone', text: '+91 8595519533' },
                { icon: Mail, title: 'Email', text: 'contact@crazyfames.com' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-5 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 bg-slate-900 flex items-center justify-center"
                  >
                    <item.icon className="w-5 h-5 text-amber-500" />
                  </motion.div>
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-700 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-10"
            >
              <form className="space-y-6">
                {['name', 'email', 'phone'].map((field) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      className="w-full border-b-2 border-gray-300 py-4 text-slate-900 bg-transparent focus:border-amber-500 focus:outline-none transition-colors"
                      required
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full border-b-2 border-gray-300 py-4 text-slate-900 bg-transparent focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    required
                  />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-slate-900 text-white text-sm tracking-[0.15em] hover:bg-slate-800 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">SEND MESSAGE</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
export default ContactSection;