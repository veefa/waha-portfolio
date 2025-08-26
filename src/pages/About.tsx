import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";

const About: React.FC = () => {
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
        className="bg-graphite-700 min-h-screen w-full overflow-x-hidden text-neutral-800 relative z-10">
        <div className="mx-auto max-w-6xl min-h-screen px-4 sm:px-6 lg:px-8">
          {/* Vertical navigation sidebar with decorative lines */}
          <div className="top-8 left-4 sm:left-8 fixed z-20">
            <div className="flex flex-col items-start">
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
          </div>

          {/* Profile image - Mobile/tablet centered at top */}
          <div className="flex justify-center pt-20 pb-8 lg:hidden">
            <div className=" rounded-sm w-48 h-60 sm:w-56 sm:h-70 overflow-hidden opacity-65 shadow-xl shadow-sage-300/20">
              <img
                src={profileImage}
                alt="Veefa's profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main content area with responsive layout */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start pt-8 lg:pt-20 pr-4 sm:pr-8 pl-16 sm:pl-20 pb-8">
            {/* Content section */}
            <div className="max-w-2xl w-full lg:w-auto">
              {/* Page title with decorative background highlight */}
              <div className="text-center mb-8 font-Italiana">
                <h1 className="inline-block z-1 relative font-Italiana text-linen-50 text-5xl sm:text-6xl lg:text-7xl cursor-pointer">
                  <span
                    className="top-3/5 left-1 -z-10 absolute bg-olive-500 group-hover:opacity-90 h-1/2 transition-all -translate-y-1/2 duration-200"
                    style={{ width: "calc(100% - 8px)" }}
                  />
                  about.
                </h1>

                <h1 className=" pt-4   text-sage-300 text-lg">
                  I'm VEEFA. A frontend developer, web content builder, and
                  productivity-focused problem solver.
                </h1>
              </div>
              {/* Bio */}
              <div className="max-h-180 overflow-y-auto pr-2 w-xl">
                {/* Bio introduction paragraphs */}
                <div className="space-y-4  text-sage-300 text-sm leading-relaxed">
                  <p>
                    I'm VEEFA. A frontend developer, web content builder, and
                    productivity-focused problem solver.
                  </p>

                  <p>
                    I’ve always been drawn to where structure meets creativity .
                    What began as a curiosity for how things work has grown into
                    building tools.
                  </p>

                  <p>
                    Along the way, I started creating tools I wished existed —
                    like Lazy Schedule, TaskFlow, Chore Wheel, and custom Habit
                    Trackers. Each one grew from a real need, built with care to
                    make productivity more visual, intentional, and personal.
                  </p>

                  <p>
                    What excites me most about frontend development is bringing
                    ideas to life. It’s about solving real problems, not just
                    adding features, and helping people use tech with more
                    purpose.
                  </p>
                </div>

                {/* Inspirational quote section */}
                <div className="my-5 py-2">
                  <p className="text-sage-300 text-sm font-extralight italic">
                    One quote that guides me by Maya Angelou:
                  </p>
                  <blockquote className="mt-2 text-sage-300  font-Italiana font-bold">
                    “Do the best you can until you know better. Then when you
                    know better, do better.”
                  </blockquote>
                </div>

                {/* Professional experience and background */}
                <div className="mb-8">
                  <h3 className="mb-4 font-semibold text-sage-300 text-md">
                    Experience
                  </h3>
                  <ul className="text-sage-300 text-sm leading-relaxed">
                    <li>
                      • Bachelor's Degree in Applied Mathematics and Computer
                      Science
                    </li>
                    <li>
                      • 2+ years of experience in Frontend Development and UI
                      Design
                    </li>
                    <li>
                      • Background in building personal productivity tools and
                      web apps
                    </li>
                  </ul>

                  <div className="mt-3">
                    <p className="mb-4 font-semibold text-sage-300 text-md">
                      During time, I've:
                    </p>
                    <ul className="text-sage-300 text-sm leading-relaxed">
                      <li>
                        • Designed and built, productivity apps using React +
                        TypeScript + Tailwind
                      </li>
                      <li>
                        • Developed full-stack web components with custom API
                        architecture and Tailwind CSS
                      </li>
                      <li>
                        • Learned to manage the full cycle of a project — from
                        idea and wireframes to deployment
                      </li>
                      <li>
                        • Work on projects building educational/productivity web
                        visualization like user center design
                      </li>
                      <li>
                        • Given presentations later, data from new business
                        building using their designs
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Technical skills and competencies */}
                <div>
                  <h3 className="mb-4 font-semibold text-sage-300 text-md">
                    Skills
                  </h3>
                  <p className="text-sage-300 text-sm leading-relaxed">
                    Frontend Development / UI Design / Product Thinking /
                    Problem Solving / React / TypeScript / JavaScript / HTML &
                    CSS / Tailwind CSS / SVG Design / Figma / Git / Responsive
                    Design / Time Management Systems / Productivity App Design /
                    Component Architecture / Self-Learning
                  </p>
                </div>
              </div>
            </div>

            {/* Profile image - Desktop right side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.0 },
                scale: { duration: 0.8, delay: 1.0 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              className="hidden lg:flex flex-shrink-0 lg:ml-12">
              <div className="rounded-sm w-64 h-80 overflow-hidden opacity-65 shadow-xl shadow-sage-300/20">
                <img
                  src={profileImage}
                  alt="Veefa's profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Fixed copyright footer */}
          <div className="bottom-8 left-4 sm:left-8 fixed">
            <p className="text-olive-500 text-xs whitespace-nowrap -rotate-90 origin-bottom-left transform">
              © 2025
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
