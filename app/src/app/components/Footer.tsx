import React from 'react';
import { Logo } from './Logo';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex flex-col gap-6">
            <Logo variant="white" />
            <p className="text-gray-500 max-w-[400px] text-sm leading-relaxed">
              Transcosmos Vietnam is a leading digital transformation partner providing integrated marketing and business solutions for global brands.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E60012] hover:border-[#E60012] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E60012] hover:border-[#E60012] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E60012] hover:border-[#E60012] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E60012] hover:border-[#E60012] transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-gray-600 text-[12px]">
          <p>© {currentYear} Transcosmos Vietnam Co., Ltd. All rights reserved.</p>
          <p>Powered by Transcosmos Strategy Team</p>
        </div>
      </div>
    </footer>
  );
};
