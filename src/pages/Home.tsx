import React from "react";
import { PiCopyrightBold } from "react-icons/pi";
import Header from "../sections/Header";
import Menu from "../sections/Menu";
import Hero from "../sections/Hero";

const socialLinks = [
  { label: "Fig", href: "https://figma.com/@wafae" },
  { label: "Fla", href: "#flaticon" },
  { label: "Git", href: "https://github.com/veefa" },
  { label: "Lin", href: "https://linkedin.com/in/wafae" },
];

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-linen-50 min-h-screen w-full overflow-x-hidden text-graphite-900">
        {/* Mobile Layout */}
        <div className="2xl:hidden">
          {/* Social Links and Menu */}
          <div className="flex justify-between items-start px-9 pt-9 pb-2">
            <div className="flex flex-row items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-olive-500 hover:decoration-2 hover:decoration-sage-300 hover:underline hover:underline-offset-3 tracking-wide transition-colors duration-200"
                  style={{ letterSpacing: "0.05em" }}>
                  {link.label}
                </a>
              ))}
            </div>
            <Menu />
          </div>

          {/* Header Navigation */}
          <div className="flex justify-center pb-4">
            <Header />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden 2xl:block">
          <div className="flex justify-between items-start px-9 pt-9 pb-2">
            <div></div>
            <Menu />
          </div>
          <Header />
        </div>

        {/* Hero Section - Responsive */}
        <div className="px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>

        {/* <About /> */}
        {/* <Work /> */}
        {/* <Contact /> */}
        {/* <SocialLinks /> */}
      </div>

      {/* Responsive Footer - Vertical */}
      <footer className="bottom-4 sm:bottom-6 lg:bottom-25 left-4 sm:left-6 fixed text-olive-500 -rotate-90 origin-bottom-left transform">
        <p className="flex items-center gap-1 text-xs sm:text-sm">
          <PiCopyrightBold />
          2025
        </p>
      </footer>
    </>
  );
};

export default Home;
