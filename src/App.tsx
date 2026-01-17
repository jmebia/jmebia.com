import { AnimatePresence } from "framer-motion";
import { useState } from "react";

/** components */
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TechBackground from "./components/TechBackground";
import About from "./components/About";
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  return (

    <>
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-zinc-800 text-zinc-100 relative">
          <TechBackground />
          <Sidebar />

          <Hero />
          <About />
          <Timeline />
          <Projects />
          <Contact />
          <Footer />
            
        </div>
      )}
    </>
  );
}

export default App;
