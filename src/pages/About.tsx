import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="bg-linen-50 w-screen h-screen overflow-hidden text-neutral-800">
      <div className="mx-auto max-w-6xl h-full">
        {/* Left side navigation */}
        <div className="top-8 left-8 z-10 fixed">
          <div className="flex flex-col items-start">
            <div className="mb-7 ml-4 border-olive-500 border-l-2 h-15" />
            <Link
              to="/"
              className="font-semibold text-sage-300 hover:text-olive-500 text-lg hover:decoration-3 hover:decoration-olive-500 hover:underline whitespace-nowrap rotate-180 origin-center transition-colors transform"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
              Home
            </Link>
            <div className="mt-7 ml-4 border-olive-500 border-l-2 h-55" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex justify-between items-start pt-8 pr-8 pl-20 h-full">
          {/* Left Content Area */}
          <div className="max-w-2xl">
            <h1 className="inline box-decoration-clone bg-sage-300 px-2 font-Italiana text-graphite-700 text-6xl">
              about.
            </h1>

            <div className="space-y-6 text-neutral-700 text-sm leading-relaxed">
              <p>
                I'm WAFA. A frontend developer, web content builder, and
                productivity-focused problem solver.
              </p>

              <p>
                I've always been drawn to the intersection of structure and
                creativity — how a few lines of code can shape experiences that
                help people feel more focused than frustrated. From an early
                start with a curiosity for how things work to building tools
                that put people first, I try to create experiences that feel
                intuitive and useful.
              </p>

              <p>
                Over time, I found myself designing and developing tools I
                self-created — like Lazy Schedule, Habit Pro, Chore Wheel, and
                Custom Mate. The flow — tackling the form, then a real need. I
                say old and shaped with interaction to make everything more
                clear for myself and potential collaborators.
              </p>

              <p>
                What excites me most about frontend development is bringing
                ideas to life — turning concepts into interactive tools that
                people, online, and actually useful. It's a visual feeling to
                say something building for the sake of it. It's about solving
                problems directly and helping people use technology in the web
                more purposeful.
              </p>
            </div>

            {/* Quote Section */}
            <div className="my-8 py-4">
              <p className="text-neutral-600 text-sm italic">
                One quote that guides me by Antoine de Saint-Exupéry:
              </p>
              <blockquote className="mt-2 text-neutral-700 text-base italic">
                "Perfection is achieved not when there is nothing more to add,
                but when there is nothing left to take away."
              </blockquote>
            </div>

            {/* Experience Section */}
            <div className="mb-8">
              <h3 className="mb-4 font-semibold text-neutral-800 text-lg">
                Experience
              </h3>
              <ul className="space-y-2 text-neutral-700 text-sm">
                <li>
                  • Bachelor's Degree in Applied Mathematics and Computer
                  Science
                </li>
                <li>
                  • 2+ years of experience in Frontend Development and UI Design
                </li>
                <li>
                  • Background in building personal productivity tools and web
                  apps
                </li>
              </ul>

              <div className="mt-4">
                <p className="mb-2 font-medium text-neutral-800 text-sm">
                  During that time, I've:
                </p>
                <ul className="space-y-1 text-neutral-700 text-sm">
                  <li>
                    • Designed and built, productivity apps using React +
                    TypeScript + Tailwind
                  </li>
                  <li>
                    • Developed full-stack web components with custom API
                    architecture and Tailwind CSS
                  </li>
                  <li>
                    • Learned to manage the full cycle of a project — from idea
                    and wireframes to deployment
                  </li>
                  <li>
                    • Work on projects building educational/productivity web
                    visualization like user center design
                  </li>
                  <li>
                    • Given presentations later, data from new business building
                    using their designs
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="mb-3 font-semibold text-neutral-800 text-lg">
                Skills
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Frontend Development / UI Design / Product Thinking / Problem
                Solving / React / TypeScript / JavaScript / HTML & CSS /
                Tailwind CSS / SVG Design / Figma / Git / Responsive Design /
                Time Management Systems / Productivity App Design / Component
                Architecture / Self-Learning
              </p>
            </div>
          </div>

          {/* Right Profile Image Area */}
          <div className="flex-shrink-0 ml-12">
            <div className="bg-linen-300 border-2 border-sage-300 w-64 h-80">
              {/* Profile image placeholder */}
            </div>
          </div>
        </div>

        {/* Bottom left copyright */}
        <div className="bottom-8 left-8 fixed">
          <p className="text-olive-500 text-sm whitespace-nowrap -rotate-90 origin-bottom-left transform">
            © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
