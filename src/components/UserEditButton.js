import { FaUserEdit } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const UserEditButton = (props) => {
  const history = useHistory();

  const onClick = () => {
    history.push("/updateUserDetails");
  };

  return (
    <button className="btn flex gap-1" onClick={onClick}>
      <FaUserEdit /> Edit
    </button>
  );
};
