import { useSelector } from "react-redux";
import { selectSavedArticles } from "../selectors/selectors";

function SavedArticles() {
    const savedArticles = useSelector(selectSavedArticles);
    console.log(savedArticles);

    return <div>Saved articles</div>;
}

export default SavedArticles;