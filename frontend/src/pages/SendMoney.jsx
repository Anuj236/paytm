import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    return (
        <div className="flex justify-center bg-gray-100 h-screen">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min space-y-8 w-96 max-w-md p-4 bg-white text-card-foreground shadow-lg rounded-lg ">
                    <div className="flex flex-col p-6">
                        <h2 className="text-center text-3xl font-bold"> Send Money</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex items-center jsutify-center w-12 h-12 bg-green-500 rounded-full">
                                <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                            </div>
                            <h3 className="text-2xl font-semibold">{name}</h3>
                        </div>
                        <div>
                            <div>
                                <label className="text-sm font-medium" htmlFor="amount">Amount(in Rs)</label>
                                <input
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="flex text-sm rounded-md w-full h-10 "
                                    type="number"
                                    id="amount"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <button className="flex justify-center text-sm font-medium text-white w-full rounded-md bg-green-500 "
                                onClick={() => {
                                    axios.post(
                                        "http://localhost:3000/api/v1/accounts/transfer",
                                        {
                                            to: id,
                                            amount,
                                        },
                                        {
                                            headers: {
                                                Authorization:
                                                    "Bearer " +
                                                    localStorage.getItem(
                                                        "token"
                                                    ),
                                            },
                                        }
                                    );
                                }}
                            >
                                Initiate Transfer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
