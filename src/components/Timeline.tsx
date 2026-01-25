import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    year: "Nov 2025 – Present",
    title: "Software Engineer",
    company: "Accenture",
    tech: ["Python", "AI Ops"],
    description:
      "Focused on cloud operations, monitoring, automation, and supporting AI-driven systems in production.",
  },
  {
    year: "March 2025 – September 2025",
    title: "Backend Developer",
    company: "KodeTeQ Business Solutions",
    tech: ["Laravel", "PHP", "SQL", "Docker", "Linux"],
    description:
      "I built the backend and database for an Event Ticketing System using Laravel with Maya Checkout and webhooks, and helped integrate a third-party casino game provider into our games management platform.",
  },
  {
    year: "Feb 2022 – Mar 2025",
    title: "Game Developer",
    company: "Freelance Project: Across Lunacia",
    tech: ["Godot", "GDScript", "Game Design", "Web Development", "Linux"],
    description:
      "Sole game programmer. Implemented gameplay systems, Linux test servers, and project website.",
  },
  {
    year: "Jun 2021 – Feb 2022",
    title: "Software Developer",
    company: "MegaXcess IT Solutions",
    tech: ["Laravel", "PHP", "API Design"],
    description:
      "Focused on backend development using Laravel, I built and maintained web applications that supported internal operations and client-facing platforms.",
  },
  {
    year: "Dec 2020 – May 2021",
    title: "Full-Stack Web Developer",
    company: "Freelance / Indie",
    tech: ["Laravel", "PHP", "JavaScript", "Python", "SQL", "Linux"],
    description:
      "Built APIs and web apps using Laravel and multiple other web stacks for various clients.",
  },
  {
    year: "Feb 2019 – Dec 2020",
    title: "Web Developer",
    company: "Wyvern Innovations",
    tech: ["Laravel", "PHP", "JavaScript", "Python", "SQL"],
    description:
      "Worked on the development of solutions for various clients from planning and research to deployment using various web stacks. I was also responsible for writing python scripts for test automations and data analysis.",
  },
  {
    year: "Jun 2018 – Sep 2020",
    title: "Web Developer",
    company: "Omnibus Technologies",
    tech: ["Laravel", "PHP", "SQL"],
    description:
      "I developed a law firm management system using Laravel, built to streamline client records, case tracking, and billing. This platform is the core product that earned the team a spot in IdeaSpace, a competitive startup incubation program in the Philippines.",
  },
  {
    year: "Dec 2017 – Apr 2018",
    title: "Intern",
    company: "UP Information Technology Development Center (UPITDC)",
    tech: ["Customer Support", "Web Development"],
    description:
      "I assisted in web development projects using Django and Bootstrap while gaining hands-on experience in customer support and working within agile workflows.",
  },

  
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 🔥 Observe which card is active
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
        rootMargin: "-40% 0px -40% 0px", // triggers near center of screen
        threshold: 0.1,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="h-screen flex flex-col px-6 py-12 text-zinc-100">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-sky-400 flex-shrink-0">
        My <u>career history</u>, so far...
      </h2>

      {/* Scrollable container */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 md:gap-12 py-8">
          {/* Timeline column - hidden on mobile */}
          <div className="hidden md:block relative">
            <div className="sticky top-8 flex justify-center">
              <div className="relative h-[60vh] w-px bg-zinc-700">
                {experiences.map((_, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <span
                      key={i}
                      className={`absolute -left-[6px] w-3 h-3 rounded-full transition-all duration-300
                        ${isActive ? "bg-sky-400 scale-150" : "bg-zinc-500"}
                      `}
                      style={{ top: `${(i / (experiences.length - 1)) * 100}%` }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                data-index={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="max-w-xl"
              >
                <p className="text-sm text-zinc-400 mb-1">{exp.year}</p>
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-sky-400 mb-3">{exp.company}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-sky-400 text-zinc-900 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
