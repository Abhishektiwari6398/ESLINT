import { AnimatePresence, motion,useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, {  useState } from 'react';



const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const portfolioImages = {
    events: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600',
      'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600',
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600',
    ],
    models: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600',
      'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=600',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600',
    ],
  };

  return (
    <div ref={ref} id="portfolio" className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-20 sm:py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 100, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <motion.p 
            className="text-xs tracking-[0.3em] text-gray-500 font-light"
            animate={{ letterSpacing: isInView ? '0.3em' : '0.1em' }}
          >
            PORTFOLIO
          </motion.p>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight font-serif"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Our Work
          </motion.h2>
          <div className="flex items-center justify-center space-x-4">
            <motion.div 
              className="h-px bg-amber-500"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div 
              className="w-2 h-2 bg-amber-500 transform rotate-45"
              animate={{ 
                rotate: [45, 405, 45],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="h-px bg-amber-500"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Tab Navigation with enhanced animation */}
        <div className="flex justify-center mb-16 space-x-12">
          {['events', 'models'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm tracking-[0.2em] pb-3 transition-all duration-300 ${
                activeTab === tab ? 'text-slate-900' : 'text-gray-400 hover:text-gray-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.toUpperCase()}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid with dramatic entrance */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {portfolioImages[activeTab].map((img, idx) => (
              <motion.div
                key={`${activeTab}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: 0,
                  transition: {
                    delay: idx * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                exit={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative aspect-square overflow-hidden cursor-pointer rounded-lg"
                whileHover={{ 
                  scale: 1.05, 
                  zIndex: 10,
                  rotateZ: hoveredIndex === idx ? 2 : 0
                }}
              >
                <motion.img
                  src={img}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                  animate={{ scale: hoveredIndex === idx ? 1.15 : 1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredIndex === idx ? 1 : 0,
                    y: hoveredIndex === idx ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center space-y-3">
                    <motion.div 
                      className="w-12 h-12 border-2 border-white flex items-center justify-center mx-auto bg-white/10 backdrop-blur-sm rounded-full"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </motion.div>
                    <p className="text-white text-sm tracking-wider">VIEW PROJECT</p>
                  </div>
                </motion.div>
                
                {/* Animated corner accents */}
                <motion.div 
                  className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-amber-500"
                  animate={{ 
                    width: hoveredIndex === idx ? 40 : 0,
                    height: hoveredIndex === idx ? 40 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-amber-500"
                  animate={{ 
                    width: hoveredIndex === idx ? 40 : 0,
                    height: hoveredIndex === idx ? 40 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Glowing effect */}
                {hoveredIndex === idx && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-32 h-32 bg-amber-400 rounded-full blur-3xl"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ transform: 'translate(-50%, -50%)' }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button 
            className="group relative px-10 py-4 border-2 border-slate-900 text-slate-900 text-sm tracking-[0.15em] overflow-hidden rounded-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span className="relative z-10">VIEW ALL PROJECTS</motion.span>
            <motion.div 
              className="absolute inset-0 bg-slate-900"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-10 transition-opacity z-20"
            >
              VIEW ALL PROJECTS
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioSection;