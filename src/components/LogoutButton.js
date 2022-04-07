import { useDispatch } from "react-redux";

import { logout } from "../actions/actionCreators";
import { useHistory } from 'react-router-dom';

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    dispatch(logout(history));
  };

  return (
    <div>
      <button className="btn" onClick={onLogout}>
        logout
      </button>
    </div>
  );
};
