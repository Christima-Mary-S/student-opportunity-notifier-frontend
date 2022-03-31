import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, selectisAdmin } from '../selectors/selectors';
import { getUsers } from '../actions/actionCreators';

export const Admin = () => {
  const isAdmin = useSelector(selectisAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);
  if (isAdmin === true) {
    console.log("Users are", users);
    return <div className="text-blue-500">Admin</div>;
  } else {
    return <div className="text-blue-500">You are not logged in as admin</div>;
  }
};
