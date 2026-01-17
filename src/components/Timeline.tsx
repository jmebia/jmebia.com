import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const experiences = [
  {
    year: "Nov 2025 – Present",
    title: "Software Engineer",
    company: "Accenture",
    tech: ['Python', 'AI Ops'],
    description:
      "Focused on cloud operations, monitoring, automation, and supporting AI-driven systems in production.",
  },

  {
    year: "March 2025 – September 2025",
    title: "Backend Developer",
    company: "KodeTeQ Business Solutions",
    tech: ['Laravel', 'PHP', 'SQL', 'Docker', 'Linux'],
    description:
      "Sole game programmer. Implemented gameplay systems, Linux test servers, and project website.",
  },
  
  {
    year: "Nov 2022 – Feb 2025",
    title: "(Freelance) Game Programmer",
    company: "Across Lunacia",
    tech: ['Godot', 'GDScript', 'Web Development', 'Linux'],
    description:
      "Sole game programmer. Implemented gameplay systems, Linux test servers, and project website.",
  },

  {
    year: "2018 – 2022",
    title: "Full-Stack Web Developer",
    company: "Freelance / Indie",
    tech: ['Laravel', 'PHP', 'JavaScript', 'Python', 'SQL', 'Linux'],
    description:
      "Built APIs and web apps using Laravel and various other web stacks.",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24 text-zinc-100">

    <h2 className="text-4xl font-bold mb-18 text-center text-indigo-400">Work Experiences</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-[80px_1fr] gap-12">

      {/* Sticky timeline column */}
      <div className="relative">
        <div className="sticky top-32 flex justify-center">
          <div className="relative h-[70vh] w-px bg-zinc-700">
            {experiences.map((_, i) => (
              <span
                key={i}
                className="absolute -left-2 w-5 h-5 rounded-full bg-indigo-400"
                style={{ top: `${(i / (experiences.length - 1)) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable cards */}
      <div className="space-y-32">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <p className="text-sm text-zinc-400 mb-1">{exp.year}</p>
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-indigo-400 mb-3">{exp.company}</p>
            {/* Tech tags overlay */}
            <div className="bottom-0 left-0 w-full flex flex-wrap gap-2 mb-5">
              {exp.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-indigo-400 text-zinc-900 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {exp.description}
            </p>

          </motion.div>
        ))}
      </div>
    </div></section>
  );
}
