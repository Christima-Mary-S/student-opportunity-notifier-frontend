import React from "react";
import { useSelector } from "react-redux";

import {
  selectIsAuthenticated,
  selectisAdmin,
} from "../selectors/selectors";

import { LogoutButton } from "./LogoutButton.js";
import { Link } from "react-router-dom";
import { UserDashboard } from "./UserDashboard";

export const Dashboard = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = useSelector(selectisAdmin);

  return isAuthenticated ? (
    isAdmin ? <div className="flex flex-col justify-center items-center">
      <h1>Please logout as admin</h1>
      <LogoutButton />
    </div> : <UserDashboard />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <h1>You are not logged in</h1>
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
    </div>
  );
};
