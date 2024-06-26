
import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [bal, setBal] = useState(0);
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_API_BASE_URL

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (!userToken && bal === 0) {
      navigate("/"); 
    } else {
      axios
        .get(`${baseurl}/api/v1/accounts/balance`, {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        })
        .then((response) => {
          setBal(response.data.balance);
        })
        .catch((error) => {
            console.error(error)
          navigate("/");
        });
    }
  }, [navigate]);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={bal} />
        <Users />
      </div>
    </div>
  );
};
