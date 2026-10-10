import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroVideo from '../components/HeroVideo';
import Footer from '../components/Footer';
import HowItWorksModal from '../components/HowItWorksModal';
import MenuDrawer from '../components/MenuDrawer';
import '../styles/landing.css';

export default function Landing() {
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="landing-hero-container">
      {/* 1. Navbar (Fixed top) */}
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />

      {/* 2. Absolutely Positioned Full-Screen Video Background */}
      <HeroVideo />

      {/* 3. Footer Content (Pinned bottom over white fade-up gradient) */}
      <Footer onOpenHowItWorks={() => setIsHowItWorksOpen(true)} />

      {/* Modals & Overlays */}
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  );
}
