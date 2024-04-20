import PropTypes from "prop-types";
import { useState } from "react";
import { Eye, EyeOff } from 'react-feather';

export function InputBox({ label, placeholder, onChange, type }) {
    const [inputType, setInputType] = useState(type);

    const toggleInputType = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <div className="text-sm font-medium text-left py-2 flex-grow">
            <div>{label}</div>
            <div className="relative">
                <input type={inputType} onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200 " />
                {type === 'password' && (
                    <button type="button" onClick={toggleInputType} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600">
                        {inputType === 'password' ? <EyeOff /> : <Eye />}
                    </button>
                )}
            </div>
        </div>
    );
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
};