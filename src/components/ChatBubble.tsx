import { motion } from "framer-motion";

type Props = {
  text: string;
  side?: "left" | "right";
};

export default function ChatBubble({ text, side = "left" }: Props) {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`
          max-w-[85%] md:max-w-[60%]
          px-5 py-3 rounded-2xl
          text-zinc-100 text-lg leading-relaxed
          ${isLeft
            ? "bg-zinc-700 rounded-bl-sm"
            : "bg-indigo-500 rounded-br-sm"}
          shadow-md
        `}
      >
        {text}
      </div>
    </motion.div>
  );
}
