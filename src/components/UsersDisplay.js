import { useSelector } from "react-redux";
import { selectUsers } from "../selectors/selectors";
import { UserDisplay } from "./UserDisplay";

const columns = ["Name", "Username", "Email", "College", "YoG", "Action"];

export const UsersDisplay = () => {
    const users = useSelector(selectUsers);

    console.log("Users are", users);
    return (
      <div className="flex justify-center h-96 w-96 md:w-[1000px] md:h-[500px] bg-black-light capitalize text-gray-dark shadow-xl shadow-slate-600 p-10">
        <table className="table border-2 border-slate-600 overflow-scroll">
          <thead>
            <tr>
              {columns.map((col) => (
                <th>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(user => <UserDisplay key={user.username} username={user.username} name={user.name} email={user.email} collegeName={user.collegeName} yearOfGraduation={user.yearOfGraduation} />)}
          </tbody>
        </table>
      </div>
  );
}