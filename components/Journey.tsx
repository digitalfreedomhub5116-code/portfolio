import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: '2023',
    title: 'Appointed School Principal',
    description: 'Took the helm at St. Jude’s Academy, leading a faculty of 50+ and overseeing the curriculum for 800 students.',
  },
  {
    year: '2019',
    title: 'Published "The Mindful Classroom"',
    description: 'Released my fifth book, focusing on integrating mindfulness practices into daily secondary education routines.',
  },
  {
    year: '2015',
    title: 'Doctorate in Education',
    description: 'Completed Ph.D. at Cambridge, specializing in Educational Leadership and Policy.',
  },
  {
    year: '2008',
    title: 'Senior Literature Teacher',
    description: 'Spent over a decade teaching English Literature, fostering a love for classics in young minds.',
  },
  {
    year: '2003',
    title: 'Started Teaching Career',
    description: 'Began as a junior teacher in London, discovering a lifelong passion for student development.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  // Add spring physics to the scroll progress for a smoother, fluid fill effect
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
            My Journey
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-amber-700 mx-auto opacity-50"></motion.div>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto pb-12">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 transform md:-translate-x-1/2">
            {/* Scroll-linked Filling Line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-amber-700 origin-top"
            />
          </div>

          <motion.div 
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-center md:justify-between ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0 text-left md:text-right group">
                   <div className={`${index % 2 === 0 ? 'md:text-left md:pr-12' : 'md:text-right md:pr-12'}`}>
                    <span className="inline-block px-3 py-1 bg-stone-100 text-amber-800 text-xs font-bold tracking-widest rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-2xl text-stone-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                   </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 z-10">
                   <div className="w-4 h-4 bg-white border-4 border-stone-200 rounded-full shadow-sm">
                     <motion.div 
                       initial={{ scale: 0 }}
                       whileInView={{ scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.4, delay: 0.2 }}
                       className="w-full h-full bg-amber-700 rounded-full"
                     />
                   </div>
                </div>

                {/* Empty Side for balance */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};