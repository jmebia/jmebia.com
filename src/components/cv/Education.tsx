import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-zinc-900 dark:text-white mb-6 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          Education
        </h2>
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-0.5">2014-2018</p>
          <h3 className="font-bebas text-2xl tracking-wide text-zinc-900 dark:text-zinc-100">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400">Adamson University</p>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-zinc-900 dark:text-white mb-6 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          Thesis
        </h2>
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-0.5">2017</p>
          <h3 className="font-bebas text-2xl tracking-wide text-zinc-900 dark:text-zinc-100 mb-2">
          Influencing Game Dynamics in A Roguelike Game Through Procedural Content Generation Using Genetic Algorithm
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm">
          This research explores the use of genetic algorithms to enhance procedural content generation in roguelike games.
          </p>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm my-6">
            <a 
            href="/assets/Influencing_Game_Dynamics_in_A_Roguelike.pdf"
            className="bg-zinc-500 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded"
            target="_blank">
              See PDF</a>
          </p>
        </div>
      </motion.section>
    </>
  );
}
