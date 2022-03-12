import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSelector } from 'reselect';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../actions/actionCreators";
import { LogoutButton } from "./LogoutButton";

const selectIsAuthenticated = createSelector(
  state => state.auth,
  auth => auth.isUserAuthenticated
);

const selectErrors = createSelector(
  state => state.errors,
  errors => errors.errors
);

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const errors = useSelector(selectErrors);
  console.log("Errors are", errors);
 
  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const details = { username: userName, password: password };
    dispatch(login(details));
  };

  return (!isAuthenticated) ? (
    <div>
      <div className="register-container bg-black-light p-10 capitalize shadow-xl shadow-slate-600  rounded-md hover:scale-105 transform ease-in-out cursor-pointer">
        <h2 className="mb-2 text-center text-2xl">Login</h2>
        <div className="h-2 bg-cyan-light rounded-t-md mb-2"></div>
        <form action="" className="form-login">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="passsword"
            id="passsword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-center">
            <button type="submit" className="btn" onClick={onSubmit}>
              login
            </button>
          </div>
          <p className="mt-2 flex justify-center">
            New user?{" "}
            <Link
              to="./register"
              className="ml-2 text-cyan-light border-b-2 border-cyan-light"
            >
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  ) : <LogoutButton />;
};
