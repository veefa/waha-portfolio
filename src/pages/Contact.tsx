import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../sections/Menu";

const Contact: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-neutral-800 w-screen min-h-screen overflow-x-hidden text-linen-50">
      <div className="mx-auto max-w-6xl min-h-screen relative">
        {/* Left side navigation - Desktop only */}
        <div className="top-8 left-8 z-10 fixed hidden lg:block">
          <div className="flex flex-col items-start">
            <div className="mb-7 ml-4 border-olive-500 border-l-2 h-15" />
            <Link
              to="/"
              className="font-semibold text-sage-300 hover:text-olive-500 text-lg hover:decoration-3 hover:decoration-olive-500 hover:underline whitespace-nowrap rotate-180 origin-center transition-colors transform"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
              Home
            </Link>
            <div className="mt-7 ml-4 border-olive-500 border-l-2 h-55" />
          </div>
        </div>

        {/* Menu button - Top right */}
        <div className="top-9 right-12 z-10 fixed">
          <Menu isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>

        {/* Main content */}
        <div className="flex flex-col justify-center items-start min-h-screen px-8 lg:px-16 lg:ml-20">
          {/* Hello heading with background */}
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="left-7 absolute inset-x-4 bottom-8 bg-olive-500 opacity-90 h-1/3"></div>
              <h1 className="font-Italiana text-9xl lg:text-8xl xl:text-9xl relative z-10 px-6 py-4 lg:px-8 lg:py-6">
                Hello.
              </h1>
            </div>
          </div>

          {/* Description text */}
          <div className="mb-12 max-w-lg text-sage-300">
            <p className="text-base lg:text-lg leading-relaxed mb-4">
              Your ideas deserve more than a template.
            </p>
            <p className="text-light lg:text-md leading-relaxed">
              Let's build a digital space that's uniquely yours — designed with
              intention, developed with care.
            </p>
          </div>

          {/* Contact email */}
          <div className="mb-12 text-sage-300">
            <p className="text-base mb-2">E-mail:</p>
            <a
              href="mailto:vee@mail.com"
              className="font-semibold text-lg hover:text-sage-300 transition-colors duration-200">
              vee@mail.com
            </a>
          </div>

          {/* Social links */}
          <div className="mb-16 text-sage-300">
            <p className="text-base mb-4">internet:</p>
            <div className="flex gap-6">
              <a
                href="https://figma.com/@wafae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold tracking-wider underline underline-offset-3 hover:text-linen-50 transition-colors duration-200">
                Fig
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold tracking-wider underline underline-offset-3 hover:text-linen-50 transition-colors duration-200">
                Gla
              </a>
              <a
                href="https://github.com/veefa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold tracking-wider underline underline-offset-3 hover:text-linen-50 transition-colors duration-200">
                Git
              </a>
              <a
                href="https://linkedin.com/in/wafae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold tracking-wider underline underline-offset-3 hover:text-linen-50 transition-colors duration-200">
                Lin
              </a>
            </div>
          </div>
        </div>

        {/* Desktop copyright */}
        <div className="bottom-8 left-8 fixed hidden lg:block">
          <p className="text-olive-500 text-sm whitespace-nowrap -rotate-90 origin-bottom-left transform">
            © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
