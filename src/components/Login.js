import React, { useState } from "react";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
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
            <button type="submit" className="btn">
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
