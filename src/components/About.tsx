import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    text: "I’m just someone who loves creating stuff.",
    side: "left",
  },
  {
    text: "Sounds cool. Can I know more?",
    side: "right",
  },
  {
    text: "Sure! Just keep scrolling ;)",
    side: "left",
  },
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        className="text-4xl md:text-6xl font-bold text-center text-sky-400 mb-20"
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

      {/* Divider */}
      <div className="w-full max-w-3xl my-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-zinc-700"></div>
        <span className="text-zinc-500 text-sm">More about me</span>
        <div className="flex-1 h-px bg-zinc-700"></div>
      </div>

      {/* Social Media Post */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-zinc-800/60 rounded-2xl border border-zinc-600/70 overflow-hidden"
      >
        {/* Post Header */}
        <div className="px-5 py-4 border-b border-zinc-700/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/profilepic.jpeg"
              alt="JM"
              onClick={() => setIsModalOpen(true)}
              className="w-16 h-16 rounded-full object-cover border-2 border-sky-400 cursor-pointer md:hover:scale-125 transition-transform duration-200"
            />
            <div>
              <div className="font-semibold text-white flex items-center gap-2">
                JM Ebia
                <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-zinc-500 text-sm">@jmebia · MeyuStudio</div>
            </div>
          </div>
          <div className="text-zinc-500 text-xs">Just now</div>
        </div>

        {/* Post Content */}
        <div className="p-5">
          <p className="text-zinc-200 leading-relaxed mb-4">
            Hey! I'm JM, a software engineer with a BS in Computer Science. My love for video games sparked my journey into tech—I dreamed of becoming a game developer, and that passion still drives everything I build today.
          </p>
          <p className="text-zinc-200 leading-relaxed mb-4">
            Through years of experience in development, I've grown to genuinely love this career. Staying curious has been my secret—there's always something new to learn, build, or explore.
          </p>
          <p className="text-zinc-200 leading-relaxed">
            Outside of work, you'll find me doing digital art, exploring creative projects, or playing games—usually strategy ones.
          </p>
        </div>

        {/* Post Footer - Engagement */}
        <div className="px-5 py-3 border-t border-zinc-700/50 flex items-center gap-6 text-zinc-500 text-sm">
          <button className="flex items-center gap-2 hover:text-sky-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>42</span>
          </button>
          <button className="flex items-center gap-2 hover:text-sky-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>7</span>
          </button>
          <button className="flex items-center gap-2 hover:text-sky-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>Share</span>
          </button>
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-sky-400 transition-colors z-50"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src="/images/profilepic.jpeg"
              alt="JM"
              onClick={(e) => e.stopPropagation()}
              className="max-w-[90vw] max-h-[80vh] md:max-w-[70vw] md:max-h-[85vh] rounded-2xl object-contain border-4 border-sky-400 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
