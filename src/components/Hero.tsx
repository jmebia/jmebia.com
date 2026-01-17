import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const name = "JM Ebia";
  const letters = name.split("");

  const { scrollY } = useScroll();

  const zoomStart = 0;
  const zoomEnd = 300;

  // Scale while “holding”
  const scale = useTransform(scrollY, [zoomStart, zoomEnd], [1, 2]);

  // Dissolve
  const dissolveStart = 200;
  const dissolveEnd = 500;
  const opacity = useTransform(scrollY, [dissolveStart, dissolveEnd], [1, 0]);
  const opacity2 = useTransform(scrollY, [dissolveStart / 2, dissolveEnd], [1, 0]);
  const y = useTransform(scrollY, [dissolveStart, dissolveEnd], [0, -60]);

  const randomOffsets = letters.map(() => ({
    x: Math.random() * 60 - 30,
    rotate: Math.random() * 60 - 30,
    scale: Math.random() * 0.5 + 0.5,
  }));

  return (
    // Tall section for scroll space
    <section id="hero" className="relative min-h-[200vh] px-6">
      {/* Pinned Hero at top */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-bold mb-4 flex flex-wrap justify-center">
          {letters.map((char, idx) => (
            <motion.span
              key={idx}
              style={{
                scale: scrollY.get() < dissolveStart ? scale : randomOffsets[idx].scale,
                opacity,
                x: scrollY.get() < dissolveStart ? 0 : randomOffsets[idx].x,
                y: scrollY.get() < dissolveStart ? 0 : y,
                rotate: scrollY.get() < dissolveStart ? 0 : randomOffsets[idx].rotate,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          style={{ opacity: opacity2 }}
          className="text-zinc-400 max-w-xl text-center"
        >
          Full-Stack • Dev Ops • Indie Game Dev
        </motion.p>
      </div>
    </section>
  );
}
