import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  LinkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "jm.ebia@email.com",
    href: "mailto:jm.ebia@email.com",
    icon: <EnvelopeIcon className="w-6 h-6" />,
  },
  {
    label: "GitHub",
    value: "github.com/jmebia",
    href: "https://github.com/jmebia",
    icon: <CodeBracketIcon className="w-6 h-6" />,
  },
  {
    label: "LinkedIn",
    value: "jmebia",
    href: "https://linkedin.com/in/jmebia",
    icon: <LinkIcon className="w-6 h-6" />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex flex-col items-center"
    >
      {/* Sticky Title */}
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center text-indigo-400">
        You can also find or contact me at the following links!
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-lg text-zinc-300">
            I’m always open to chatting about new projects, collaborations, or just sharing cool ideas.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full justify-items-center"
      >
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.03 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="
              w-full max-w-sm rounded-xl border border-zinc-700
              bg-zinc-900/60 backdrop-blur
              p-6 flex flex-col items-start space-y-3
              hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]
              transition
            "
          >
            <div className="text-indigo-400">{c.icon}</div>
            <h3 className="text-lg font-semibold">{c.label}</h3>
            <p className="text-zinc-400 text-sm break-all">{c.value}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
