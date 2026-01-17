import { motion } from "framer-motion";

interface Project {
  title: string;
  image: string;
  tech: string[];
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Riftstrider: Trial of the Mask",
    image: "/images/riftstridercover.png",
    tech: ["Godot", "GDScript", "2D Platformer"],
    description: "A dimension-shifting puzzle platformer where the player manipulate small parts of reality to overcome challenges. (Made during Godot Wild Jam #86)",
    link: "https://maiusebi.itch.io/riftstrider",
  },
  {
    title: "Lost, Signals",
    image: "/images/lostsignals.png",
    tech: ["Godot", "GDScript", "Puzzle"],
    description: "A short and cozy interactive fiction game about rediscovery, memories, and quiet moments. (Made during Pixel Game Jam 2025)",
    link: "https://maiusebi.itch.io/lost-signals",
  },
  
  // Add more projects here if needed
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 text-zinc-100">
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-indigo-400">
        Some of my own <u>projects</u>  
      </h2>

      {/* Flex container that centers children and wraps */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
            viewport={{ margin: "-100px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.5 }}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer max-w-xs w-full"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            {/* Hover info box */}
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center z-10">
              <p className="text-sm">{project.description}</p>
            </div>

            {/* Tech tags overlay */}
            <div className="absolute bottom-0 left-0 w-full flex flex-wrap gap-2 p-3 z-20">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-indigo-400 text-zinc-900 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title overlay */}
            <div className="absolute top-4 left-4 text-white font-semibold text-lg drop-shadow-lg z-20">
              {project.title}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
