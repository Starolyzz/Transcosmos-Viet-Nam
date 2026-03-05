import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1589394857527-07c9c14fc87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwc2FpZ29uJTIwaGFub2klMjBjaXR5JTIwYWVyaWFsJTIwZHVzayUyMG5pZ2h0fGVufDF8fHx8MTc3MDc4NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1920')` 
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white text-5xl md:text-7xl lg:text-[72px] font-bold tracking-tight mb-6"
        >
          Strategy First. Impact Always.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-white/90 text-xl md:text-2xl font-medium mb-8"
        >
          We are Transcosmos Vietnam
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-white text-[#E60012] font-bold text-base uppercase tracking-wider rounded-full hover:bg-[#E60012] hover:text-white hover:border-[#E60012] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#E60012]/50 border-2 border-white"
          >
            Our Services
          </a>
          <a
            href="#ebook"
            className="px-8 py-4 bg-white text-[#E60012] font-bold text-base uppercase tracking-wider rounded-full hover:bg-[#E60012] hover:text-white hover:border-[#E60012] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#E60012]/50 border-2 border-white"
          >
            Ebook
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export const AboutIntro = () => {
  return (
    <div className="bg-white pt-[80px] pb-[20px] text-center px-[0px] relative pr-[0px] pl-[0px]">
      <div className="container mx-auto px-6 max-w-[1200px] flex flex-col items-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          
        >
          <span className="text-[rgb(196,27,27)] text-sm font-semibold uppercase tracking-[2px] mb-8 inline-block">About Us</span>
        </motion.div>

        {/* Heading with Gradient */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-bold leading-[1.1] max-w-[1000px] bg-gradient-to-r from-[#E60012] to-black bg-clip-text text-transparent inline-block mb-20 text-[48px]"
        >
          An end-to-end marketing architect and growth partner, helping organizations turn strategy into measurable impact in Vietnam
        </motion.h2>

        {/* Thick Red Separator Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-5/12 h-[4px] bg-[#E60012] mx-auto"
        />
      </div>
    </div>
  );
};