import { useState } from "react";
import {useParams,useHistory} from "react-router-dom";
import validator from "validator";

export const NewPasswordForm = () => {
    const history = useHistory()
    const [password, setPassword] = useState("");
    const {token} = useParams()
    console.log(token)

    const onSubmit = (event) => {
        event.preventDefault();
        if (!validator.isLength(password, { min: 6, max: 30 })) {
          console.log("Password must be at least 6 characters at maximum 30 characters long")
        } else {
          console.log(password);
          fetch("/update-password",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              console.log("Error in data")
           }
           else{
               history.push('/login')
           }
        }).catch(err=>{
            console.log(err)
        })
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
          placeholder="enter new password"
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