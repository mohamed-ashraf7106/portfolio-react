import React from "react";
import "./Header.css";
function Header() {
  return (
    <div
      style={{ marginTop: "-50px", zIndex: "1000" }}
      className="bg-black/45 h-12 p-2 sticky top-0"
    >
      <ul className="flex w-fit m-auto justify-center gap-2 p-1 ">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
