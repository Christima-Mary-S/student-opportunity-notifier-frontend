import React from "react";
import { useSelector } from "react-redux";

import { selectIsAuthenticated, selectisAdmin, selectUser } from "../selectors/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { LogoutButton } from "./LogoutButton.js";
import SavedArticles from "./SavedArticles";
import { getSavedArticles } from '../actions/actionCreators.js';

export const Dashboard = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = useSelector(selectisAdmin);
  const user = useSelector(selectUser);
  console.log("Logged in user", user);

  useEffect(() => {
    dispatch(getSavedArticles(user.id));
  }, [dispatch, user]);

  return isAuthenticated? (
    !isAdmin ? (
      <div>
        <h1 className="text-center text-red-400">Dashboard</h1>
        <SavedArticles />
      </div>
    ) : <LogoutButton />
  ): <h1 className="text-center text-red-400">You are not logged in</h1>;
};
