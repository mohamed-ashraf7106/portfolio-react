import React from "react";
import "./project.css";
function Project({ props }) {
  return (
    <div className="project text-yellow-50 flex flex-col relative font-bold ">
      <img className="skillImg" src={`./${props.skill}.png`} alt="" />
      <img src={`./projects/${props.src}.png`} alt="" />
      <div className="text px-1 ">
        <h4 className="text-emerald-400 text-2xl">{props.title}</h4>
        <p>{props.text}</p>
      </div>
      <div className="flex gap-2 mt-auto">
        <a
          className="bg-green-400 block text-center  py-2 rounded w-full mt-2 transition-all hover:bg-green-600"
          href={`https://mohamed-ashraf7106.github.io/${props.link}`}
          target="_blank"
        >
          deployment
        </a>
        <a
          className="bg-rose-400 block text-center  py-2 rounded w-full mt-2 transition-all hover:bg-rose-600"
          href={`https://github.com/mohamed-ashraf7106/${props.link}`}
          target="_blank"
        >
          project github
        </a>
      </div>
    </div>
  );
}

export default Project;
