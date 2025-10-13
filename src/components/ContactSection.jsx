import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const container = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, when: 'beforeChildren' } },
  };
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.45 } } };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="relative overflow-hidden bg-black py-12 sm:py-20 px-4"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-36 -top-24 w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(167,139,250,0.18), transparent 40%)' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      />

      <motion.div className="max-w-7xl mx-auto" variants={{ show: { transition: { staggerChildren: 0.06 } } }}>
        <motion.div variants={item} className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto">Let's create something extraordinary together</p>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={item} className="space-y-6">
            <motion.div variants={item} className="space-y-6">
              {[{
                Icon: MapPin,
                title: 'Office Locations',
                text: 'Dubai, UAE • Riyadh, Saudi Arabia • Mumbai, India',
                bg: 'from-purple-600 to-pink-600',
              }, {
                Icon: Phone,
                title: 'Phone',
                text: '+971 XX XXX XXXX',
                bg: 'from-pink-600 to-red-600',
              }, {
                Icon: Mail,
                title: 'Email',
                text: 'contact@elitemgmt.com',
                bg: 'from-blue-600 to-purple-600',
              }].map((s, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{ translateX: 6 }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    layout
                    whileHover={{ scale: 1.08 }}
                    className={`p-3 sm:p-4 bg-gradient-to-r ${s.bg} rounded-xl`}
                  >
                    <s.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{s.title}</h4>
                    <p className="text-gray-400 text-sm sm:text-base">{s.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={item} className="pt-6 sm:pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.92 }}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    className="p-3 bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-xl transition-all"
                    aria-label={`Open ${Icon.name}`}
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            variants={item}
            className="space-y-4"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            {[
              { key: 'name', type: 'text', placeholder: 'Your Name' },
              { key: 'email', type: 'email', placeholder: 'Your Email' },
              { key: 'phone', type: 'tel', placeholder: 'Your Phone' },
            ].map((f) => (
              <motion.div key={f.key} variants={item} className="relative">
                <motion.input
                  type={f.type}
                  value={formData[f.key]}
                  onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder={f.placeholder}
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
            ))}

            <motion.div variants={item} className="relative">
              <motion.textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Your Message"
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              variants={item}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(139,92,246,0.18)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
