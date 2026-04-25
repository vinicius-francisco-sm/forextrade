import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LogoCarousel from "./sections/LogoCarousel";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import TestimonialSection from "./sections/TestimonialSection";
import CtaSection from "./sections/CtaSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-zinc-100 bg-black p-4">
      <NavBar />

      <HomePage />
      <LogoCarousel />
      <FeaturesSection />
      <PricingSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;
