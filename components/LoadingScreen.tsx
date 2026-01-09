import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-50"
    >
      <div className="relative text-center">
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-stone-900 tracking-tight font-bold"
          >
            E. Sterling<span className="text-amber-700">.</span>
          </motion.h1>
        </div>
        <div className="h-0.5 bg-stone-200 w-full max-w-[200px] mx-auto overflow-hidden rounded-full">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="h-full w-full bg-amber-700 origin-left"
          />
        </div>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-xs uppercase tracking-widest text-stone-500 font-medium"
        >
            Educator & Author
        </motion.p>
      </div>
    </motion.div>
  );
};