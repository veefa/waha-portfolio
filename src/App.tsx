import React from "react";
import { PiCopyrightBold } from "react-icons/pi";

import "./index.css";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Menu from "./components/Menu";
/*import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import SocialLinks from "./components/SocialLinks";*/

const App: React.FC = () => {
  return (
    <>
      <div></div>
      <div className="bg-neutral-50-500 w-screen h-screen overflow-hidden text-graphite-900">
        <Menu />
        <Header />
        <Hero />

        {/* <About /> */}
        {/* <Work /> */}
        {/* <Contact /> */}
        {/* <SocialLinks /> */}
      </div>
      <footer className="bottom-25 left-6 fixed text-olive-500 rotate-90 origin-bottom-left transform">
        <p className="flex items-center gap-1">
          <PiCopyrightBold />
          2025
        </p>
      </footer>
    </>
  );
};

export default App;
