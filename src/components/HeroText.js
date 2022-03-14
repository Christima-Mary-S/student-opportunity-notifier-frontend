import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "react-simple-typewriter";

export const HeroText = () => {
  return (
    <div className="m-4">
      <h1 className=" text-4xl mb-2">
        Hello, <br /> Wanna read some cool articles about
      </h1>
      <span className="text-cyan-light text-6xl">
        <Typewriter
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          words={["Internships ?", "Placements ?"]}
        />
      </span>
      <a href="#articles" className="scroll-smooth">
        <button className="btn">explore now</button>
      </a>
    </div>
  );
};
