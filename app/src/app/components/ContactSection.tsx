import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#1A1A1A] py-[120px]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 px-[50px] py-[0px]">
          {/* Left Column - 5/12 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            <div className="flex gap-2 text-gray-500 text-sm mb-6">
              <span>Home</span>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </div>

            <h2 className="text-white text-[42px] font-bold leading-tight mb-4">
              Reach out today – Let's start talking
            </h2>
            
            <p className="text-[#AFAFAF] text-base leading-relaxed mb-12">
              Discover who we are, what drives us, and how we bring our vision to life. Our passion for innovation and commitment to excellence shape everything we do.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 w-full -mt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="relative bg-[#2A2D3A] border-2 border-[#E60012]/30 rounded-lg p-4 text-white shadow-lg hover:border-[#E60012] hover:shadow-[0_8px_30px_rgba(230,0,18,0.4)] flex items-center gap-3 transition-all duration-300 h-[90px] overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E60012]/0 via-[#E60012]/0 to-[#E60012]/0 group-hover:from-[#E60012]/5 group-hover:via-[#E60012]/10 group-hover:to-[#E60012]/5 transition-all duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#E60012]/10 rounded-full -mr-8 -mt-8 group-hover:bg-[#E60012]/20 group-hover:w-32 group-hover:h-32 transition-all duration-500" />
                <div className="relative z-10 flex items-center gap-3 w-full">
                  <div className="flex-1">
                    <div className="text-[28px] font-bold leading-none text-[#E60012] mb-1 group-hover:text-[#FF1a2a] transition-colors duration-300">3500+</div>
                    <div className="text-white/70 text-[12px] font-medium uppercase tracking-wide group-hover:text-white transition-colors duration-300">Clients</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#E60012]/10 flex items-center justify-center border border-[#E60012]/30 group-hover:border-[#E60012] group-hover:bg-[#E60012]/20 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-[#E60012] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="relative bg-[#2A2D3A] border-2 border-[#E60012]/30 rounded-lg p-4 text-white shadow-lg hover:border-[#E60012] hover:shadow-[0_8px_30px_rgba(230,0,18,0.4)] flex items-center gap-3 transition-all duration-300 h-[90px] overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E60012]/0 via-[#E60012]/0 to-[#E60012]/0 group-hover:from-[#E60012]/5 group-hover:via-[#E60012]/10 group-hover:to-[#E60012]/5 transition-all duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#E60012]/10 rounded-full -mr-8 -mt-8 group-hover:bg-[#E60012]/20 group-hover:w-32 group-hover:h-32 transition-all duration-500" />
                <div className="relative z-10 flex items-center gap-3 w-full">
                  <div className="flex-1">
                    <div className="text-[28px] font-bold leading-none text-[#E60012] mb-1 group-hover:text-[#FF1a2a] transition-colors duration-300">35+</div>
                    <div className="text-white/70 text-[12px] font-medium uppercase tracking-wide group-hover:text-white transition-colors duration-300">Service Areas</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#E60012]/10 flex items-center justify-center border border-[#E60012]/30 group-hover:border-[#E60012] group-hover:bg-[#E60012]/20 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-[#E60012] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - 7/12 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h3 className="text-white text-2xl font-semibold mb-8">
              Reach Out to Us for Any Queries or Support
            </h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                className="bg-[#2A2D3A] border border-[#3A3D4A] rounded-md px-5 py-4 text-white placeholder-[#787878] focus:border-[#E60012] focus:ring-3 focus:ring-[#E60012]/10 outline-none transition-all"
              />
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="bg-[#2A2D3A] border border-[#3A3D4A] rounded-md px-5 py-4 text-white placeholder-[#787878] focus:border-[#E60012] focus:ring-3 focus:ring-[#E60012]/10 outline-none transition-all"
              />
              <input 
                type="tel" 
                placeholder="Contact No" 
                required
                className="bg-[#2A2D3A] border border-[#3A3D4A] rounded-md px-5 py-4 text-white placeholder-[#787878] focus:border-[#E60012] focus:ring-3 focus:ring-[#E60012]/10 outline-none transition-all"
              />
              <select 
                required
                className="bg-[#2A2D3A] border border-[#3A3D4A] rounded-md px-5 py-4 text-white outline-none focus:border-[#E60012] transition-all appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Select Service</option>
                <option value="consulting">Market Entry Consulting</option>
                <option value="imc">Integrated Marketing</option>
                <option value="automation">Marketing Automation</option>
                <option value="other">Other</option>
              </select>
              
              <textarea 
                placeholder="Example Text" 
                rows={5}
                className="md:col-span-2 bg-[#2A2D3A] border border-[#3A3D4A] rounded-md px-5 py-4 text-white placeholder-[#787878] focus:border-[#E60012] focus:ring-3 focus:ring-[#E60012]/10 outline-none transition-all resize-y"
              />

              <div className="md:col-span-2 flex justify-center mt-4">
                <motion.button
                  whileHover={{ backgroundColor: '#cc0010', y: -2 }}
                  className="flex items-center justify-center gap-3 bg-[#E60012] text-white px-12 py-4 rounded-full font-semibold transition-all group"
                >
                  Submit Message
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};