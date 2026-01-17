import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500); // how long loader stays

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-zinc-800 flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
    >
      <motion.div
        className="relative w-28 h-28 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 1.2 }}
        style={{
            background:
              "conic-gradient(from 0deg, #ffffff, #e5e7eb, #9ca3af, #ffffff)",
            padding: "4px",
          }}
      >
        <div className="w-full h-full rounded-full bg-zinc-800" />
      </motion.div>
    </motion.div>
  );
}
