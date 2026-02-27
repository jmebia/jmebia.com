import { motion } from "framer-motion";
import { techStack } from "../../data/techStack";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-zinc-900 dark:text-white mb-6 border-b border-zinc-300 dark:border-zinc-700 pb-2">
        Skills &amp; Technologies
      </h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            style={{ borderColor: tech.color }}
            className="px-4 py-1.5 rounded-full border bg-transparent text-sm text-zinc-800 dark:text-zinc-200 whitespace-nowrap"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
