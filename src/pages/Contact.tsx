import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Menu from "../sections/Menu";

const Contact: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Dark Graphite Curtain Background */}
      <div className="bg-linen-50 w-full h-full absolute inset-0" />

      {/* Page Content with Curtain Slide-Up Animation */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "tween",
          duration: 1.4,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2, // Small delay to show the dark curtain first
        }}
        className="bg-graphite-700 min-h-screen w-full overflow-x-hidden text-linen-50 relative z-10">
        {/* Mobile Layout */}
        <div className="md:hidden min-h-screen relative">
          <div className="top-4 right-4 z-10 fixed">
            <Menu isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>

          <div className="pt-4 px-4">
            <Link
              to="/"
              className="inline-flex items-center text-sage-300 hover:text-olive-500 text-sm font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>

          <div className="flex flex-col justify-center items-start min-h-screen px-4 py-12">
            <div className="mb-6">
              <div className="relative inline-block">
                <div className="left-3 absolute inset-x-1 bottom-4 bg-olive-500 opacity-90 h-1/3"></div>
                <h1 className="font-Italiana text-5xl relative z-10 px-3 py-2">
                  Hello.
                </h1>
              </div>
            </div>

            <div className="mb-6 max-w-xs text-sage-300">
              <p className="text-sm leading-relaxed mb-3">
                Your ideas deserve more than a template.
              </p>
              <p className="text-xs leading-relaxed">
                Let's build a digital space that's uniquely yours — designed
                with intention, developed with care.
              </p>
            </div>

            <div className="mb-6 text-sage-300">
              <p className="text-xs mb-1">E-mail:</p>
              <a
                href="mailto:vee@mail.com"
                className="font-semibold text-sm hover:text-linen-50 transition-colors duration-200">
                vee@mail.com
              </a>
            </div>

            <div className="mb-8 text-sage-300">
              <p className="text-xs mb-2">internet:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://figma.com/@wafae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-wider underline underline-offset-2 hover:text-linen-50 transition-colors duration-200">
                  Fig
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-wider underline underline-offset-2 hover:text-linen-50 transition-colors duration-200">
                  Gla
                </a>
                <a
                  href="https://github.com/veefa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-wider underline underline-offset-2 hover:text-linen-50 transition-colors duration-200">
                  Git
                </a>
                <a
                  href="https://linkedin.com/in/wafae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-wider underline underline-offset-2 hover:text-linen-50 transition-colors duration-200">
                  Lin
                </a>
              </div>
            </div>
          </div>

          <div className="bottom-4 left-0 right-0 z-10 fixed text-center">
            <p className="text-olive-500 text-xs">© 2025</p>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden min-h-screen relative">
          <div className="top-6 right-6 z-10 fixed">
            <Menu isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>

          <div className="pt-6 px-6">
            <Link
              to="/"
              className="inline-flex items-center text-sage-300 hover:text-olive-500 text-sm font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>

          <div className="flex flex-col justify-center items-start min-h-screen px-8 py-16">
            <div className="mb-10">
              <div className="relative inline-block">
                <div className="left-5 absolute inset-x-3 bottom-6 bg-olive-500 opacity-90 h-1/3"></div>
                <h1 className="font-Italiana text-7xl relative z-10 px-5 py-3">
                  Hello.
                </h1>
              </div>
            </div>

            <div className="mb-10 max-w-md text-sage-300">
              <p className="text-base leading-relaxed mb-4">
                Your ideas deserve more than a template.
              </p>
              <p className="text-sm leading-relaxed">
                Let's build a digital space that's uniquely yours — designed
                with intention, developed with care.
              </p>
            </div>

            <div className="mb-10 text-sage-300">
              <p className="text-sm mb-2">E-mail:</p>
              <a
                href="mailto:vee@mail.com"
                className="font-semibold text-base hover:text-linen-50 transition-colors duration-200">
                vee@mail.com
              </a>
            </div>

            <div className="mb-12 text-sage-300">
              <p className="text-sm mb-3">internet:</p>
              <div className="flex gap-5">
                <a
                  href="https://figma.com/@wafae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold tracking-wider underline underline-offset-3 hover:text-linen-50 transition-colors duration-200">
                  Fig
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold tracking-wider underline underline-offset-3 hover:text-linen-50 transition-colors duration-200">
                  Gla
                </a>
                <a
                  href="https://github.com/veefa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold tracking-wider underline underline-offset-3 hover:text-linen-50 transition-colors duration-200">
                  Git
                </a>
                <a
                  href="https://linkedin.com/in/wafae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold tracking-wider underline underline-offset-3 hover:text-linen-50 transition-colors duration-200">
                  Lin
                </a>
              </div>
            </div>
          </div>

          <div className="bottom-6 left-0 right-0 z-10 fixed text-center">
            <p className="text-olive-500 text-xs">© 2025</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block mx-auto max-w-6xl min-h-screen relative">
          <div className="top-8 left-8 z-10 fixed">
            <div className="flex flex-col items-start">
              <div className="mb-7 ml-4 border-olive-500 border-l-1 h-15" />
              <Link
                to="/"
                className="font-semibold text-sage-300 hover:text-olive-500 text-sm hover:decoration-3 hover:decoration-olive-500 hover:underline whitespace-nowrap rotate-180 origin-center transition-colors transform"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}>
                Home
              </Link>
              <div className="mt-7 ml-4 border-olive-500 border-l-1 h-55" />
            </div>
          </div>

          <div className="top-8 right-8 z-10 fixed">
            <Menu isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>

          <div className="flex flex-col justify-center items-start min-h-screen px-16 ml-20">
            <div className="mb-12">
              <div className="relative inline-block">
                <div className="left-7 absolute inset-x-4 bottom-8 bg-olive-500 opacity-90 h-1/3"></div>
                <h1 className="font-Italiana text-8xl xl:text-9xl 2xl:text-10xl relative z-10 px-8 py-6">
                  Hello.
                </h1>
              </div>
            </div>

            <div className="mb-12 max-w-lg text-sage-300">
              <p className="text-lg leading-relaxed mb-4">
                Your ideas deserve more than a template.
              </p>
              <p className="text-base leading-relaxed">
                Let's build a digital space that's uniquely yours — designed
                with intention, developed with care.
              </p>
            </div>

            <div className="mb-12 text-sage-300">
              <p className="text-base mb-2">E-mail:</p>
              <a
                href="mailto:vee@mail.com"
                className="font-semibold text-lg hover:text-linen-50 transition-colors duration-200">
                vee@mail.com
              </a>
            </div>

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

          <div className="bottom-8 left-8 fixed">
            <p className="text-olive-500 text-xs whitespace-nowrap -rotate-90 origin-bottom-left transform">
              © 2025
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
