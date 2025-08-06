import React, { useState } from "react";
import { X } from "lucide-react";
import MenuSvg from "../assets/menu.svg";

interface MenuProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen = false, onToggle }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(isOpen);

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
    if (onToggle) onToggle();
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Menu Controls - hamburger menu */}
      <div className="flex flex-col items-end gap-1 min-w-[60px]">
        {/* Menu icon (hamburger) — only shows when menu is closed */}
        {!menuOpen && (
          <button
            onClick={toggleMenu}
            className="hover:bg-olive-500 hover:bg-opacity-20 p-2 rounded transition"
            aria-label="Toggle menu">
            <img src={MenuSvg} alt="Menu" className="w-10 h-4" />
          </button>
        )}
      </div>

      {/* Fixed Overlay Menu - positioned independently without affecting page layout */}
      {menuOpen && (
        <div className="top-4 right-4 z-50 fixed space-y-2 bg-olive-500 shadow-lg px-4 pt-2 pb-4 rounded min-w-[160px] text-white">
          {/* Close button inside menu */}
          <div className="flex justify-end mb-2">
            <button
              onClick={closeMenu}
              className="hover:bg-sage-300 hover:bg-opacity-20 p-1 rounded transition"
              aria-label="Close menu">
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Resume + E-mail as specified in design */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:bg-sage-300 px-2 py-1 rounded font-medium text-lg transition"
            onClick={closeMenu}>
            Resume
          </a>
          <a
            href="mailto:wafae@example.com"
            className="block hover:bg-sage-300 px-2 py-1 rounded font-medium text-lg transition"
            onClick={closeMenu}>
            E-mail
          </a>

          {/* Optional: Navigation Links */}
          <div className="mt-2 pt-2 border-sage-300 border-t">
            {["work", "about", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="block hover:bg-sage-300 px-2 py-1 rounded text-lg capitalize transition"
                onClick={closeMenu}>
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
