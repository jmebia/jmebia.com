import { motion } from "framer-motion";

export default function Projects() {
  const techStack = ["ReactJS", "TailwindCSS", "Vite"];

  return (
    <section id="projects" className="min-h-screen px-6 py-24 text-zinc-100">
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-indigo-400">
        <span className="text-blue-500">Meyu</span><span className="text-orange-500">Studio</span>
      </h2>

      {/* Single featured project - 2 column layout */}
      <motion.a
        href="https://meyustudio.com"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
        viewport={{ margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.5 }}
        className="block max-w-4xl mx-auto bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-zinc-700/50 hover:border-indigo-400/50 transition-colors duration-300"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left column - Image/Logo */}
          <div className="relative aspect-video md:aspect-auto md:min-h-[300px] bg-zinc-900 flex items-center justify-center overflow-hidden">
            <img
              src="/images/meyustudio.png"
              alt="MeyuStudio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right column - Description */}
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              MeyuStudio
            </h3>
            <p className="text-zinc-300 mb-6 leading-relaxed">
              A dedicated portfolio site showcasing all my featured projects, including games, web applications, and creative works. Visit to explore my complete collection of work and ongoing projects.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-indigo-400 text-zinc-900 px-3 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Visit link indicator */}
            <div className="mt-6 text-indigo-400 text-sm font-medium flex items-center gap-2">
              Visit Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.a>
    </section>
  );
}