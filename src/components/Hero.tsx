import { motion, useScroll, useTransform } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const { scrollY } = useScroll();
  const arrowOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const arrowY = useTransform(scrollY, [0, 200], [0, 16]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-8 pb-16 md:pb-24 md:pt-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-zinc-50 dark:bg-zinc-900/60 backdrop-blur border border-zinc-200 dark:border-zinc-700 rounded-2xl p-8 md:p-0 flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-3xl w-full"
      >
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src="/images/croppedprofilepic.png"
            alt="JM Ebia"
            className="scale-100 w-44 h-44 md:w-100 md:h-100 object-cover rounded-xl border border-zinc-200 dark:border-zinc-600"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left md:mr-12">
          <h1 className="font-bebas text-6xl md:text-8xl tracking-wide text-zinc-900 dark:text-zinc-100 mb-2">
            J.M. Ebia
          </h1>
          <p className="font-bebas text-2xl md:text-3xl tracking-widest text-zinc-500 dark:text-zinc-400">
            Software Engineer
          </p>
          <hr className="w-70 border-zinc-400 dark:border-zinc-600 mt-2 mb-2" />
          <p className="font-bebas text-md md:text-xl tracking-wide  text-zinc-400 dark:text-zinc-500">
            <MapPinIcon className="w-5 h-5 inline"/> Metro Manila, PH
          </p>
        </div>
      </motion.div>

      {/* Scroll-reactive down arrow */}
      <motion.div
        style={{ opacity: arrowOpacity, y: arrowY }}
        className="mt-10 flex flex-col items-center text-zinc-400 dark:text-zinc-500"
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
