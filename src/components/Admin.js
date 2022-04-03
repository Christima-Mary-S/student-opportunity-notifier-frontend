import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, selectisAdmin } from "../selectors/selectors";
import { getUsers } from "../actions/actionCreators";

const columns = ["Name", "Username", "Email", "College", "YoG", "Action"];

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
        <table className="table border-2 border-slate-600 overflow-scroll">
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
                <td>
                  <button className="bg-slate-600 hover:bg-red-600 transform ease-in-out flex justify-center items-center rounded-md border-0 capitalize">
                    Delete
                  </button>
                </td>
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
