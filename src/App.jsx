import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
function App() {
  useEffect(() => {
    document.title = "<Mohamed Ashraf/>";
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Section myID="skills" bg="bg-slate-900" title="Skills">
        <Skills />
      </Section>
      <Section myID="projects" bg="bg-stone-900" title="Projects">
        <Projects />
      </Section>
      <div style={{fontSize:"clamp(25px,6vw,90px)"}} className="text-yellow-50 flex gap-8 py-28 flex-col items-center bg-stone-900 text-4xl font-bold ">
        <p >this portfolio is made with</p>
        <img className="w-28 rotate" src="./React.png" alt="" />
      </div>
      <Section myID="contact" bg="bg-slate-900" title="Contact">
        <Contact />
      </Section>
    </>
  );
}

export default App;
