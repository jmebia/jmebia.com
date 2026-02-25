import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 min-h-screen transition-colors duration-300">
          <Header />
          <main className="pt-16">
            <Hero />
            <About />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
