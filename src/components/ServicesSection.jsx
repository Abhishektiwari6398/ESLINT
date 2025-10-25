import React from 'react';
import { motion,  useInView } from 'framer-motion';
import {  ArrowRight, Star, Calendar, Users, } from 'lucide-react';
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
const ServicesSection = () => {
  const services = [
    {
      title: 'Model Management',
      description: 'Representing elite models and influencers for fashion shows, campaigns, and brand collaborations worldwide.',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800',
      icon: Users,
    },
    {
      title: 'Luxury Events',
      description: 'Producing unforgettable high-end events, galas, and fashion shows in prestigious locations.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      icon: Calendar,
    },
    {
      title: 'Celebrity Booking',
      description: 'Connecting brands with A-list celebrities and influencers for endorsements and collaborations.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      icon: Star,
    },
  ];

  return (
    <AnimatedSection id="services">
      <div className="min-h-screen bg-white py-20 px-4">
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
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] text-gray-500 font-light"
            >
              SERVICES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-playfair text-slate-900"
            >
              What We Offer
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center space-x-4"
            >
              <div className="h-px bg-amber-500 w-16" />
              <div className="w-2 h-2 bg-amber-500 rotate-45" />
              <div className="h-px bg-amber-500 w-16" />
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"
                  />
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="absolute top-6 right-6 w-14 h-14 bg-white/90 flex items-center justify-center"
                  >
                    <service.icon className="w-7 h-7 text-slate-900" />
                  </motion.div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-playfair text-slate-900">{service.title}</h3>
                  <motion.div
                    initial={{ width: 48 }}
                    whileHover={{ width: 80 }}
                    className="h-px bg-amber-500"
                  />
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-2 text-sm tracking-wider text-slate-900 pt-2 group/btn"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
export default ServicesSection;