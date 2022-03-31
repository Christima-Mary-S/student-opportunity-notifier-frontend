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
import SavedArticles from "./SavedArticles";
import { getSavedArticles } from "../actions/actionCreators.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
    <div>
      <Tabs className="flex  h-96 w-96 md:w-[1000px] md:h-[500px] bg-black-light capitalize text-gray-dark shadow-xl shadow-slate-600">
        <TabList className="mr-5 md:mr-8">
          <Tab className="cursor-pointer">Profile</Tab>
          <Tab className="cursor-pointer">Saved</Tab>
        </TabList>
        <TabPanel>
          <h1>profile component</h1>
        </TabPanel>
        <TabPanel>
          <h1>Saved Articles component</h1>
        </TabPanel>
      </Tabs>
      <SavedArticles />
    </div>
  ) : (
    <h1 className="text-center text-red-400">You are not logged in</h1>
  );
};
