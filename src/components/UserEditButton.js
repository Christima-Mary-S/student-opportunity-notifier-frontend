import {
    FaUserEdit
} from "react-icons/fa";

export const UserEditButton = (props) => {
    const onClick = () => {
        console.log("Clicked!")
    } 

    return <button onClick={onClick}>
        <FaUserEdit />
    </button>;
}