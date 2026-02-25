import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 flex flex-col items-center text-zinc-900 dark:text-zinc-100">
      <div className="max-w-2xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4"
        >
          I'm a software engineer with over 6 years of experience building web
          applications, backend systems, and games. I've worked across a wide
          range of stacks — from PHP/Laravel APIs and Python automation to Godot
          game development and cloud operations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
        >
          I care about writing clean, maintainable code and building things that
          actually work well in production. Currently at Accenture, where I'm
          focused on AI-driven cloud systems and automation.
        </motion.p>
      </div>
    </section>
  );
}
