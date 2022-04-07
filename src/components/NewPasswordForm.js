import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import validator from "validator";
import { updateNewPassword } from "../api";
import { isEmpty } from 'is-empty';

export const NewPasswordForm = () => {
  const history = useHistory()
  const [password, setPassword] = useState("");
  const { token } = useParams()
  console.log(token)

  const [error, setError] = useState("");

  const clear = () => {
    setPassword("");
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validator.isEmpty(password)) { 
      setError("Password field cannot be empty!");
    } else {
      if (!validator.isLength(password, { min: 6, max: 30 })) {
        setError("Password must be at least 6 characters at maximum 30 characters long");
      } else {
        console.log(password);
        await updateNewPassword(password, token);
      }
    }
    clear();
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
          placeholder="enter new password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="text-danger">{error}</span>
        <div className="flex items-center justify-center">
          <button type="submit" className="btn" onClick={onSubmit}>
            Update password
          </button>
        </div>
      </form>
    </div>
  </div>;
}