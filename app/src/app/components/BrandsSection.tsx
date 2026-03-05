import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight } from 'lucide-react';

const CASE_STUDIES = [
  { 
    id: 1, 
    title: 'Panasonic', 
    image: 'https://images.unsplash.com/photo-1592919347498-69564e361791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9mZXNzaW9uYWwlMjBlbGVjdHJvbmljcyUyMHRlY2glMjBsdXh1cnl8ZW58MXx8fHwxNzcxNjUzODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    height: 'h-[600px]'
  },
  { 
    id: 2, 
    title: 'Samsung', 
    image: 'https://images.unsplash.com/photo-1750081627990-b161f67c0c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW1zdW5nJTIwR2FsYXh5JTIwbW9iaWxlJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNjUzODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    height: 'h-[600px]',
    featured: true
  },
  { 
    id: 3, 
    title: 'Meji', 
    image: 'https://images.unsplash.com/photo-1669954535980-a99da8576619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZWlqaSUyMEphcGFuJTIwY29ycG9yYXRlJTIwYnJhbmRpbmclMjBmb29kfGVufDF8fHx8MTc3MTY1MzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    height: 'h-[600px]'
  },
];

const CaseCard = ({ item }: { item: typeof CASE_STUDIES[0] }) => (
  <motion.div 
    className={`relative w-full ${item.height} group overflow-hidden cursor-pointer`}
    whileHover="hover"
  >
    <ImageWithFallback 
      src={item.image} 
      alt={item.title} 
      className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-transform duration-700 group-hover:scale-105"
    />
    
    {/* Dark Overlay Base */}
    <div className="absolute inset-0 bg-black/55 transition-opacity duration-500 group-hover:opacity-70" />
    
    {/* Hover White Brightening Overlay */}
    <motion.div 
      className="absolute inset-0 bg-white/12 opacity-0 pointer-events-none"
      variants={{
        hover: { opacity: 1 }
      }}
      transition={{ duration: 0.2 }}
    />

    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="flex items-end justify-between">
        <h3 className={`text-white font-['Inter'] font-bold leading-[1.1] max-w-[280px] ${item.featured ? 'text-[40px]' : 'text-[32px]'}`}>
          {item.title}
        </h3>
        <motion.div
          variants={{
            hover: { x: 4 }
          }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="text-white w-8 h-8 stroke-[1.5px]" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export const BrandsSection = () => {
  return (
    <section className="w-full bg-[#0a0a0a] overflow-hidden">
      <div className="w-full py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-white font-['Inter'] text-[32px] md:text-[40px] font-bold uppercase tracking-[0.2em] leading-tight">
          Case Study
        </h2>
        <div className="w-16 h-1 bg-[#E60012] mt-6"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {CASE_STUDIES.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
