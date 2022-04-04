export const UserDisplay = (props) => {
    return (
        <tr key={props.username}>
            <td>{props.username}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.collegeName}</td>
            <td>{props.yearOfGraduation}</td>
            <td>
                <button className="bg-slate-600 hover:bg-red-600 transform ease-in-out flex justify-center items-center rounded-md border-0 capitalize">
                    Delete
                </button>
            </td>
        </tr>
    );
}