import React, { useState } from "react";
import { X } from "lucide-react";

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
    <>
      <div className="flex flex-col items-end gap-1 min-w-[50px]">
        <button
          onClick={toggleMenu}
          className={`hover:bg-olive-500 hover:bg-opacity-20 p-3 rounded transition text-sage-300 ${
            menuOpen ? "opacity-0 pointer-events-none" : ""
          }`}
          aria-label="Toggle menu">
          <svg
            width="42"
            height="28"
            viewBox="0 0 42 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="3">
            <line x1="3" y1="6" x2="42" y2="6"></line>
            <line x1="15" y1="18" x2="42" y2="18"></line>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-4 right-4 z-50 space-y-2 bg-olive-500 shadow-lg px-4 pt-2 pb-4 rounded min-w-[160px] text-linen-50">
          <div className="flex justify-end mb-2">
            <button
              onClick={closeMenu}
              className="hover:bg-sage-300 hover:bg-opacity-20 p-1 rounded transition"
              aria-label="Close menu">
              <X size={20} className="text-white" />
            </button>
          </div>
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
        </div>
      )}
    </>
  );
};

export default Menu;
