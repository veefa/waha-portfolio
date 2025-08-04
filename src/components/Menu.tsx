import React from "react";

interface MenuProps {
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  return <div>{/* Menu content will go here */}</div>;
};

export default Menu;
