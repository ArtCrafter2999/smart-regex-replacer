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
                className={cn(`
                    outline-0 rounded-md w-full dark:bg-transparent border
                    dark:border-secondary-200 border-secondary-600 px-1 font-mono`,
                    className
                )}
                {...props}
            />
        </>
    );
};

export default Input;