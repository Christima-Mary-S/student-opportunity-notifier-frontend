import React from "react";

export const Register = () => {
  return (
    <div className="register-container bg-black-light p-10 capitalize shadow-xl shadow-slate-600 rounded-md  hover:scale-105 transform ease-in-out cursor-pointer">
      <h2 className="mb-2 text-center text-2xl">Register</h2>
      <div className="h-2 bg-cyan-light rounded-t-md mb-2"></div>
      <form action="" className="form-reg">
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" autoFocus />
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">password</label>
        <input type="password" name="passsword" id="passsword" />
        <label htmlFor="repassword">repeat password</label>
        <input type="password" name="repassword" id="repassword" />
        <label htmlFor="college">college</label>
        <input type="text" name="college" id="college" />
        <label htmlFor="year">year of passing</label>
        <input type="text" name="year" id="year" />
        <div className="flex items-center justify-center">
          <button type="submit" className="btn">
            register
          </button>
        </div>
      </form>
    </div>
  );
};
