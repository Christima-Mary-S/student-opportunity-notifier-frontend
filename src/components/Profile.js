import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../selectors/selectors";

export const Profile = () => {
  const { username, collegeName, yearOfGraduation, email } =
    useSelector(selectUser);

  return (
    <div>
      <div className="dash-card">Name :</div>
      <div className="dash-card">Username : {username}</div>
      <div className="dash-card">Email : {email}</div>
      <div className="dash-card">
        College : {collegeName ? collegeName : "Not provided"}
      </div>
      <div className="dash-card">
        Year Of Graduation :{" "}
        {yearOfGraduation ? yearOfGraduation : "Not provided"}
      </div>
    </div>
  );
};
