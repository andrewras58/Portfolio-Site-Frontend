import React from "react";

import About from "./home-sections/About";
import Contact from "./home-sections/Contact";
import Experience from "./home-sections/Experience";
import Hero from "./home-sections/Hero";
import Skills from "./home-sections/Skills";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default Home;
