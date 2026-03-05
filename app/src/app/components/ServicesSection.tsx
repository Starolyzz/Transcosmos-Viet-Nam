import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Radar, Settings, Target, BarChart3, ToggleRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const SLIDES = [
  {
    id: 1,
    title: 'Market Entry & Growth Consulting',
    step: '1 – Tư vấn',
    desc: 'Thúc đẩy tăng trưởng tại thị trường Việt Nam thông qua nghiên cứu chuyên sâu và lộ trình thâm nhập thị trường tối ưu.',
    labels: [
      'Market & Consumer Insight in Vietnam',
      'Market-entry Strategy & Go-to-Market Planning',
      'Localized Brand & Channel Strategy',
      'Business Model & Growth Roadmap',
      'Distribution & Fulfillment Model Strategy',
      'Localization of Marketing Collateral & Assets',
      'Local Partner & Distributor Matching'
    ],
    icon: <Radar className="w-6 h-6 text-[#E5000A]" />,
    caseStudies: [
      {
        image: 'https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NzE1NjM5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Vietnam Market Analysis',
        client: 'Tech Startup'
      },
      {
        image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MTU2Mzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Go-to-Market Strategy',
        client: 'FMCG Brand'
      },
      {
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzQwNTM4OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Channel Strategy',
        client: 'Retail Chain'
      },
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBidXNpbmVzc3xlbnwxfHx8fDE3NDA1Mzg5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Growth Roadmap',
        client: 'E-commerce'
      }
    ]
  },
  {
    id: 2,
    title: 'Integrated Marketing & Communications (IMC)',
    step: '2 – IMC',
    desc: 'Hệ thống hóa chiến dịch truyền thông tích hợp, đảm bảo sự nhất quán giữa thương hiệu và hiệu quả kinh doanh.',
    labels: [
      'IMC Strategy & Planning',
      'Brand & Performance Alignment',
      'Channel Mix & Media Architecture',
      'Campaign Framework & KPI Design',
      'End-to-End Campaign Production',
      'Media Buying & Performance Monitoring'
    ],
    icon: <ToggleRight className="w-6 h-6 text-[#E5000A]" />,
    caseStudies: [
      {
        image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTUyMTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'IMC Campaign',
        client: 'Automotive Brand'
      },
      {
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbnxlbnwxfHx8fDE3NDA1Mzg5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Media Architecture',
        client: 'Consumer Electronics'
      },
      {
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGNhbXBhaWdufGVufDF8fHx8MTc0MDUzODk2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Brand Alignment',
        client: 'Fashion Retail'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBrcGklMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzQwNTM4OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'KPI Framework',
        client: 'Healthcare'
      }
    ]
  },
  {
    id: 3,
    title: 'Marketing Automation & Experience Enablement',
    step: '3 – Automation',
    desc: 'Số hóa hành trình khách hàng và tối ưu hóa trải nghiệm thông qua hệ thống MarTech và CRM tiên tiến.',
    labels: [
      'Marketing & CRM Automation Design',
      'Customer Journey & Data Integration',
      'CX & MarTech Enablement',
      'Post-Purchase & Retention Automation',
      'Performance Tracking & Optimization Framework',
      'Platform Setup & Workflow Build'
    ],
    icon: <Settings className="w-6 h-6 text-[#E5000A]" />,
    caseStudies: [
      {
        image: 'https://images.unsplash.com/photo-1764664281859-c5bd20adfbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhdXRvbWF0aW9uJTIwc29mdHdhcmUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxNTYzOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'CRM Automation',
        client: 'Financial Services'
      },
      {
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGpvdXJuZXklMjBtYXBwaW5nfGVufDF8fHx8MTc0MDUzODk2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Customer Journey',
        client: 'Hospitality'
      },
      {
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0ZWNoJTIwdG9vbHN8ZW58MXx8fHwxNzQwNTM4OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'MarTech Stack',
        client: 'SaaS Platform'
      },
      {
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMHRyYWNraW5nfGVufDF8fHx8MTc0MDUzODk2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Performance Tracking',
        client: 'Telecom'
      }
    ]
  }
];

const FloatingLabel = ({ children, delay, icon: Icon, isLeft }: { children: string; delay: number; icon: any; isLeft: boolean }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-6, 6, -6] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg ${
      isLeft ? 'left-4' : 'right-4'
    }`}
    style={{ top: `${20 + delay * 15}%` }}
  >
    <div className="w-4 h-4 text-gray-500">
      <Icon className="w-full h-full" />
    </div>
    <span className="text-black text-xs font-bold uppercase tracking-wider whitespace-nowrap">{children}</span>
  </motion.div>
);

export const ServicesSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      filter: 'blur(10px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      filter: 'blur(10px)',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 }
      }
    })
  };

  return (
        <section id="services" className="relative bg-[#0a0a0a] py-16 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E5000A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Section Title */}
        <div className="w-full py-8 flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-white font-['Inter'] text-[32px] md:text-[40px] font-bold uppercase tracking-[0.2em] leading-tight">
            Our Services
          </h2>
        </div>
        
        {/* Step Indicator */}
        <div className="relative mb-12 max-w-3xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
          <motion.div 
            className="absolute top-1/2 left-0 h-[1.5px] bg-[#E5000A] -translate-y-1/2"
            initial={{ width: '0%' }}
            animate={{ width: `${(current / (SLIDES.length - 1)) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          
          <div className="relative flex justify-between items-center">
            {SLIDES.map((slide, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}>
                <div className={`relative w-8 h-8 rounded-full border-2 transition-all duration-300 z-10 flex items-center justify-center ${
                  idx <= current ? 'bg-[#E5000A] border-[#E5000A]' : 'bg-[#1a1a1a] border-white/10'
                }`}>
                  {idx === current && (
                    <motion.div 
                      layoutId="glow-dot"
                      className="absolute inset-0 rounded-full bg-[#E5000A] blur-[8px]"
                    />
                  )}
                  <div className={`relative z-10 transition-colors duration-300 ${
                    idx <= current ? 'text-white' : 'text-white/30'
                  }`}>
                    {React.cloneElement(slide.icon, { className: 'w-4 h-4' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 mx-auto max-w-5xl items-center justify-center"
          >
            {/* LEFT PANEL - Service Info */}
            <div className="flex-1 max-w-md space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {SLIDES[current].title}
                </h3>
              </div>

              <div className="w-12 h-[2px] bg-[#E5000A]" />

              {/* Service Features - Pill Tags */}
              <div className="space-y-3">
                {SLIDES[current].labels.map((label, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#E5000A]/30 hover:bg-white/10 transition-all group cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E5000A] group-hover:shadow-[0_0_8px_rgba(229,0,10,0.6)] transition-all" />
                    <span className="text-white/80 text-sm font-medium leading-tight">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL - Horizontal Scrolling Case Studies */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent pb-4">
                  <div className="flex gap-4">
                    {SLIDES[current].caseStudies.slice(0, 2).map((study, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="w-[280px] flex-shrink-0 group cursor-pointer"
                      >
                        <div className="relative h-[360px] rounded-xl overflow-hidden bg-black border border-white/10">
                          <ImageWithFallback
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                          
                          {/* Case Study Info */}
                          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                            <div className="text-[#E5000A] text-xs font-bold uppercase tracking-wider">
                              {study.client}
                            </div>
                            <h4 className="text-white font-bold text-base leading-tight">
                              {study.title}
                            </h4>
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 border-2 border-[#E5000A] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Scroll Hint */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-16 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className="relative h-1 rounded-full transition-all duration-500 overflow-hidden"
              style={{ width: current === idx ? 16 : 4 }}
            >
              <div className={`absolute inset-0 transition-colors duration-300 ${
                current === idx ? 'bg-[#E5000A] shadow-[0_0_8px_rgba(229,0,10,0.4)]' : 'bg-white/10'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>

  );
};