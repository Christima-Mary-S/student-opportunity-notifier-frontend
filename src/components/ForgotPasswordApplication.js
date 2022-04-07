import { useState } from "react";
import validator from "validator";
import { sendEmailForResetPassword } from '../api/index';
import { isEmpty } from 'is-empty';

export const ForgotPasswordApplication = () => {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const clear = () => {
    setEmail("");
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validator.isEmpty(email)) {
      setError("Email field is required!");
    } else {
      if (validator.isEmail(email)) {
        console.log(email);
        await sendEmailForResetPassword(email);
      } else {
        setError("Email invalid!");
      }
      clear();
    }
  };

  return <div>
    <div className="register-container bg-black-light p-10 capitalize shadow-xl shadow-slate-600  rounded-md hover:scale-105 transform ease-in-out cursor-pointer">
      <h2 className="mb-2 text-center text-2xl">Forgot Password</h2>
      <div className="h-2 bg-cyan-light rounded-t-md mb-2"></div>
      <form action="" className="form-login">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="text-danger">{error}</span>
        <div className="flex items-center justify-center">
          <button type="submit" className="btn" onClick={onSubmit}>
            Get reset password email
          </button>
        </div>
      </form>
    </div>
  </div>;
}