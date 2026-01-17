import { motion } from "framer-motion";

interface ContactItem {
  label: string;
  value: string;
  link?: string;
}

const contactItems: ContactItem[] = [
  { label: "Email", value: "hello@jmebia.com", link: "mailto:hello@jmebia.com" },
  { label: "LinkedIn", value: "linkedin.com/in/jmebia", link: "https://linkedin.com/in/jmebia" },
  { label: "GitHub", value: "github.com/jmebia", link: "https://github.com/jmebia" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 text-zinc-100 relative"
    >
      {/* Sticky Title */}
      <h2 className="text-4xl font-bold text-indigo-400 mb-12 text-center z-10">
        Contact
      </h2>

      {/* Contact Links */}
      <motion.div
        className="max-w-xl mx-auto flex flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg text-zinc-300">
          I’m always open to chatting about new projects, collaborations, or just sharing cool ideas.
        </p>

        {contactItems.map((item, idx) => (
          <p key={idx} className="text-zinc-300">
            <strong>{item.label}:</strong>{" "}
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </p>
        ))}
      </motion.div>

      
    </section>
  );
}
