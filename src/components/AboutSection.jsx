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
const AboutSection = () => {
  const [counts, setCounts] = useState({ events: 0, models: 0, years: 0, clients: 0 });
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCounts(prev => ({
          events: prev.events < 500 ? prev.events + 10 : 500,
          models: prev.models < 200 ? prev.models + 4 : 200,
          years: prev.years < 15 ? prev.years + 1 : 15,
          clients: prev.clients < 50 ? prev.clients + 1 : 50,
        }));
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  const stats = [
    { icon: Calendar, value: counts.events, suffix: '+', label: 'Events Completed' },
    { icon: Users, value: counts.models, suffix: '+', label: 'Elite Models' },
    { icon: Award, value: counts.years, suffix: '+', label: 'Years Experience' },
    { icon: Globe, value: counts.clients, suffix: '+', label: 'Global Clients' },
  ];

  return (
    <AnimatedSection id="about">
      <div ref={ref} className="min-h-screen bg-neutral-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
              ABOUT US
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-playfair text-slate-900"
            >
              A Legacy of Excellence
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
                alt="Luxury Event"
                className="w-full h-[400px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-amber-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-playfair text-slate-900">Globally Recognized Excellence</h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                className="h-px bg-amber-500"
              />
              <p className="text-gray-700 leading-relaxed">
                With over 15 years of experience in the industry, we've established ourselves as the premier choice for luxury events and model management across Dubai, Saudi Arabia, and beyond.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our portfolio includes high-profile events, fashion shows, celebrity appearances, and corporate galas.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                </motion.div>
                <div className="text-4xl font-playfair text-slate-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;