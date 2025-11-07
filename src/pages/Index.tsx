import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IdentificationBlock from "@/components/IdentificationBlock";
import StorytellingBlock from "@/components/StorytellingBlock";
import HowItWorks from "@/components/HowItWorks";
import ReasonsToAct from "@/components/ReasonsToAct";
import ExclusiveBonuses from "@/components/ExclusiveBonuses";
import InvestmentSection from "@/components/InvestmentSection";
import ScarcityCounter from "@/components/ScarcityCounter";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <IdentificationBlock />
        <StorytellingBlock />
        <HowItWorks />
        {/* TestimonialsSlider removido */}
        <ReasonsToAct />
        <ExclusiveBonuses />
        <InvestmentSection />
        <ScarcityCounter />
        <FaqSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;