import { motion } from "framer-motion";
import { experiences } from "../../data/experiences";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WorkExperience() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-zinc-900 dark:text-white mb-6 border-b border-zinc-300 dark:border-zinc-700 pb-2">
        Work Experience
      </h2>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-0.5">{exp.year}</p>
            <h3 className="font-bebas text-2xl tracking-wide text-zinc-900 dark:text-zinc-100">{exp.title}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-3">{exp.company}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {exp.tech.map((t, idx) => (
                <span key={idx} className="text-xs bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
