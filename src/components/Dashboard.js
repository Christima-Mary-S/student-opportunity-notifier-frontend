import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';

const selectIsAuthenticated = createSelector(
  state => state.auth,
  auth => auth.isUserAuthenticated
);

const selectUser = createSelector(
    state => state.auth,
    auth => auth.user
);

export const Dashboard = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      <h1 className="text-center text-red-400">Dashboard</h1>
    </div>
  );
};
