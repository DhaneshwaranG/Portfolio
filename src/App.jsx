import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Cursor from "./components/Cursor/Cursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
  <div className="overflow-x-hidden">
    <Preloader isLoading={loading} />

    {!loading && (
      <>
         <Cursor />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Process />
        <Projects />
        <Contact />
        <Footer />
      </>
    )}
  </div>
);
}

export default App;
