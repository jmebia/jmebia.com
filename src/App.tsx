import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import CV from "./pages/CV";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
}

export default App;
