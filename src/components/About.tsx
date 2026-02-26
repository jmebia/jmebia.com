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
          I've been coding and building software solutions for{" "}
          <span className="underline font-bold">over seven years</span>,
          turning ideas into working systems that people can actually use. My
          work spans web applications, backend services, automation, and
          deployment — anything needed to take a project from concept to
          production.
        </motion.p>
      </div>
    </section>
  );
}
