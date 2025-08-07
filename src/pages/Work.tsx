import React from "react";
import { Link } from "react-router-dom";

const Work: React.FC = () => {
  const projects = [
    {
      name: "taskflow",
      category: "productivity",
      tech: "React, TypeScript, Vite, Tailwind",
      link: "https://taskflow-veefa.vercel.app",
    },
    {
      name: "lazy schedule",
      category: "productivity",
      tech: "React, TypeScript, Tailwind",
      link: "https://lazy-schedule-veefa.vercel.app",
    },
    {
      name: "chore wheel",
      category: "productivity",
      tech: "React, TypeScript, Tailwind",
      link: "https://chore-wheel-veefa.vercel.app",
    },
    {
      name: "timer",
      category: "productivity",
      tech: "React, TypeScript, Tailwind",
      link: "https://timer-veefa.vercel.app",
    },
    {
      name: "habit tracker",
      category: "productivity",
      tech: "React, TypeScript, Firebase, Tailwind",
      link: "https://habit-tracker-veefa.vercel.app",
    },
    {
      name: "todo",
      category: "productivity",
      tech: "React, TypeScript, LocalStorage, Tailwind",
      link: "https://todo-veefa.vercel.app",
    },
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

        {/* Projects List */}
        <div className="top-8 right-20 fixed flex flex-col items-start space-y-6">
          {projects.map((project) => (
            <div key={project.name} className="group relative">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <h2
                  className="relative font-Italiana font-normal text-Linen-50 hover:text-olive-500 text-6xl leading-none transition-colors cursor-pointer"
                  style={{ lineHeight: 1.1 }}>
                  <span
                    className="top-2/3 left-0 -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                    style={{ width: "calc(100% - 12px)" }}
                  />
                  {project.name}
                </h2>

                {/* Technologies used */}
                <p className="opacity-70 mt-2 text-sage-300 text-sm">
                  {project.tech}
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* Spacer to maintain layout flow */}
        <div className="w-full h-140"></div>

        {/* Main content */}
        <div className="ml-16 max-w-2xl">
          <h1 className="mb-4 font-Italiana font-normal text-sage-300 text-5xl">
            work
            <div className="bg-sage-300 mt-2 w-30 h-1"></div>
          </h1>

          <p className="opacity-90 mb-12 max-w-xl font-light text-Linen-50 text-md leading-relaxed">
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
