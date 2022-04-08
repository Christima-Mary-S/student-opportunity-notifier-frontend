import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { login, clearErrors } from "../actions/actionCreators";
import { selectIsAuthenticated, selectErrors, selectSavedArticles, selectUser } from "../selectors/selectors";
import { LogoutButton } from "./LogoutButton";
import { SET_ADMIN } from "../actions/actionTypes";

export const AdminLogin = () => {
  const [password, setPassword] = useState("");

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const errors = useSelector(selectErrors);
  console.log("Errors are", errors);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => dispatch(clearErrors()), [dispatch]);

  const clear = () => { 
    setPassword("");
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const details = { username: "admin", password: password };
    dispatch(login(details, history));
    clear();
  };

  return !isAuthenticated ? (
    <div>
      <div className="register-container bg-black-light p-10 capitalize shadow-xl shadow-slate-600  rounded-md hover:scale-105 transform ease-in-out cursor-pointer">
        <h2 className="mb-2 text-center text-2xl">Administrator Login</h2>
        <div className="h-2 bg-cyan-light rounded-t-md mb-2"></div>
        <form action="" className="form-login">
          <span className="text-danger">{errors.username ?? errors.username}</span>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="passsword"
            id="passsword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-danger">{errors.password ?? errors.password}</span>
          <div className="flex items-center justify-center">
            <button type="submit" className="btn" onClick={onSubmit}>
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <LogoutButton />
  );
};
