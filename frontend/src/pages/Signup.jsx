import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"} />
                    <SubHeading
                        label={"Enter your details to create an account"}
                    />
                    <InputBox
                        onChange={(e) => setFirstName(e.target.value)}
                        label="First Name"
                        placeholder="Enter your first name"
                    />
                    <InputBox
                        onChange={(e) => setLastName(e.target.value)}
                        label={"Last Name"}
                        placeholder="Enter your last name"
                    />
                    <InputBox
                        onChange={(e) => setUserName(e.target.value)}
                        label={"Email"}
                        placeholder="Enter your email"
                    />
                    <InputBox
                        onChange={(e) => setPassword(e.target.value)}
                        label={"Password"}
                        placeholder=""
                    />
                    <div className="pt-4">
                        <Button
                            onCLick={async () => {
                                const response = await axios.post(
                                    "http://localhost:3000/api/v1/user/signup",
                                    {
                                        firstname,
                                        lastname,
                                        username,
                                        password,
                                    }
                                );
                                console.log(response)
                                localStorage.setItem(
                                    "token",
                                    response.data.token
                                );
                                console.log(response.data.token)
                                navigate("/dashboard");
                            }}
                            label={"Sign Up"}
                        />
                    </div>
                    <BottomWarning
                        label={"Already have an account?"}
                        buttonText={"Sign In"}
                        to={"/signin"}
                    />
                </div>
            </div>
        </div>
    );
};
