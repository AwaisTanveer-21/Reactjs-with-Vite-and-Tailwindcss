import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      {/* ROUTES ONLY */}
      <Routes>
        {/* Start page – all sections */}
        <Route className="bg-amber-600"
          path="/"
          element={
            <main className="pt-18 px-24 space-y-12 bg-gray-950">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
              
            </main>
          }
        />

        {/* Single pages */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
