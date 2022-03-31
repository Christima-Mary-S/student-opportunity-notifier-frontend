import { ArticleSaveButton } from "./ArticleSaveButton";
import { ArticleDeleteButton } from './ArticleDeleteButton';
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated, selectisAdmin, selectSavedArticles } from "../selectors/selectors";

export const ArticleStoreActionButton = (props) => {
    const { title, link, location, stipend, apply_by } = props;

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isAdmin = useSelector(selectisAdmin);
    const savedArticles = useSelector(selectSavedArticles);
            
    let canLaunchAction = isAuthenticated && (!isAdmin);

    if (canLaunchAction) {
        let isSave = true;
        savedArticles.forEach(article => {
            if (article.link === link) {
                isSave = false;
            }
        });
        if (isSave) {
            return <ArticleSaveButton key={link} title={title} link={link} location={location} stipend={stipend} apply_by={apply_by} />;
        } else {
            return <ArticleDeleteButton key={link} title={title} link={link} location={location} stipend={stipend} apply_by={apply_by} />
        }
    } else {
        return null;
    }
}