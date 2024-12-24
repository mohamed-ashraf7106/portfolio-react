import React from "react";
import MyComment from "./MyComment";
import "./home.css";
import astronaut from "../assets/images/2.png"
function Background() {
  return (
    <div id="home" className="background">
      <div className="wrapper flex flex-wrap justify-around mx-auto pt-44">
        <div className="text">
          <h1 className="homeText text-yellow-50">Hello, I am mohamed</h1>
        </div>
        <div className="imgAnimated flex w-fit justify-center relative">
          <img src={astronaut} alt="" />
          <MyComment/>
        </div>
      </div>
    </div>
  );
}

export default Background;
