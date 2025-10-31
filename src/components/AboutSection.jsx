import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {  Calendar, Users, Award, Globe } from 'lucide-react';

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
    { icon: Calendar, value: counts.events, suffix: '+', label: 'Events Completed', color: 'from-blue-500 to-purple-500' },
    { icon: Users, value: counts.models, suffix: '+', label: 'Elite Models', color: 'from-pink-500 to-rose-500' },
    { icon: Award, value: counts.years, suffix: '+', label: 'Years Experience', color: 'from-amber-500 to-orange-500' },
    { icon: Globe, value: counts.clients, suffix: '+', label: 'Global Clients', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <AnimatedSection id="about">
      <div ref={ref} className=" bg-gradient-to-b from-neutral-50 to-white py-12 md:py-16 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
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
              <motion.span
                animate={{ color: ['#6b7280', '#f59e0b', '#6b7280'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ABOUT US
              </motion.span>
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif text-slate-900"
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
                whileHover={{ scale: 1.05, rotate: 2 }}
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
                alt="Luxury Event"
                className="w-full h-[400px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-amber-500"
                animate={{ 
                  borderColor: ['#f59e0b', '#fbbf24', '#f59e0b']
                }}
                // transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-serif text-slate-900">Globally Recognized Excellence</h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-amber-500 to-amber-600"
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
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-lg blur-xl group-hover:opacity-20 transition-opacity"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${stat.color.split(' ')[0].replace('from-', '#')}, ${stat.color.split(' ')[1].replace('to-', '#')})` 
                  }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`relative z-10 w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div 
                  className="text-4xl font-serif text-slate-900 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
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