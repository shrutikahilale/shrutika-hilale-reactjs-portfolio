import "../styles.css";
// import { useState } from "react";
import About from "./About";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="main-content">
        <About />
        <Contact />
        <Timeline />
        <Projects />
      </div>
      <footer>2024 - Shrutika Hilale</footer>
    </>
  );
};

export default Home;
