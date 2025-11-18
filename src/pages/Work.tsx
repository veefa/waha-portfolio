import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Stret } from "../components/Stretch";

const Work: React.FC = () => {
  const projects = [
    {
      name: "taskflow",
      category: "productivity",
      tech: "React, TypeScript, Vite, Tailwind",
      link: "https://taskflowv.netlify.app/",
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
      name: "pomodoro",
      category: "productivity",
      tech: "React, TypeScript, Tailwind",
      link: "https://pomodorove.netlify.app/timer/",
    },
    {
      name: "habit tracker",
      category: "productivity",
      tech: "React, TypeScript, Firebase, Tailwind",
      link: "https://habittrackerv.netlify.app/",
    },
    {
      name: "todo",
      category: "productivity",
      tech: "React, TypeScript, LocalStorage, Tailwind",
      link: "https://todo-veefa.netlify.app/",
    },
    {
      name: "profile",
      category: "introduction",
      tech: "React, JavaScript, Nextjs, Tailwind",
      link: "https://veefa.netlify.app/",
    },
  ];

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Dark Graphite Curtain Background */}
      <div className="bg-linen-50 w-full h-full absolute inset-0" />

      {/* Page Content with Curtain Slide-Up Animation */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "tween",
          duration: 1.4,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2, // Small delay to show the dark curtain first
        }}
        className="bg-graphite-700 w-full text-sage-300 relative z-10 min-h-screen">
        <div className="lg:max-w-6xl lg:mx-auto w-full lg:h-screen">
          {/* Mobile Navigation */}
          <div className="lg:hidden pt-6 px-4">
            <Link
              to="/"
              className="inline-flex items-center text-sage-300 hover:text-olive-500 text-sm font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex h-screen w-full">
            {/* Left side navigation */}
            <div className="fixed top-8 left-7 z-10 flex flex-col items-start">
              <div className="mb-7 ml-4 border-olive-500 border-l-1 h-15" />
              <Link
                to="/"
                className="font-semibold text-sage-300 hover:text-olive-500 text-sm hover:decoration-3 hover:decoration-olive-500 hover:underline whitespace-nowrap rotate-180 origin-center transition-colors transform"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}>
                Home
              </Link>
              <div className="mt-7 ml-4 border-olive-500 border-l-1 h-55" />
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-2 gap-x-30 w-full">
              {/* Left Column - Static Intro */}
              <div className="flex flex-col justify-start items-start pl-26 pt-20">
                <div className="max-w-2xl">
                  <h1 className="mb-4 font-Italiana font-normal text-sage-300 text-4xl">
                    work
                    <div className="bg-sage-300 mt-2 w-30 h-1"></div>
                  </h1>

                  <p className="opacity-90 mb-12 max-w-90 font-light text-linen-50 text-sm leading-relaxed">
                    "This is a curated collection of my personal productivity
                    tools and web projects, designed to help people manage their
                    time, tasks, and habits more effectively. From visual
                    scheduling systems like Lazy Schedule and Chore Wheel to
                    focused tools like Task flow, Habit Tracker, and Timer —
                    each project reflects my passion for building clean,
                    intuitive, and purposeful user experiences. I'm constantly
                    exploring better ways to combine function and design, and
                    each tool represents a step in that journey."
                  </p>
                </div>
              </div>

              {/* Right Column - Scrollable Projects */}
              <div className="flex flex-col justify-start items-start pr-12 pt-12 h-[calc(100vh-3rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-sage-400">
                <div className="flex flex-col items-start space-y-4">
                  {projects.map((project) => (
                    <div key={project.name} className="group relative">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block">
                        <Stret
                          text={project.name}
                          className="relative font-Italiana font-normal text-linen-50 hover:text-olive-500 text-8xl leading-none transition-colors cursor-pointer"
                        />
                        <span
                          className="top-2/3 left-0 -z-10 absolute bg-sage-300 opacity-70 group-hover:opacity-90 h-1/3 transition-all -translate-y-1/2 duration-200"
                          style={{ width: "calc(100% - 12px)" }}
                        />
                        <p className="opacity-70 mt-2 text-sage-300 text-sm">
                          {project.tech}
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Copyright */}
            <div className="bottom-8 left-8 fixed">
              <p className="text-linen-300 text-xs whitespace-nowrap -rotate-90 origin-bottom-left transform">
                © 2025
              </p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden h-screen flex flex-col">
            {/* Fixed Mobile Projects List */}
            <div className="flex-1 overflow-y-auto px-6 pt-8">
              <div className="flex flex-col items-start space-y-6 ml-4">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="group relative flex-shrink-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg hover:bg-sage-300 transition-colors">
                      <Stret
                        text={project.name}
                        className="relative font-Italiana font-normal text-linen-50 hover:text-olive-500 text-5xl sm:text-6xl leading-none transition-colors cursor-pointer"
                      />
                      <p className="opacity-70 mt-2 text-sage-300 text-sm">
                        {project.tech}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Mobile Main Content */}
            <div className="flex-shrink-0 px-6 pb-4">
              <div className="max-w-2xl ml-4">
                <h1 className="mb-4 font-Italiana font-normal text-sage-300 text-4xl sm:text-5xl">
                  work
                  <div className="bg-sage-300 mt-2 w-20 sm:w-30 h-1"></div>
                </h1>

                <p className="opacity-90 mb-6 max-w-xl font-light text-linen-50 text-sm sm:text-md leading-relaxed">
                  "This is a curated collection of my personal productivity
                  tools and web projects, designed to help people manage their
                  time, tasks, and habits more effectively. From visual
                  scheduling systems like Lazy Schedule and Chore Wheel to
                  focused tools like Task flow, Habit Tracker, and Timer — each
                  project reflects my passion for building clean, intuitive, and
                  purposeful user experiences. I'm constantly exploring better
                  ways to combine function and design, and each tool represents
                  a step in that journey."
                </p>
              </div>

              {/* Mobile Footer */}
              <div className="text-center">
                <p className="text-linen-300 text-xs">© 2025</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
