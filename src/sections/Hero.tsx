import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-row items-start w-full">
      <div className="mx-auto max-w-fit text-center lg:text-left">
        {/* Main Name */}
        <Link to="/about">
          <h1 className="relative mb-4 pb-1 border-olive-500 border-b-2 font-Italiana font-light text-olive-500 sm:text-lg text-base lg:text-xl tracking-wider inline-block cursor-pointer hover:text-olive-600 transition-colors">
            WAFAE HAMDAOUI
          </h1>
        </Link>

        {/* Subtitle */}
        <div className="mb-3 font-light text-olive-500 text-sm sm:text-sm max-w-fit">
          Frontend Developer / React & Typescript Enthusiast /
        </div>
        <div className="mb-6 font-light text-olive-500 text-xs sm:text-sm max-w-fit">
          Productivity App Creator
        </div>

        {/* Description */}
        <div className="text-olive-500 font-light text-xs sm:text-sm leading-relaxed max-w-fit">
          <p>Currently focused on building intuitive web apps that help</p>
          <p>people manage time and boost focus.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
