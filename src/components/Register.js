import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import isEmpty from "is-empty";
import { useSelector } from "react-redux";

import { clearErrors, register } from "../actions/actionCreators";
import { selectIsAuthenticated, selectErrors } from "../selectors/selectors";
import { LogoutButton } from "./LogoutButton";
import { useHistory } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [userName, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const errors = useSelector(selectErrors);
  console.log("Errors are", errors);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => dispatch(clearErrors()), [dispatch]);

  const clear = () => {
    setName("");
    setEmail("");
    setUsername("");
    setpassword("");
    setRepPassword("");
    setCollege("");
    setYear(null);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    //console.log(email, userName, password, repPassword, college, year);
    const userData = {name: name, email: email, username: userName, password: password, repeatedPassword: repPassword};
    if (!isEmpty(college)) {
      userData.collegeName = college;
    }
    if (!isEmpty(year)) {
      userData.yearOfGraduation = year;
    }
    
    dispatch(register(userData, history));
    clear();
  }

  return !isAuthenticated? (
    <div className="register-container bg-black-light p-10 capitalize shadow-xl shadow-slate-600 rounded-md  hover:scale-105 transform ease-in-out cursor-pointer">
      <h2 className="mb-2 text-center text-2xl">Register</h2>
      <div className="h-2 bg-cyan-light rounded-t-md mb-2"></div>
      <form action="" className="form-reg">
        <label htmlFor="firstname">name</label>
        <input
          type="text"
          name="name" 
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="text-danger">{errors.name ?? errors.name}</span>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="text-danger">{errors.email ?? errors.email}</span>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username" 
          id="username"
          required
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span className="text-danger">{errors.username ?? errors.username}</span>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="passsword"
          id="passsword"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <span className="text-danger">{errors.password ?? errors.password}</span>
        <label htmlFor="repassword">repeat password</label>
        <input
          type="password"
          name="repassword"
          id="repassword"
          required
          value={repPassword}
          onChange={(e) => setRepPassword(e.target.value)}
        />
        <span className="text-danger">{errors.repeatedPassword ?? errors.repeatedPassword}</span>
        <label htmlFor="college">college</label>
        <input
          type="text"
          name="college"
          id="college"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />
        <span className="text-danger">{errors.collegeName ?? errors.collegeName}</span>
        <label htmlFor="year">year of passing</label>
        <input
          type="text"
          name="year"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <span className="text-danger">{errors.yearOfGraduation ?? errors.yearOfGraduation}</span>
        <div className="flex items-center justify-center">
          <button type="submit" className="btn" onClick={onSubmit}>
            register
          </button>
        </div>
      </form>
    </div>
  ): <LogoutButton />;
};
