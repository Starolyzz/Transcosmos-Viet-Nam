import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero, AboutIntro } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { BrandsSection } from './components/BrandsSection';
import { ServicesSection } from './components/ServicesSection';
import { EbookBanner } from './components/EbookBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#E60012] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <AboutIntro />
        <StatsSection />
        <ServicesSection />
        <EbookBanner />
        <BrandsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;