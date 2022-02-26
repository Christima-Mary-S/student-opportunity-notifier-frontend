import React from "react";

export const Login = () => {
  return (
    <div>
      <div className="register-container bg-black-light p-10 capitalize shadow-xl shadow-slate-600  rounded-md hover:scale-105 transform ease-in-out cursor-pointer">
        <h2 className="mb-2 text-center text-2xl">Login</h2>
        <div className="h-2 bg-cyan-light rounded-t-md mb-2"></div>
        <form action="" className="form-login">
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">password</label>
          <input type="password" name="passsword" id="passsword" />

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
