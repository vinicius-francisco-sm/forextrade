import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LogoCarousel from "./sections/LogoCarousel";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";

const App = () => {
  return (
    <div className="text-zinc-100 bg-black p-4">
      <NavBar />

      <div className="">
        <HomePage />
        <LogoCarousel />
        <FeaturesSection />
        <PricingSection />
      </div>
    </div>
  );
};

export default App;
