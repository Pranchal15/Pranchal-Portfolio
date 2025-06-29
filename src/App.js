import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact";
import Skills from "./pages/Skills"
import Experiences from "./pages/Experiences";

function App() {
  return (
    <div className="bg-white text-gray-900">
      {/* <ScrollProgress/> */}
      <Navbar />
      <main className="pt-24 px-4 md:px-16 lg:px-32">
        <Home />
        <About />
        <Experiences/>
        <Projects/>
        <Skills/>
        <Contact/>

      </main>
       {/* ✅ Add Footer Below */}
<footer className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 py-3 text-sm text-gray-500 bg-white border-t mt-12">
  <span>© {new Date().getFullYear()} Pranchal Agarwal. All rights reserved.</span>
  <a
    href="#home"
    className="text-blue-600 hover:underline transition"
  >
    Back to Top ↑
  </a>
</footer>


    </div>
  );
}

export default App;
