import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  return (
    <div className="bg-zinc-800 text-zinc-100 relative">
      <Sidebar />
      <Hero />

      <Projects />
      <Timeline />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
