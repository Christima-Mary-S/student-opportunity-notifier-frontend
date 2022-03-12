import React from "react";
import { useSelector } from "react-redux";

import { selectIsAuthenticated, selectisAdmin, selectUser } from "../selectors/selectors";
import { LogoutButton } from "./LogoutButton.js";

export const Dashboard = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = useSelector(selectisAdmin);
  const user = useSelector(selectUser);
  console.log("Logged in user", user);

  return !isAdmin ? (
    <div>
      <h1 className="text-center text-red-400">Dashboard</h1>
    </div>
  ) : <LogoutButton />;
};
