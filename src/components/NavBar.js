import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectisAdmin } from "../selectors/selectors";
import { generalLinks, userLinks, adminLinks } from "./data";
import { LogoutButton } from "./LogoutButton";

export const NavBar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = useSelector(selectisAdmin);
  const linkOptions = isAuthenticated
    ? isAdmin
      ? adminLinks
      : userLinks
    : generalLinks;

  return (
    <div className="nav-container flex justify-between h-24 items-center m-2 p-6 bg-transparent text-gray-300 shadow-lg">
      <Link to={"/"}>
        <p className="md:text-6xl text-2xl hover:scale-125 transition ease-in">
          {" "}
          <span className="text-cyan-light">So</span>
          <span className="text-white">pN</span>{" "}
        </p>
      </Link>

      <div className="links-container md:text-2xl text-md">
        <ul className="flex">
          {linkOptions.map((link) => {
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
          {isAuthenticated ? <LogoutButton /> : null}
        </ul>
      </div>
    </div>
  );
};
