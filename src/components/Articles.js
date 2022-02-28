import { useSelector } from "react-redux";
import { createSelector } from 'reselect';

const selectArticles = createSelector(
    state => state.general,
    general => general.articles
);

function Articles() {
    const articles = useSelector(selectArticles);
    console.log(articles);
    return <div>
    </div>
}

export default Articles;