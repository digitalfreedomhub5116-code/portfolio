import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Award, Mic, Users, Star } from 'lucide-react';

const books = [
  { title: "The Mindful Classroom", image: "https://picsum.photos/seed/book1/300/450" },
  { title: "Leading with Heart", image: "https://picsum.photos/seed/book2/300/450" },
  { title: "Modern Pedagogy", image: "https://picsum.photos/seed/book3/300/450" },
  { title: "Voices of Tomorrow", image: "https://picsum.photos/seed/book4/300/450" },
  { title: "Educational Ethics", image: "https://picsum.photos/seed/book5/300/450" },
];

const stats = [
  { icon: Award, label: "Excellence in Education Award", desc: "Recipient of the 2022 National Educators Trophy." },
  { icon: Mic, label: "Keynote Speaker", desc: "Spoke at 12+ National Education Conferences." },
  { icon: Users, label: "20+ Years Experience", desc: "Mentored over 5,000 students and 200 teachers." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Achievements: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Create a duplicated list for infinite scroll effect on mobile
  const displayBooks = [...books, ...books];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    
    const scroll = () => {
      // Only run auto-scroll on mobile views (< 768px) and when not paused
      if (window.innerWidth < 768 && !isPaused) {
        // If we've scrolled past the first set of items (halfway), reset to 0 to loop seamlessly
        // We use scrollWidth / 2 as the approximation for the split point
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
           scrollContainer.scrollLeft = 0;
        } else {
           scrollContainer.scrollLeft += 0.8; // Adjust speed here for smoothness
        }
      } else if (window.innerWidth >= 768) {
          // Ensure scroll is reset on desktop to maintain grid alignment
          if (scrollContainer.scrollLeft !== 0) scrollContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Books Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
             <div className="flex items-center justify-center gap-2 mb-3 text-amber-700">
               <Book size={20} />
               <span className="uppercase tracking-widest text-xs font-bold">Publications</span>
             </div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900">Author of 5+ Best-Selling Books</h2>
          </motion.div>

          <motion.div 
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex overflow-x-hidden gap-6 pb-8 -mx-6 px-6 no-scrollbar md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-8 md:pb-0 md:mx-0 md:px-0 md:overflow-visible"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {displayBooks.map((book, idx) => {
              // Hide duplicates on desktop to preserve the grid layout
              const isDuplicate = idx >= books.length;
              return (
                <motion.div
                  key={`${idx}-${book.title}`}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`min-w-[200px] w-[220px] flex-shrink-0 md:min-w-0 md:w-auto md:flex-shrink-1 group cursor-pointer perspective-1000 ${isDuplicate ? 'md:hidden' : ''}`}
                >
                  <div className="relative aspect-[2/3] overflow-hidden rounded shadow-lg bg-stone-200 mb-4 transition-shadow duration-300 group-hover:shadow-xl">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                       <p className="text-white text-sm font-serif italic translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</p>
                    </div>
                  </div>
                  <h3 className="text-center font-serif text-stone-800 text-sm md:text-base group-hover:text-amber-700 transition-colors">{book.title}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Professional Achievements */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
             <div className="flex items-center justify-center gap-2 mb-3 text-amber-700">
               <Star size={20} />
               <span className="uppercase tracking-widest text-xs font-bold">Recognitions</span>
             </div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900">Professional Milestones</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-50 text-amber-700 mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <h3 className="font-serif text-xl text-stone-900 mb-3">{stat.label}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};