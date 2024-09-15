'use client'
import React, { ReactNode } from 'react';
import cn from "classnames";
import { ButtonStyle, buttonStyles } from "./button-styles.tsx";

type Props = {
    children?: ReactNode
    onClick?: () => void
    color?: ButtonStyle
    disabled?:boolean
}

const Button = ({children = "Confirm", onClick, color = "primary", disabled = false}: Props) => {
    function handleOnClick() {
        if(!disabled && onClick)
            onClick();
    }
    return (
        <button
            className={cn(
                `rounded flex justify-center items-center w-full h-7 mt-4 text-black px-2 select-none`,
                disabled? buttonStyles["disabled"]: buttonStyles[color])}
            onClick={handleOnClick}
        >
            {children}
        </button>
    );
};

export default Button;