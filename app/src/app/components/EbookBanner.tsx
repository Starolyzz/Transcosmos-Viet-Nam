import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export const EbookBanner = () => {
  return (
    <section className="relative h-[400px] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center blur-[2px] scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1555421689-d68471e189f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBsYXB0b3AlMjB3b3JraW5nJTIwZGVza3xlbnwxfHx8fDE3NzA3ODc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1920')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[700px]"
        >
          <h2 className="text-white text-[42px] font-bold mb-4 leading-tight">
            Download Our Free eBook
          </h2>
          <p className="text-white/90 text-[20px] mb-10 leading-relaxed">
            Strategic Marketing Insights for Vietnam Market Entry
          </p>
          
          <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 bg-[#E60012] text-white px-12 py-[18px] rounded-full text-lg font-semibold shadow-[0_4px_16px_rgba(230,0,18,0.4)] hover:bg-[#C00010] hover:shadow-[0_6px_20px_rgba(230,0,18,0.5)] transition-all"
          >
            Download Now
            <Download className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
