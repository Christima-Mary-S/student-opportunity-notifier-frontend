import {
    FaSave
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { saveArticle } from "../actions/actionCreators.js";
import { selectIsAuthenticated, selectisAdmin, selectUser } from "../selectors/selectors";

export const ArticleSaveButton = (props) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isAdmin = useSelector(selectisAdmin);
    const user = useSelector(selectUser);
            
    let canSave = isAuthenticated && (!isAdmin);

    const dispatch = useDispatch();

    const onClick = () => {
        if (canSave) {
            dispatch(saveArticle(user.id, props));
        }
    }

    return <button onClick={onClick}>
        {canSave? <FaSave />: null}
    </button>;
}