import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from '../selectors/selectors';
import { getUsers } from '../actions/actionCreators';

export const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);
  console.log("Users are", users);

  return <div className="text-blue-500">Admin</div>;
};
