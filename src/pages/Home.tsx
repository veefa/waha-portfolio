import React from "react";
import { PiCopyrightBold } from "react-icons/pi";
import Header from "../sections/Header";
import Menu from "../sections/Menu";
import Hero from "../sections/Hero";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-linen-50 w-screen h-screen overflow-hidden text-graphite-900">
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

export default Home;
