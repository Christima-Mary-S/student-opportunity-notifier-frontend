import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';

const selectIsAuthenticated = createSelector(
  state => state.auth,
  auth => auth.isUserAuthenticated
);

export const NavBar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  
  return (
    <div className="nav-container flex justify-between h-24 items-center m-2 p-6 bg-transparent text-gray-300 shadow-lg">
      <Link to={"/"}>
        <p className="md:text-6xl text-2xl hover:scale-125 transition ease-in">
          {" "}
          <span className="text-cyan-light">Lo</span>
          <span className="text-white">go</span>{" "}
        </p>
      </Link>

      <div className="links-container md:text-2xl text-md">
        <ul className="flex">
          {links.map((link) => {
            const { id, path, text } = link;
            return (
              <li
                key={id}
                className="m-3 hover:text-cyan-light hover:underline underline-offset-2 decoration-cyan-light hover:scale-110 transition ease-in-out"
              >
                {/* <a href={path}>{text}</a> */}

                <Link to={path}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
