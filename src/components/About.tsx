import { motion } from "framer-motion";
import ChatBubble from "./ChatBubble";

const messages = [
  {
    text: "Uhm.. What is this?",
    side: "right",
  },
  { text: "Hello there! 👋 Welcome to my personal website.", side: "left" },
  {
    text: "Who are you?",
    side: "right",
  },
  {
    text: "I’m JM Ebia, a software engineer who loves building systems.",
    side: "left",
  },
  {
    text: "I have an educational background in Computer Science and most of my professional work revolves around full-stack development, automation, and cloud platforms.",
    side: "left",
  },
  {
    text: "But outside work hours, I spend a lot of time playing tabletop and video games, doing digital art, and experimenting with gameplay ideas in engines like Godot.",
    side: "left",
  },
  {
    text: "Sounds cool. But where can I know more about you?",
    side: "right",
  },
  {
    text: "Glad you asked! Just keep scrolling down for more ;)",
    side: "left",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px", once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-center text-indigo-400 mb-20"
      >
        Hi!
      </motion.h2>

      {/* Chat */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {messages.map((m, i) => (
          <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
          >
            <ChatBubble key={i} text={m.text} side={m.side as any} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
