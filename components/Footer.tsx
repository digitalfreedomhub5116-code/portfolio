import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
           <p className="font-serif text-white text-xl font-bold">E. Sterling.</p>
           <p className="text-xs mt-1 text-stone-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">ResearchGate</a>
        </div>
      </div>
    </footer>
  );
};