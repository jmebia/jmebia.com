import { motion } from "framer-motion";
import Skills from "../components/cv/Skills";
import WorkExperience from "../components/cv/WorkExperience";
import Education from "../components/cv/Education";

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bebas text-5xl md:text-7xl tracking-wide text-zinc-900 dark:text-white">
          J.M. Ebia
        </h1>
        <p className="font-bebas text-2xl md:text-3xl tracking-widest text-zinc-500 dark:text-zinc-400 mt-1">
          Curriculum Vitae
        </p>
      </motion.div>

      <Skills />
      <WorkExperience />
      <Education />
    </div>
  );
}
