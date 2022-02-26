import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { NavBar } from "./NavBar";
import { Login } from "./Login";
import { Register } from "./Register";
import { Dashboard } from "./Dashboard";
import { HeroText } from "./HeroText";

export const Home = () => {
  return (
    <div className="home h-screen w-screen overflow-hidden  bg-heroimg">
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HeroText />
          </Route>
          <Route exact path="/login/">
            <Login />
          </Route>
          <Route exact path="/register/">
            <Register />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
