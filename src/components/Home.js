import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { NavBar } from "./NavBar";
import { Login } from "./Login";
import { Register } from "./Register";
import { Dashboard } from "./Dashboard";
import { HeroText } from "./HeroText";
import { Admin } from "./Admin";
import { ForgotPasswordApplication } from './ForgotPasswordApplication';
import { NewPasswordForm } from './NewPasswordForm';
import { AdminLogin } from './AdminLogin';
import { UpdateUserDetailsForm } from './UpdateUserDetailsForm';

export const Home = () => {
  return (
    <div className="home h-screen w-screen overflow-hidden  bg-heroimg">
      <NavBar />
      <div className="container text-gray-200 flex justify-center items-center">
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
          <Route exact path="/forgotpasswordapplication/">
            <ForgotPasswordApplication />
          </Route>
          <Route exact path="/reset/:token">
            <NewPasswordForm />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/updateUserDetails">
            <UpdateUserDetailsForm />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/adminLogin">
            <AdminLogin />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
