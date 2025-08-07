import React from "react";
import { Link } from "react-router-dom";

const navLinks = ["work", "about", "contact"] as const;
const socialLinks = [
  { label: "Fig", href: "https://figma.com/@wafae" },
  { label: "Fla", href: "#flaticon" },
  { label: "Git", href: "https://github.com/veefa" },
  { label: "Lin", href: "https://linkedin.com/in/wafae" },
];

const Header: React.FC = () => {
  return (
    <header className="relative z-1">
      {/* Mobile Navigation - 30% smaller, centered */}
      <div className="2xl:hidden flex justify-center">
        <nav className="flex flex-col items-center">
          <ul className="flex flex-col items-center space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                {link === "work" || link === "about" ? (
                  <Link
                    to={`/${link}`}
                    className="group inline-block relative font-Italiana font-normal text-[5.6rem] text-graphite-700 leading-none"
                    style={{ lineHeight: 1.1 }}>
                    <span
                      className="top-2/3 left-3 -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                      style={{ width: "calc(100% - 12px)" }}
                    />
                    {link}
                  </Link>
                ) : (
                  <a
                    href={`#${link}`}
                    className="group inline-block relative font-Italiana font-normal text-[5.6rem] text-graphite-700 leading-none"
                    style={{ lineHeight: 1.1 }}>
                    <span
                      className="top-2/3 left-3 -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                      style={{ width: "calc(100% - 12px)" }}
                    />
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Layout */}
      <div className="hidden 2xl:flex flex-row justify-between items-start mx-auto px-4 sm:px-6 lg:px-8 pt-8 max-w-7xl">
        {/* Social Links */}
        <div className="flex flex-col items-start gap-2 -ml-30 pt-4 min-w-[120px]">
          {/* Top border line */}
          <div className="mb-3 ml-1 border-olive-500 border-l-4 h-15" />

          {/* Social Links */}
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 font-bold text-md text-olive-500 hover:decoration-2 hover:decoration-lime-600 hover:underline hover:underline-offset-3 tracking-wide transition-colors duration-200"
              style={{ letterSpacing: "0.05em" }}>
              {link.label}
            </a>
          ))}

          {/* Bottom border line */}
          <div className="mt-3 ml-1 border-olive-500 border-l-4 h-60" />
        </div>

        {/* Main Navigation  */}
        <nav className="flex flex-col justify-end items-end mt-20 min-w-fit">
          <ul className="text-left">
            {navLinks.map((link) => (
              <li key={link}>
                {link === "work" || link === "about" ? (
                  <Link
                    to={`/${link}`}
                    className="mylink group inline-block relative font-Italiana font-normal text-[8rem] text-graphite-700 md:text-[8rem] leading-none"
                    style={{ lineHeight: 1.1 }}>
                    <span
                      className="top-2/3 left-3 -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                      style={{ width: "calc(100% - 12px)" }}
                    />
                    {link}
                  </Link>
                ) : (
                  <a
                    href={`#${link}`}
                    className="group inline-block relative font-Italiana font-normal text-[8rem] text-graphite-700 md:text-[8rem] leading-none"
                    style={{ lineHeight: 1.1 }}>
                    <span
                      className="top-2/3 left-3 -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                      style={{ width: "calc(100% - 12px)" }}
                    />
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
