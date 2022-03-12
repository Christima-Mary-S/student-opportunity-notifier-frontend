import {
    FaSave
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectisAdmin } from "../selectors/selectors";

export const ArticleSaveButton = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isAdmin = useSelector(selectisAdmin);
    return <button>
        {(isAuthenticated && (!isAdmin))? <FaSave />: null}
    </button>;
}