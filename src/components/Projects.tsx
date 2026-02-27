import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "../data/projects";

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-24 text-zinc-900 dark:text-zinc-100">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-bebas text-4xl md:text-5xl tracking-wide mb-12 text-center text-zinc-900 dark:text-white"
      >
        Personal Projects
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedProject(project)}
            className="relative w-72 h-64 rounded-2xl overflow-hidden cursor-pointer group border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-400 transition-colors duration-300"
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-5 z-10">
              <h3 className="font-bebas text-2xl tracking-wide text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white text-zinc-900 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="text-xs bg-zinc-700/80 text-zinc-200 px-2 py-1 rounded">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-zinc-300 transition-colors z-50"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-zinc-200 dark:border-zinc-700"
            >
              {/* Modal Image */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-zinc-900 dark:text-white mb-3">
                  {selectedProject.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-4 mb-6">
                  {selectedProject.description.map((paragraph, idx) => (
                    <p key={idx} className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Link Button */}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-lg font-medium hover:opacity-80 transition-opacity"
                >
                  {selectedProject.buttonText}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
