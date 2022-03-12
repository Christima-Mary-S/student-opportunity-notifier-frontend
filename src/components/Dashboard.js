import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';

import { LogoutButton } from "./LogoutButton.js";

const selectIsAuthenticated = createSelector(
  state => state.auth,
  auth => auth.isUserAuthenticated
);

const selectisAdmin = createSelector(
  state => state.auth,
  auth => auth.isAdmin
);

const selectUser = createSelector(
  state => state.auth,
  auth => auth.user
);

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
