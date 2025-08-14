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
      link: "https://lazyschedule.netlify.app/",
    },
    {
      name: "chore wheel",
      category: "productivity",
      tech: "React, TypeScript, Tailwind",
      link: "https://chorewheel.netlify.app/",
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
    <div className="bg-neutral-800 w-screen min-h-screen overflow-x-hidden text-sage-300">
      <div className="mx-auto max-w-6xl min-h-screen">
        {/* Left side navigation - Desktop only */}
        <div className="top-8 left-8 z-10 fixed hidden lg:block">
          <div className="flex flex-col items-start">
            <div className="mb-7 ml-4 border-olive-500 border-l-1 h-15" />
            <Link
              to="/"
              className="font-semibold text-sage-300 hover:text-olive-500 text-sm hover:decoration-3 hover:decoration-olive-500 hover:underline whitespace-nowrap rotate-180 origin-center transition-colors transform"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
              Home
            </Link>
            <div className="mt-7 ml-4 border-olive-500 border-l-1 h-55" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pt-6 px-4">
          <Link
            to="/"
            className="inline-flex items-center text-sage-300 hover:text-olive-500 text-sm font-semibold transition-colors">
            ← Back to Home
          </Link>
        </div>

        {/* Desktop Projects List - Fixed positioning */}
        <div className="top-8 right-20 fixed flex-col items-start space-y-6 hidden lg:flex">
          {projects.map((project) => (
            <div key={project.name} className="group relative">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <h2
                  className="relative font-Italiana font-normal text-linen-50 hover:text-olive-500 text-6xl leading-none transition-colors cursor-pointer"
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

        {/* Mobile Layout */}
        <div className="lg:hidden px-6 pt-8 pb-16">
          {/* Mobile Projects List */}
          <div className="flex flex-col items-start space-y-6 mb-12 ml-4">
            {projects.map((project) => (
              <div key={project.name} className="group relative">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg hover:bg-sage-300 transition-colors">
                  <h2
                    className="relative font-Italiana font-normal text-linen-50 hover:text-olive-500 text-4xl sm:text-5xl leading-none transition-colors cursor-pointer"
                    style={{ lineHeight: 1.1 }}>
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

          {/* Mobile Main content */}
          <div className="max-w-2xl ml-4">
            <h1 className="mb-4 font-Italiana font-normal text-sage-300 text-4xl sm:text-5xl">
              work
              <div className="bg-sage-300 mt-2 w-20 sm:w-30 h-1"></div>
            </h1>

            <p className="opacity-90 mb-12 max-w-xl font-light text-linen-50 text-sm sm:text-md leading-relaxed">
              "This is a curated collection of my personal productivity tools
              and web projects, designed to help people manage their time,
              tasks, and habits more effectively. From visual scheduling systems
              like Lazy Schedule and Chore Wheel to focused tools like Task
              flow, Habit Tracker, and Timer — each project reflects my passion
              for building clean, intuitive, and purposeful user experiences.
              I'm constantly exploring better ways to combine function and
              design, and each tool represents a step in that journey."
            </p>
          </div>

          {/* Mobile Footer */}
          <div className="text-center">
            <p className="text-linen-300 text-xs">© 2025</p>
          </div>
        </div>

        {/* Desktop Spacer and Main content */}
        <div className="hidden lg:block">
          {/* Spacer to maintain layout flow */}
          <div className="w-full h-140"></div>

          {/* Desktop Main content */}
          <div className="ml-16 max-w-2xl">
            <h1 className="mb-4 font-Italiana font-normal text-sage-300 text-5xl">
              work
              <div className="bg-sage-300 mt-2 w-30 h-1"></div>
            </h1>

            <p className="opacity-90 mb-12 max-w-xl font-light text-linen-50 text-md leading-relaxed">
              "This is a curated collection of my personal productivity tools
              and web projects, designed to help people manage their time,
              tasks, and habits more effectively. From visual scheduling systems
              like Lazy Schedule and Chore Wheel to focused tools like Task
              flow, Habit Tracker, and Timer — each project reflects my passion
              for building clean, intuitive, and purposeful user experiences.
              I'm constantly exploring better ways to combine function and
              design, and each tool represents a step in that journey."
            </p>
          </div>
        </div>

        {/* Desktop copyright */}
        <div className="bottom-8 left-8 fixed hidden lg:block">
          <p className="text-linen-300 text-xs whitespace-nowrap -rotate-90 origin-bottom-left transform">
            © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
