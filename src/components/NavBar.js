import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "./data";

export const NavBar = () => {
  return (
    <div className="nav-container flex justify-between h-24 items-center m-2 p-6 bg-transparent text-gray-300 shadow-lg">
      <Router>
        <Link to={"/"}>
          <p className="text-6xl hover:scale-75">
            {" "}
            <span className="text-cyan-light">Lo</span>
            <span className="text-white">go</span>{" "}
          </p>
        </Link>
      </Router>

      <div className="links-container text-2xl">
        <ul className="flex">
          {links.map((link) => {
            const { id, path, text } = link;
            return (
              <li
                key={id}
                className="m-3 hover:text-cyan-dark hover:underline underline-offset-2 decoration-cyan-dark transition ease-in-out"
              >
                {/* <a href={path}>{text}</a> */}
                <Router>
                  <Link to={path}>{text}</Link>
                </Router>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
