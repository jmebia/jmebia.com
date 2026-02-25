import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-8 pb-16 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-zinc-50 dark:bg-zinc-900/60 backdrop-blur border border-zinc-200 dark:border-zinc-700 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-3xl w-full"
      >
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src="/images/profilepic.jpeg"
            alt="JM Ebia"
            className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-xl border border-zinc-200 dark:border-zinc-600"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
            J.M. Ebia
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-medium">
            Software Engineer
          </p>
        </div>
      </motion.div>
    </section>
  );
}
