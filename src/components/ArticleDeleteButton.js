import {
    FaTrash
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteArticle } from "../actions/actionCreators.js";
import { selectUser, selectSavedArticles } from "../selectors/selectors";

function getArticleId(articles, articleLink) {
    let id = null;
    articles.forEach(article => {
        if (article.link === articleLink) {
            id = article._id;
        }
    });
    return id;
}

export const ArticleDeleteButton = (props) => {
    const user = useSelector(selectUser);
    const articles = useSelector(selectSavedArticles);
 
    const dispatch = useDispatch();
 
    const onClick = () => {
        const articleId = getArticleId(articles, props.link);
        if (articleId !== null) {
            dispatch(deleteArticle(user.id, articleId));
        } else {
            console.log("Error! Article not properly saved!");
        }
    }

    return <button onClick={onClick}>
        <FaTrash />
    </button>;
}