import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const yBackground = useTransform(scrollY, [0, 500], [0, 200]);

  // Premium easing curve (Ease Out Quart/Quint blend)
  const transition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
          className="flex-1 order-2 md:order-1 text-center md:text-left"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-amber-700 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Educator & Author
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-stone-900 mb-6"
          >
            Dr. Eleanor <br /> Sterling
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 font-light"
          >
            Dedicated to shaping the future of education through compassionate leadership and compelling storytelling.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.5 }}
          >
            <a 
              href="#journey" 
              className="inline-block px-8 py-3 border border-stone-900 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-all duration-300 rounded-sm"
            >
              Explore My Journey
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          style={{ y }}
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 order-1 md:order-2 w-full max-w-md md:max-w-full"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-tr-[5rem] rounded-bl-[5rem] shadow-2xl">
            <img 
              src="https://picsum.photos/seed/eleanor1/800/1000" 
              alt="Dr. Eleanor Sterling" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none mix-blend-overlay"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decorative Elements */}
      
      {/* Bottom Right Blob */}
      <motion.div 
        style={{ y: yBackground }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0], // Subtle rotation
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -bottom-12 -right-12 w-64 h-64 md:-bottom-24 md:-right-24 md:w-96 md:h-96 bg-stone-200 rounded-full blur-3xl -z-10"
      ></motion.div>

      {/* Top Left Blob (Added for responsiveness/balance) */}
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -45, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-10 -left-10 w-48 h-48 md:-top-12 md:-left-12 md:w-80 md:h-80 bg-amber-50 rounded-full blur-3xl -z-10"
      ></motion.div>
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent -z-10"></div>
    </div>
  );
};