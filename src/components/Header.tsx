import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = ["work", "about", "contact"] as const;
const socialLinks = [
  { label: "Fig", href: "https://figma.com/@wafae" },
  { label: "Fla", href: "#flaticon" },
  { label: "Git", href: "https://github.com/veefa" },
  { label: "Lin", href: "https://linkedin.com/in/wafae" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setMenuOpen((prev) => !prev);
  const closeMenu = (): void => setMenuOpen(false);

  return (
    <header className="relative">
      <div className="flex flex-row justify-between items-start mx-auto px-4 sm:px-6 lg:px-8 pt-8 max-w-7xl">
        {/* Social Links Vertical */}
        <div className="hidden md:flex flex-col items-start gap-2 -ml-12 pt-4 min-w-[120px]">
          <div className="mb-3 ml-1 border-l-4 border-lime-800 h-15" />

          {/* Find me online label with decorative line */}
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 font-semibold text-lime-800 text-md hover:decoration-2 hover:decoration-lime-700 hover:underline hover:underline-offset-3 tracking-wide transition-colors duration-200"
              style={{ letterSpacing: "0.05em" }}>
              {link.label}
            </a>
          ))}

          <div className="mt-3 ml-1 border-l-4 border-lime-800 h-60" />
        </div>

        {/* Main Navigation Centered */}
        <nav className="flex flex-col flex-1 justify-end items-end">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="group inline-block relative font-serif font-normal text-[9rem] text-neutral-700 md:text-[10rem] leading-none"
                  style={{ lineHeight: 1.1 }}>
                  <span
                    className="top-2/3 left-3 -z-10 absolute bg-lime-800 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                    style={{ width: "calc(100% - 12px)" }}
                  />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (Theme toggle and menu) */}
        <div className="flex flex-col items-end gap-4 min-w-[60px]">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="md:hidden mt-2 text-olive-500"
            aria-label="Toggle menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden top-20 right-4 z-50 absolute space-y-2 bg-linen-50 shadow-lg px-4 pt-2 pb-4 rounded text-graphite-900">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="block hover:bg-sage-300 px-2 py-1 rounded text-2xl transition"
              onClick={closeMenu}>
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
