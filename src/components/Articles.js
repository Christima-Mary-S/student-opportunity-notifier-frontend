import { useSelector } from "react-redux";
import { createSelector } from 'reselect';
import { useState } from "react";

const selectArticles = createSelector(
    state => state.general,
    general => general.articles
);

function Articles() {
    const initialStateArticles = useSelector(selectArticles);
    const [loadedArticles, setLoadedArticles] = useState(initialStateArticles);
    return <div>
        {loadedArticles.map((article) => {
            return <div key={article.field1}>
                <ul>
                    <li>{article.field1}</li>
                    <li>{article.hours}</li>
                    <li>{article.minutes}</li>
                    <li>{article.seconds}</li>
                </ul>
            </div>;
        })}
    </div>
}

export default Articles;