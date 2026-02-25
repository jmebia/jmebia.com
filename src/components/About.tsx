import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { techRows, type TechItem } from "../data/techStack";

interface CapsuleProps {
  tech: TechItem;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}

function TechCapsule({ tech, springX, springY }: CapsuleProps) {
  const x = useTransform(springX, (v) => v * tech.depth * 5);
  const y = useTransform(springY, (v) => v * tech.depth * 3);

  return (
    <motion.span
      style={{ x, y, borderColor: tech.color }}
      whileHover={{ scale: 1.12 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="px-4 py-1.5 rounded-full border bg-transparent text-sm text-zinc-800 dark:text-white cursor-default select-none whitespace-nowrap"
    >
      {tech.name}
    </motion.span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
