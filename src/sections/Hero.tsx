import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="flex flex-row items-sta w-full min-h-screen"
    >
      <div
        className="left left, mr-auto ml-50 max-w-2xl text-left"
      >
        {/* Main Name */}
        <h1
          className="relative mb-7 pb-1 border-olive-500 border-b-4 font-Italiana font-light text-olive-500 sm:text-1xl text-2xl lg:text-5xl tracking-wider"
        >
          WAFAE HAMDAOUI
        </h1>

        {/* Subtitle */}
        <div className="mb-4 font-light text-sage-300 text-lg sm:text-xl">
          Frontend Developer / React & Typescript Enthusiast /
        </div>
        <div className="mb-8 font-light text-sage-300 text-lg sm:text-xl">
          Productivity App Creator
        </div>

        {/* Description */}
        <div className="text-sage-300 text-base sm:text-lg leading-relaxed">
          <p>Currently focused on building intuitive web apps that help</p>
          <p>people manage time and boost focus.</p>
        </div>
      </div>  
    </div>
  );
};

export default Hero;