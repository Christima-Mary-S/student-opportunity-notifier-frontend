import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLatestArticles } from "./actions/actionCreators";
import { NavBar } from "./components/NavBar";
// import Articles from "./components/Articles";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestArticles());
  }, [dispatch]);

  return (
    <div>
      {/* <Articles /> */}
      <NavBar />
    </div>
  );
}

export default App;
