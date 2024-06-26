
import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const baseurl = import.meta.env.VITE_API_BASE_URL

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/user/bulk?filter=` + filter)
            .then(response => {
                if (response.data && response.data.user) {
                    setUsers(response.data.user)
                }
            })
    }, [filter])

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users?.map(user => <User key={user?._id} user={user} />)}
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();

    return user && (<div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user?.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user?.firstname} {user?.lastname}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full">
            <Button onClick={() => {
                navigate("/sendmoney?id=" + user?._id + "&name=" + user?.firstname);
            }} label={"Send Money"} />
        </div>
    </div>)
}

User.propTypes = {
    user: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired,
};
