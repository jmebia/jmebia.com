import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

export default function Hero() {
  const name = "JM Ebia";
  const letters = name.split("");

  const { scrollY } = useScroll();

  const dissolveStart = 200;
  const dissolveEnd = 500;

  // For subtitle
  const infoOpacity = useTransform(scrollY, [100, dissolveEnd], [1, 0]);

  // Stable random values (important: don't recalc every render)
  const randomOffsets = useMemo(
    () =>
      letters.map(() => ({
        x: Math.random() * 80 - 40,
        y: Math.random() * -120 - 40, // float upward
        rotate: Math.random() * 240 - 120,
        scale: Math.random() * 0.4 + 0.8,
      })),
    []
  );

  return (
    <section id="hero" className="relative min-h-[200vh] px-6">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-bold mb-4 flex flex-wrap justify-center">
          {letters.map((char, idx) => {
            const opacity = useTransform(scrollY, [dissolveStart, dissolveEnd], [1, 0]);
            const x = useTransform(scrollY, [dissolveStart, dissolveEnd], [0, randomOffsets[idx].x]);
            const y = useTransform(scrollY, [dissolveStart, dissolveEnd], [0, randomOffsets[idx].y]);
            const rotate = useTransform(scrollY, [dissolveStart, dissolveEnd], [0, randomOffsets[idx].rotate]);
            const scale = useTransform(scrollY, [dissolveStart, dissolveEnd], [1, randomOffsets[idx].scale]);

            return (
              <motion.span
                key={idx}
                style={{ opacity, x, y, rotate, scale }}
                className="inline-block will-change-transform"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </h1>

        <motion.p
          style={{ opacity: infoOpacity }}
          className="text-zinc-400 max-w-xl text-center"
        >
          BS Computer Science • Software Engineer
        </motion.p>

      </div>
    </section>
  );
}
