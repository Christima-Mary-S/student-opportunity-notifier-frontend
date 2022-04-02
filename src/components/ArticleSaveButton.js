import {
    FaSave
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { saveArticle } from "../actions/actionCreators.js";
import { selectUser } from "../selectors/selectors";

export const ArticleSaveButton = (props) => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(saveArticle(user.id, props));
    } 

    return <button onClick={onClick}>
        <FaSave />
    </button>;
}