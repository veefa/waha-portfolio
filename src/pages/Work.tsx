import React from "react";
import { Link } from "react-router-dom";

const Work: React.FC = () => {
  const projects = [
    { name: "taskflow", category: "productivity" },
    { name: "lazy schedule", category: "productivity" },
    { name: "chore wheel", category: "productivity" },
    { name: "timer", category: "productivity" },
    { name: "habit tracker", category: "productivity" },
    { name: "todo", category: "productivity" },
  ];

  return (
    <div className="bg-neutral-800 w-screen h-screen overflow-hidden text-sage-300">
      <div className="mx-auto max-w-6xl h-full">
        {/* Left side navigation */}
        <div className="top-8 left-8 z-10 fixed">
          <div className="flex flex-col items-start">
            <div className="mb-7 ml-4 border-olive-500 border-l-2 h-15" />
            <Link
              to="/"
              className="text-sage-300 hover:text-olive-500 whitespace-nowrap rotate-180 origin-center transition-colors transform"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
              Home
            </Link>
            <div className="mt-7 ml-4 border-olive-500 border-l-2 h-55" />
          </div>
        </div>

        {/* Project Grid */}
        <div className="top- right-8 fixed max-w-md">
          <div className="gap-1 grid grid-cols-1">
            {projects.map((project, index) => (
              <div key={project.name} className="group">
                <h2 className="font-Italiana font-normal text-sage-300 hover:text-olive-500 text-5xl md:text-8xl leading-none transition-colors cursor-pointer">
                  {project.name}
                </h2>
                {index < projects.length - 1 && (
                  <div className="bg-sage-300 opacity-20 mt-4 h-px"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Spacer to maintain layout flow */}
        <div className="w-full h-150"></div>

        {/* Main content */}
        <div className="ml-26 max-w-2xl">
          <h1 className="mb-4 font-Italiana font-normal text-sage-300 text-3xl">
            work
          </h1>

          <p className="opacity-70 mb-12 max-w-xl font-light text-neutral-50 text-sm leading-relaxed">
            "This is a curated collection of my personal productivity tools and
            web projects, designed to help people manage their time, tasks, and
            habits more effectively. From visual scheduling systems like Lazy
            Schedule and Chore Wheel to focused tools like Task flow, Habit
            Tracker, and Timer — each project reflects my passion for building
            clean, intuitive, and purposeful user experiences. I'm constantly
            exploring better ways to combine function and design, and each tool
            represents a step in that journey."
          </p>
        </div>

        {/* Bottom left copyright */}
        <div className="bottom-8 left-8 fixed">
          <p className="text-sage-300 text-sm whitespace-nowrap -rotate-90 origin-bottom-left transform">
            © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
