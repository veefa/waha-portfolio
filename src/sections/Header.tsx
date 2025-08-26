import React from "react";
import { Link } from "react-router-dom";
import { Stret } from "../components/Stretch";

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
      {/* Mobile & Tablet Navigation */}
      <div className="desktop:hidden flex flex-col items-center">
        {/* Social Links for Mobile/Tablet */}
        <div className="flex flex-row items-center gap-4 mb-6">
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

        {/* Navigation */}
        <nav className="flex flex-col items-center">
          <ul className="flex flex-col items-center space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                {link === "work" || link === "about" || link === "contact" ? (
                  <Link
                    to={`/${link}`}
                    className="group inline-block relative font-Italiana font-normal text-[6.5rem] text-graphite-700 leading-none"
                    style={{ lineHeight: 1.1 }}>
                    <span
                      className="top-2/3 left- -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                      style={{ width: "calc(110% - 12px)" }}
                    />
                    {link}
                  </Link>
                ) : (
                  <a
                    href={`#${link}`}
                    className="group inline-block relative font-Italiana font-normal text-[3.5rem] text-graphite-700 leading-none"
                    style={{ lineHeight: 1.1 }}>
                    <span
                      className="top-2/3 left-1 -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                      style={{ width: "calc(105% - 12px)" }}
                    />
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Layout (desktop and above) */}
      <div className="hidden desktop:block">
        {/* Fixed Social Links */}
        <div className="top-8 left-4 sm:left-8 fixed z-20">
          <div className="flex flex-col items-start gap-2">
            {/* Top border line */}
            <div className="mb-3 ml-1 border-olive-500 border-l-1 h-15" />

            {/* Social Links */}
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 font-semibold text-sm text-olive-500 hover:decoration-2 hover:decoration-sage-300 hover:underline hover:underline-offset-3 tracking-wide transition-colors duration-200"
                style={{ letterSpacing: "0.05em" }}>
                {link.label}
              </a>
            ))}

            {/* Bottom border line */}
            <div className="mt-3 ml-1 border-olive-500 border-l-1 h-60" />
          </div>
        </div>

        {/* Navigation Stack - All items vertically */}
        <nav className="flex flex-col">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <Link to={`/${link}`} className="group inline-block relative">
                  <Stret
                    text={link}
                    className="font-Italiana font-normal text-[12rem] text-graphite-700 leading-none"
                  />
                  <span
                    className="top-2/3 left-0 -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                    style={{ width: "calc(100% + 8px)" }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
