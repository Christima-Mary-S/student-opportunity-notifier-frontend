import { useDispatch } from "react-redux";

import { logout } from "../actions/actionCreators";

export const LogoutButton = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    return <div><button onClick={onLogout}>logout</button></div>;
}