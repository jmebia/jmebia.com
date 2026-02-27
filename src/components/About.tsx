import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 flex flex-col items-center text-zinc-900 dark:text-zinc-100">
      <div className="max-w-2xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-bebas text-4xl md:text-5xl tracking-wide mb-6 text-zinc-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
        >
          For over seven years, I’ve been building software that turns ideas into usable systems. 
          I hold a BS in Computer Science, work across the full stack, 
          and spend much of my free time exploring game development and interactive systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6"
        >
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View my CV
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
