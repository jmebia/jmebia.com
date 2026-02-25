import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Sign up at formspree.io and replace YOUR_FORM_ID with your form's ID
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          _replyto: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-24 flex flex-col items-center text-zinc-900 dark:text-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-zinc-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          Have a project in mind or just want to say hi? Send me a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-zinc-500 dark:text-zinc-400 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-500 dark:text-zinc-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-500 dark:text-zinc-400 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold py-3 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-400 text-sm text-center">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Try again or email me directly at{" "}
              <a href="mailto:hello@jmebia.com" className="underline">
                hello@jmebia.com
              </a>
              .
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
