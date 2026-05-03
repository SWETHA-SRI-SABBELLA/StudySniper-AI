import React, { useEffect } from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import GamificationSection from "../components/landing/GamificationSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  // Smooth scroll for anchor nav
  useEffect(() => {
    document.title = "StudySniper — AI Study OS";
  }, []);

  return (
    <div className="min-h-screen bg-sniper-bg text-sniper-text">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <GamificationSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
