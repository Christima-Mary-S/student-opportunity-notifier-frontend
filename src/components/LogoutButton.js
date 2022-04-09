import { useDispatch } from "react-redux";

import { logout } from "../actions/actionCreators";
import { useHistory } from "react-router-dom";

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    dispatch(logout(history));
  };

  return (
    <li
      className="m-3 hover:text-cyan-light hover:underline underline-offset-2 decoration-cyan-light hover:scale-110 transition ease-in-out cursor-pointer"
      onClick={onLogout}
    >
      Logout
    </li>
  );
};
