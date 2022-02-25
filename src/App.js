import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLatestArticles } from "./actions/actionCreators";
// import Articles from "./components/Articles";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestArticles());
  }, [dispatch]);

  return <div>{/* <Articles /> */}</div>;
}

export default App;
