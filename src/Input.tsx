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
                className="
                        outline-0 rounded-md w-full dark:bg-transparent border
                        dark:border-secondary-200 border-secondary-600 px-1"
                type={"text"}
                {...props}
            />
        </div>
    );
};

export default Input;