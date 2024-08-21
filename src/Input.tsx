import React, { InputHTMLAttributes } from "react";

type Props = {
    label: string,
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, ...props }: Props) => {
    return (
        <div className="w-full">
            <label>
                {label}
            </label>
            <input
                className="w-full border-2 rounded-md border-black outline-0"
                type={"text"}
                {...props}
            />
        </div>
    );
};

export default Input;