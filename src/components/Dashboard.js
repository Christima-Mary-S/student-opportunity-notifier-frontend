import React from "react";
import { useSelector } from "react-redux";

import {
  selectIsAuthenticated,
  selectisAdmin,
  selectUser,
} from "../selectors/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { LogoutButton } from "./LogoutButton.js";
import { UserEditButton } from "./UserEditButton";
import SavedArticles from "./SavedArticles";
import { getSavedArticles } from "../actions/actionCreators.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = useSelector(selectisAdmin);
  const user = useSelector(selectUser);
  console.log("Logged in user", user);

  useEffect(() => {
    dispatch(getSavedArticles(user.id));
  }, [dispatch, user]);

  return isAuthenticated ? (
    <div className="text-lg">
      <Tabs className="flex  h-96 w-96 md:w-[1000px] md:h-[500px] bg-black-light capitalize text-gray-dark shadow-xl shadow-slate-600 p-10">
        <TabList className="mr-5 p-5 md:mr-8 border-r-2 border-cyan-light">
          <Tab className="cursor-pointer border-b-2 border-cyan-light p-2 bg-black-light">
            Profile
          </Tab>
          <Tab className="cursor-pointer border-b-2 border-cyan-light p-2 bg-black-light">
            Saved
          </Tab>
        </TabList>
        <TabPanel>
          <h1>profile component</h1>
          <UserEditButton />
        </TabPanel>
        <TabPanel>
          <SavedArticles />
        </TabPanel>
      </Tabs>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <h1>You are not logged in</h1>
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
    </div>
  );
};
