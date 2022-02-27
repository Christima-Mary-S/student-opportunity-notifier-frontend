import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { getLatestArticles } from "./actions/actionCreators";
import { Home } from "./components/Home";
// import Articles from "./components/Articles";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestArticles());
  }, [dispatch]);

  return (
    <Router>
      <div className="font-serif">
        {/*<Articles />*/}
        <Home />
      </div>
    </Router>
  );
}

export default App;
