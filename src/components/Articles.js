import { useState } from "react";

function Articles() {
    const [loadedArticles, setLoadedArticles] = useState([{ "field1": "loading", "hours": 0, "minutes": 0, "seconds": 0 }, { "field1": "loading2" }]);
    return <div>
        {loadedArticles.map((article) => {
            console.log(article.hours ? article.hours : null);
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