import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, selectisAdmin } from "../selectors/selectors";
import { getUsers } from "../actions/actionCreators";

const columns = ["Name", "Username", "Email", "College", "YoG"];

export const Admin = () => {
  const isAdmin = useSelector(selectisAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);
  if (isAdmin === true) {
    console.log("Users are", users);
    return (
      <div className="flex justify-center h-96 w-96 md:w-[1000px] md:h-[500px] bg-black-light capitalize text-gray-dark shadow-xl shadow-slate-600 p-10">
        <table className="border-2 border-slate-600">
          <thead>
            <tr>
              {columns.map((col) => (
                <th>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.collegeName}</td>
                <td>{user.yearOfGraduation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div className="text-blue-500">You are not logged in as admin</div>;
  }
};
