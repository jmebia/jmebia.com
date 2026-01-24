import { motion, useScroll, useTransform } from "framer-motion";

export default function TechBackground() {
  const { scrollY } = useScroll();

  // Parallax + expansion
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 400], [0.15, 0.35]);

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className="pointer-events-none fixed inset-0 z-0"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Lines */}
        <g stroke="rgb(234 179 8)" strokeWidth="1" opacity="1.0">
          <line x1="100" y1="200" x2="400" y2="100" />
          <line x1="400" y1="100" x2="700" y2="250" />
          <line x1="700" y1="250" x2="900" y2="150" />

          <line x1="150" y1="600" x2="350" y2="500" />
          <line x1="350" y1="500" x2="650" y2="650" />
          <line x1="650" y1="650" x2="850" y2="550" />

          <line x1="200" y1="300" x2="300" y2="600" />
          <line x1="600" y1="200" x2="650" y2="500" />
        </g>

        {/* Nodes */}
        <g fill="rgb(250 204 21)" opacity="1.0">
          <circle cx="100" cy="200" r="4" />
          <circle cx="400" cy="100" r="4" />
          <circle cx="700" cy="250" r="4" />
          <circle cx="900" cy="150" r="4" />

          <circle cx="150" cy="600" r="4" />
          <circle cx="350" cy="500" r="4" />
          <circle cx="650" cy="650" r="4" />
          <circle cx="850" cy="550" r="4" />

          <circle cx="200" cy="300" r="4" />
          <circle cx="300" cy="600" r="4" />
          <circle cx="600" cy="200" r="4" />
          <circle cx="650" cy="500" r="4" />
        </g>
      </svg>
    </motion.div>
  );
}
