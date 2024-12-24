import React from "react";
import "./projects.css";
import Project from "./Project";
function Projects() {
  let projects = [
    {
      src: "landingpage",
      link: "focal",
      title: "Landing Page",
      text: "a landing page with swipeJS and custom sliders",
      skill: "JavaScript",
    },
    {
      src: "e-commerce",
      link: "E-commerce-React-",
      title: "E-commerce website",
      text: "an e-commerce website with react with dummyjson api ,pagination and search",
      skill: "React",
    },
    {
      src: "game",
      link: "Game",
      title: "A game",
      text: "a game like flappy bird",
      skill: "JavaScript",
    },
  ];
  return (
    <div
      style={{ maxWidth: "1170px" }}
      className="projects gap-10 justify-center"
    >
      {projects.map((e, ind) => (
        <Project key={ind} props={e} />
      ))}
    </div>
  );
}

export default Projects;
