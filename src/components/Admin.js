import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, selectisAdmin } from "../selectors/selectors";
import { getUsers } from "../actions/actionCreators";
import { UsersDisplay } from "./UsersDisplay";

export const Admin = () => {
  const isAdmin = useSelector(selectisAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isAdmin === true) {
    return <UsersDisplay />
  } else {
    return <div className="text-blue-500">You are not logged in as admin</div>;
  }
};
