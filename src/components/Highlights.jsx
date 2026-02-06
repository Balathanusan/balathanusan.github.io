"use client";

import { useState } from "react";
import { highlights } from "@/lib/constants";

export default function Highlights() {
  const [animationPause, setAnimationPause] = useState(null);

  function pause(id) {
    setAnimationPause(id);
  }

  function resume(id) {
    setAnimationPause(null);
  }

  return (
    <div
      id="highlights"
      className="max-w-screen-2xl mx-auto overflow-hidden p-12 bg-secondary"
    >
      <div className="font-bold text-center text-2xl">Highlights</div>

      {highlights.map((group, index) => {
        return (
          <div
            key={"group" + index}
            onMouseEnter={() => pause(index)}
            onMouseLeave={() => resume(index)}
            className={`marquee mt-14 ${
              index % 2 == 0 ? "left-to-right" : "right-to-left"
            } ${animationPause == index ? "pause" : null}`}
          >
            {group.map((item) => {
              return (
                <div key={item.image}>
                  <img
                    className="min-w-48 max-w-48 sm:min-w-64 shadow-2xl sm:max-w-64 md:min-w-96 md:max-w-96 mx-8 my-6 rounded-md"
                    src={"/assets/highlights/" + item.image}
                    alt={item.image}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
