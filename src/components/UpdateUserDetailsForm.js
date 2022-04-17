import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { updateNewPassword, updateUserDetails } from "../api";
import { clearErrors, updateUser } from "../actions/actionCreators";
import { selectUser } from "../selectors/selectors";
import { isEmpty } from 'is-empty';

export const UpdateUserDetailsForm = () => {
    const history = useHistory()

    const user = useSelector(selectUser);
    console.log(user)
    const [name, setName] = useState(user.name);
    const [college, setCollege] = useState(user.collegeName ? user.collegeName: "");
    const [year, setYear] = useState(user.yearOfGraduation ? user.yearOfGraduation: "");

    const dispatch = useDispatch();
    useEffect(() => dispatch(clearErrors()), [dispatch]);

    const [nameError, setNameError] = useState("");
    const [collegeError, setCollegeError] = useState("");
    const [yearError, setYearError] = useState("");

    const clear = () => {
        setName(user.name);
        setCollege(user.collegeName ? user.collegeName: "");
        setYear(user.yearOfGraduation ? user.yearOfGraduation: "");
    } 

    const validate = () => {
        if (validator.isEmpty(name)) {
            setNameError("Name field is required");
            return false;
        } else {
            if (!validator.isAlpha(name, 'en-US', {ignore: ' '})) {
                setNameError("Name is not valid!");
                return false;
            } 
        } 
        if (!validator.isEmpty(college)) {
            if (!validator.isAlpha(college, 'en-US', {ignore: ' '})) {
                setCollegeError("College name is not valid!");
                return false;
            }
        }
        if (!validator.isEmpty(year.toString())) {
            if (!validator.isInt(year.toString(), {gt: 1900, lt: 2100})) {
                setYearError("Year of graduation is invalid and/or not in yyyy form!");
                return false;
            }
        }
        return true;
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if (validate() === true) {
            dispatch(updateUser({
                userId: user.id,
                name: name,
                college: college,
                year: year
            }));
            /*await updateUserDetails({
                userId: user.id,
                name: name,
                college: college,
                year: year
            });*/ 
            history.push("/dashboard"); 
        } 
        clear();
    };

    return <div>
        <div className="register-container bg-black-light p-10 capitalize shadow-xl shadow-slate-600  rounded-md hover:scale-105 transform ease-in-out cursor-pointer">
            <h2 className="mb-2 text-center text-2xl">Update User Details</h2>
            <div className="h-2 bg-cyan-light rounded-t-md mb-2"></div>
            <form action="" className="form-login">

                <label htmlFor="name">name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <span className="text-danger">{nameError ?? nameError}</span>
                <label htmlFor="college">college</label>
                <input
                    type="text"
                    name="college"
                    id="college"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                />
                <span className="text-danger">{collegeError ?? collegeError}</span>
                <label htmlFor="year">Year of passing</label>
                <input
                    type="text"
                    name="year"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value.toString())}
                />
                <span className="text-danger">{yearError ?? yearError}</span>

                <div className="flex items-center justify-center">
                    <button type="submit" className="btn" onClick={onSubmit}>
                        Update user details
                    </button>
                </div>
            </form>
        </div>
    </div>;
}