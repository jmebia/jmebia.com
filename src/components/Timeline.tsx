import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/experiences";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="experience" className="px-6 py-12 text-zinc-900 dark:text-zinc-100">
      <h2 className="font-bebas text-4xl md:text-5xl tracking-wide mb-8 text-center text-zinc-900 dark:text-white">
        My <u>career history</u>, so far...
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 md:gap-12 py-8">

        {/* Sticky node sidebar — desktop only */}
        <div className="hidden md:block">
          <div className="sticky top-20 h-[calc(100vh-7rem)] flex justify-center">
            <div className="relative h-full w-px bg-zinc-200 dark:bg-zinc-700">
              {experiences.map((_, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={i}
                    onClick={() => scrollToCard(i)}
                    className="group absolute -left-[10px] flex items-center"
                    style={{ top: `${(i / (experiences.length - 1)) * 50}%` }}
                  >
                    {/* Node dot */}
                    <span
                      className={`block w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "bg-zinc-900 dark:bg-white border-zinc-900 dark:border-white scale-100"
                          : "bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-500 hover:border-zinc-600 dark:hover:border-zinc-300"
                      }`}
                    />

                    {/* Hover label */}
                    <span className="pointer-events-none absolute left-8 whitespace-nowrap rounded bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs text-zinc-800 dark:text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-lg border border-zinc-200 dark:border-zinc-700">
                      {experiences[i].company}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Experience cards */}
        <div className="space-y-16 md:space-y-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-index={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">{exp.year}</p>
              <h3 className="font-bebas text-3xl tracking-wide text-zinc-900 dark:text-zinc-100">{exp.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-3">{exp.company}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
