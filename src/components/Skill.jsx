import React from "react";
import "./skill.css"
function Skill({ skill }) {
  return (
    <div className="w-1/4 flex flex-col items-center skill">
      <div className="imgWrapper">
        <img src={`./${skill}.png`} alt="" />
      </div>
      <div className="text">
        <h3 className="text-white">{skill}</h3>
      </div>
    </div>
  );
}

export default Skill;
