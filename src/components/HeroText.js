import React from "react";
import Typewriter from "react-simple-typewriter";

export const HeroText = () => {
  return (
    <div className="m-4">
      <h1 className=" text-4xl mb-2">
        Hello, <br /> Wanna to read some cool articles about
      </h1>
      <span className="text-cyan-300 text-6xl">
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
      <button className="btn">explore now</button>
    </div>
  );
};
