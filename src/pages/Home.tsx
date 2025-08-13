import React from "react";
import Header from "../sections/Header";
import Menu from "../sections/Menu";
import Hero from "../sections/Hero";

const Home: React.FC = () => {
  return (
    <div className="bg-linen-50 w-screen h-screen overflow-hidden text-graphite-900 relative">
      {/* Mobile & Tablet Layout */}
      <div className="desktop:hidden w-full h-full">
        {/* Menu */}
        <div className="flex justify-end items-start px-8 pt-4 pb-2">
          <Menu />
        </div>

        {/* Header Navigation */}
        <div className="flex justify-center pb-5">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>

        {/* Mobile & Tablet Footer */}
        <div className="bottom-4 left-0 right-0 z-10 fixed text-center">
          <p className="text-olive-500 text-xs">© 2025</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden desktop:block w-full h-full">
        {/* Menu */}
        <div className="flex justify-end items-start px-9 pt-4 pb-2">
          <Menu />
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-2 h-full">
          {/* Left Column - Empty Space + Hero */}
          <div className="flex flex-col justify-center items-start pl-26">
            <Hero />
          </div>

          {/* Right Column - All Navigation */}
          <div className="flex flex-col justify-start items-start pt-12 pr-12">
            <Header />
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="bottom-8 left-8 fixed">
          <p className="text-olive-500 text-xs font-light whitespace-nowrap -rotate-90 origin-bottom-left transform">
            © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
