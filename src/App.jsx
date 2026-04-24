import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LogoCarousel from "./sections/LogoCarousel";

const App = () => {
  return (
    <div className="text-zinc-100 bg-black p-4">
      <NavBar />

      <div className="">
        <HomePage />
        <LogoCarousel />
      </div>
    </div>
  );
};

export default App;
