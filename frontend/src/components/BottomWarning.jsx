import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
    return (
        <div className="text-sm flex justify-center">
            <div>{label}</div>
            <Link className="pointer cursor-pointer underline" to={to}>{buttonText}</Link>
        </div>
    );
}
