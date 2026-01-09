import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <motion.div 
            className="md:sticky md:top-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span variants={itemVariants} className="text-amber-700 font-bold tracking-widest uppercase text-xs mb-4 block">Get in Touch</motion.span>
            <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 leading-tight">
              Let's Discuss <br /> Education & <span className="italic text-stone-500">Innovation</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-stone-500 mb-8 leading-relaxed">
              Whether you are interested in a speaking engagement, consulting, or simply want to say hello, I am always open to meaningful conversations.
            </motion.p>
            <motion.div variants={itemVariants} className="flex items-center gap-3 text-stone-800 font-medium">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-amber-700">
                <Mail size={18} />
              </div>
              <a href="mailto:eleanor.sterling@example.com" className="hover:text-amber-700 transition-colors">
                eleanor.sterling@example.com
              </a>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            className="bg-stone-50 p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-white border border-stone-200 px-4 py-3 rounded-md text-stone-800 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all placeholder-stone-300"
                  placeholder="John Doe"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-white border border-stone-200 px-4 py-3 rounded-md text-stone-800 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all placeholder-stone-300"
                  placeholder="john@company.com"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-white border border-stone-200 px-4 py-3 rounded-md text-stone-800 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all placeholder-stone-300 resize-none"
                  placeholder="How can we collaborate?"
                ></textarea>
              </motion.div>
              <motion.button 
                variants={itemVariants}
                type="submit"
                className="group w-full bg-stone-900 text-white px-6 py-4 rounded-md font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};