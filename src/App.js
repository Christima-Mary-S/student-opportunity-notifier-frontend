import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLatestArticles } from "./actions/actionCreators";
import { Home } from "./components/Home";
// import Articles from "./components/Articles";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestArticles());
  }, [dispatch]);

  return (
    <div className="font-serif">
      {/* <Articles /> */}
      <Home />
    </div>
  );
}

export default App;
