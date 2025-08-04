import React from "react";
import MenuSvg from "../assets/menu.svg";

interface MenuProps {
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  return (
    <div className="">
      {/* Menu button - top right */}
      <button
        onClick={onClose}
        className="hover:bg-sage-300 hover:bg-opacity-20 p-2 rounded transition"
        aria-label="Toggle menu">
        <img src={MenuSvg} alt="Menu" className="w-10 h-4" />
      </button>
    </div>
  );
};

export default Menu;
