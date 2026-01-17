import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TechBackground from "./components/TechBackground";
import About from "./components/About";


function App() {
  return (
    <div className="bg-zinc-800 text-zinc-100 relative">
      <TechBackground />
      <Sidebar />

      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
