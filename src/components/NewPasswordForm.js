import { useState } from "react";
import validator from "validator";

export const NewPasswordForm = () => {
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        if (!validator.isLength(password, { min: 6, max: 30 })) {
          console.log("Password must be at least 6 characters at maximum 30 characters long")
        } else {
          console.log(password);
        }
    };

    return <div>
    <div className="register-container bg-black-light p-10 capitalize shadow-xl shadow-slate-600  rounded-md hover:scale-105 transform ease-in-out cursor-pointer">
      <h2 className="mb-2 text-center text-2xl">Update Password</h2>
      <div className="h-2 bg-cyan-light rounded-t-md mb-2"></div>
      <form action="" className="form-login">
        <label htmlFor="password">New password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-center">
          <button type="submit" className="btn" onClick={onSubmit}>
            Update password
          </button>
        </div>      
      </form>
    </div>
  </div>;
}