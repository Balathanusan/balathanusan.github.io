"use client";

import { getFirebase } from "@/lib/firebase";
import { projects } from "@/lib/constants";

export default function Experience() {
  function view(name) {
    const fb = getFirebase();
    if (fb) {
      fb.updateDoc(fb.doc(fb.db, "Views", fb.docRef.id), {
        clicks: fb.arrayUnion(name),
      })
        .then(() => {})
        .catch(() => {});
    }
  }

  return (
    <div id="experience" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="font-bold text-center text-2xl mb-20">Experience</div>
      <div className="space-y-14">
        {projects.map((project) => {
          return (
            <div key={project.title}>
              <div className="flex flex-col sm:flex-row sm:items-baseline mb-6">
                <div className="font-semibold text-lg">{project.title}</div>
                <div className="text-white/50 font-normal sm:ml-3 text-sm">
                  {project.period ? project.period : null}
                </div>
              </div>
              <div className="grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {project.items.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="bg-secondary rounded-md flex flex-col overflow-hidden"
                    >
                      <img
                        className="w-full rounded-md shadow-lg shadow-black/50"
                        src={"/assets/projects/" + item.image}
                        alt={item.name}
                      />
                      <div className="pt-3 px-3 flex flex-col h-full">
                        <div className="flex justify-between items-start">
                          <p
                            className={`${
                              item.new || item.soon
                                ? "text-theme"
                                : "text-white/80"
                            }`}
                          >
                            {item.name}
                          </p>
                          {item.new || item.soon ? (
                            <span className="bg-theme text-black block py-0 px-2 rounded-sm text-sm font-medium">
                              {item.soon ? "Soon" : "New"}
                            </span>
                          ) : null}
                        </div>
                        <p className="text-white/50 text-sm mt-2">
                          {item.technologies}
                        </p>
                        <p className="text-white/50 text-sm mt-2 mb-3">
                          {item.description}
                        </p>
                        <a
                          onClick={() => {
                            view(item.name);
                          }}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-white/50 w-full block mt-auto py-3 text-center text-sm hover:text-white transition-colors border-t border-t-[#000000]`}
                        >
                          View
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-white/50 text-lg text-center mt-16 italic">
        "In the realm of creativity, every abandoned project is a stepping stone
        to mastery."
      </div>
    </div>
  );
}
