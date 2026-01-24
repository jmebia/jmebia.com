import { useState, useEffect } from "react";
import { HomeIcon, BriefcaseIcon, FolderIcon, EnvelopeIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  { id: "hero", label: "Home", icon: <HomeIcon className="w-6 h-6" /> },
  { id: "about", label: "About", icon: <ChatBubbleBottomCenterIcon className="w-6 h-6" /> },
  { id: "projects", label: "Projects", icon: <FolderIcon className="w-6 h-6" /> },
  { id: "experience", label: "Career Timeline", icon: <BriefcaseIcon className="w-6 h-6" /> },
  { id: "contact", label: "Contact", icon: <EnvelopeIcon className="w-6 h-6" /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Track active section using scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // This controls WHEN a section becomes active
        threshold: 0.1, // 40% of section visible
      }
    );
  
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);
  

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close menu on mobile
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col fixed top-1/2 right-4 -translate-y-1/2 space-y-4 z-50">
        {sections.map((s) => {
          const isActive = active === s.id;

          return (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className={`
                group relative flex items-center
                w-10 h-10 rounded-full
                transition-all duration-300
                ${isActive
                  ? "bg-rose-400 text-white scale-110"
                  : "bg-zinc-800 text-zinc-300 hover:bg-rose-500 hover:text-white"
                }
              `}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10">
                {s.icon}
              </div>

              {/* Hover label */}
              <span
                className="
                  pointer-events-none
                  absolute right-12
                  whitespace-nowrap
                  rounded-md bg-zinc-900 px-3 py-1 text-sm
                  text-zinc-100 shadow-lg
                  opacity-0 translate-x-2
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-200
                "
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>


      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="text-zinc-100 bg-zinc-800 p-3 rounded"
        >
          ☰
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-zinc-900 shadow-lg z-40"
          >
            <div className="flex flex-col justify-center h-full p-6 space-y-6">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleClick(s.id)}
                    className={`flex items-center space-x-2 text-lg font-medium transition
                      ${isActive ? "text-rose-400" : "text-zinc-100 hover:text-rose-400"}
                    `}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
