"use client";

import { skills } from "@/lib/constants";

export default function Skills() {
  return (
    <div id="skills" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="font-bold text-center text-2xl">
        Technology Proficiency
      </div>
      <div className="flex gap-4 flex-wrap items-center justify-center mt-20">
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="bg-secondary shadow-theme-inset rounded-md py-4 flex-1 sm:flex-none px-8 flex flex-col items-center cursor-default"
            >
              <img
                className={`${skill.iconInvert ? "invert" : null} w-6 h-6 mb-2`}
                src={"/assets/skills/" + skill.icon}
                alt={skill.name}
              />
              <span className="font-medium text-white/50">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
