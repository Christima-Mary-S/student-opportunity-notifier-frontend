import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { SET_CURRENT_USER, SET_ADMIN } from "./actions/actionTypes.js";
import { getLatestArticles, logout, getUsers } from "./actions/actionCreators";
import { Home } from "./components/Home";
import { selectUser } from "./selectors/selectors.js";
import Articles from "./components/Articles";

function App() { 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestArticles());
  }, [dispatch]);

  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    const userData = jwtDecode(token);
    const currentTime = Date.now() / 1000; //milliseconds
    if (userData.exp < currentTime) {
      dispatch(logout());
    } else {
      dispatch({
        type: SET_CURRENT_USER,
        payload: userData
      });
      if (userData.username === "admin") {
        dispatch({
          type: SET_ADMIN
        })
      }
    }
  }

  return (
    <Router>
      <div className="font-serif overflow-hidden">
        <Home />
        <Articles />
      </div>
    </Router>
  );
}

export default App;
