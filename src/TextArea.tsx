import React, { TextareaHTMLAttributes } from "react";
import cn from "classnames"

type Props = {
    label: string,
    className?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const Input = ({ label, className, ...props }: Props) => {
    return (
        <>
            <label>
                {label}
            </label>
            <textarea
                className="w-full border-2 rounded-md border-black outline-0"
                {...props}
            />
        </>
    );
};

export default Input;