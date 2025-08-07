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

        {/* Projects List - Right aligned like nav */}
        <div className="top-8 right-20 fixed flex flex-col items-end space-y-6">
          {projects.map((project, index) => (
            <div key={project.name} className="group relative">
              <h2
                className="relative font-Italiana font-normal text-Linen-50 hover:text-olive-500 text-6xl leading-none transition-colors cursor-pointer"
                style={{ lineHeight: 1.1 }}>
                <span
                  className="top-2/3 left-0 -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                  style={{ width: "calc(100% - 12px)" }}
                />
                {project.name}
              </h2>

              {/* Optional divider like before */}
              {index < projects.length - 1 && (
                <div className="bg-sage-300 opacity-20 mt-4 w-full h-px"></div>
              )}
            </div>
          ))}
        </div>

        {/* Spacer to maintain layout flow */}
        <div className="w-full h-150"></div>

        {/* Main content */}
        <div className="ml-26 max-w-2xl">
          <h1 className="mb-4 font-Italiana font-normal text-sage-300 text-3xl">
            work
          </h1>

          <p className="opacity-90 mb-12 max-w-xl font-light text-Linen-50 text-sm leading-relaxed">
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
