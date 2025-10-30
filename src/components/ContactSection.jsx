import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Send, } from 'lucide-react';
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
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    { 
      icon: MapPin, 
      title: 'Office Locations', 
      text: 'Dubai, UAE • Riyadh, Saudi Arabia • Mumbai',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Phone, 
      title: 'Phone', 
      text: '+91 8595519533',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Mail, 
      title: 'Email', 
      text: 'contact@crazyfames.com',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <AnimatedSection id="contact">
      <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 py-20 px-4 relative overflow-hidden">
      
       

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs tracking-[0.3em] text-gray-500"
            >
              CONTACT US
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif text-slate-900"
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="flex items-center justify-center space-x-4"
            >
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start space-x-5 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-br ${item.color} flex items-center justify-center rounded-lg shadow-lg`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-slate-900 font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-700 text-sm">{item.text}</p>
                    <motion.div
                      className={`h-0.5 bg-gradient-to-r ${item.color} mt-2`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}

            
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-12 p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <p className="text-slate-900 font-medium mb-2 relative z-10">Ready to work together?</p>
                <p className="text-gray-700 text-sm relative z-10">Let's create something amazing!</p>
              </motion.div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-lg shadow-xl relative overflow-hidden"
            >
         
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-transparent rounded-full blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <form className="space-y-6 relative z-10">
                {['name', 'email', 'phone'].map((field, idx) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <motion.input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      className="w-full border-b-2 border-gray-300 py-4 text-slate-900 bg-transparent focus:border-amber-500 focus:outline-none transition-colors"
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                    {focusedField === field && (
                      <motion.div
                        layoutId="activeField"
                        // className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"
                        // initial={{ scaleX: 0 }}
                        // animate={{ scaleX: 1 }}
                      />
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <motion.textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full border-b-2 border-gray-300 py-4 text-slate-900 bg-transparent focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                  {focusedField === 'message' && (
                    <motion.div
                      // className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"
                      // initial={{ scaleX: 0 }}
                      // animate={{ scaleX: 1 }}
                    />
                  )}
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm tracking-[0.15em] relative overflow-hidden group rounded-sm shadow-lg"
                >
                  <motion.span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </motion.span>
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