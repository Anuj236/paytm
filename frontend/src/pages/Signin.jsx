import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { BottomWarning } from "../components/BottomWarning";

export const Signin = () => {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign In"} />
                    <SubHeading label={"Enter your details to sign in"} />
                    <InputBox label={"Email"} placeholder="Enter your email" />
                    <InputBox label={"Password"} placeholder="" />
                    <div className="pt-4">
                        <Button label={"Sign In"} />
                    </div>
                    <BottomWarning
                        label={"Don't have an account?"}
                        buttonText={"Sign Up"}
                        to={"/signup"}
                    />
                </div>
            </div>
        </div>
    );
};