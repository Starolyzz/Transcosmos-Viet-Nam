import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Award, Handshake, Globe, Building2 } from 'lucide-react';

const stats = [
  { icon: Users, number: 70, suffix: 'k+', label: 'Staff' },
  { icon: Award, number: 55, suffix: '+', label: 'Years Experience' },
  { icon: Handshake, number: 3500, suffix: '+', label: 'Clients' },
  { icon: Globe, number: 35, suffix: '+', label: 'Service Areas' },
  { icon: Building2, number: 182, suffix: '+', label: 'Branches' },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.number;
      const duration = 1500;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, stat.number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="flex-1 min-w-[180px] bg-gradient-to-b from-[#B00010] to-[#E60012] rounded-lg p-6 py-10 text-center text-white shadow-[0_4px_16px_rgba(230,0,12,0.15)] flex flex-col items-center gap-4 transition-all overflow-hidden"
    >
      <stat.icon className="w-10 h-10 stroke-[2px]" />
      <div className="flex flex-col gap-1 mt-1 w-full overflow-hidden">
        <span className="lg:text-[32px] font-bold leading-none truncate text-[28px]">
          {count.toLocaleString()}{stat.suffix}
        </span>
        <span className="text-white/90 text-sm font-medium">{stat.label}</span>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section className="bg-white py-[100px]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
