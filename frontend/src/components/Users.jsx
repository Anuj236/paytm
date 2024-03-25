import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then((response) => {
                setUsers(response.data.user);
            });
    }, [filter]);

    return (
        <>
            <div className="font-bold text-lg">Users</div>
            <div>
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users...."
                    className="w-full border border-slate-200 rounded "
                ></input>
            </div>
            <div>
                {users.map((user) => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </>
    );
};

function User({ user }) {
    const navigate = useNavigate();

    // Add prop validation for the user object

    User.propTypes = {
        user: PropTypes.shape({
            firstname: PropTypes.string.isRequired,
            lastname: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired,
        }).isRequired,
    };

    return (
        <div className="flex justify-between">
            <div className="flex ">
                <div className="rounded-full w-12 h-12 flex justify-center bg-slate-200">
                    <div className="flex flex-col jsutify-center h-full text-xl">{user?.firstname[0]}</div>
                </div>
                <div className="flex flex-col justify-center h-full ">
                    <div>
                        {user?.firstname} {user?.lastname}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <Button
                    onClick={() => {
                        navigate(
                            "/send?id=" + user._id + "&name=" + user.firstname
                        );
                    }}
                    label={"Send Money"}
                />
            </div>
        </div>
    );
}
