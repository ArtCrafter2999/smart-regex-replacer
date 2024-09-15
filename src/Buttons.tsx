import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from "./Button.tsx";
import { LuWrapText } from "react-icons/lu";
import { useAppContext } from "./useAppContext.ts";

const Buttons = () => {
    const {input: [, , setInput], ensureFullResult, toggleWrap, wrap} = useAppContext();

    function moveLeft() {
        setInput(ensureFullResult());
    }
    return (
        <div className="flex flex-col h-full justify-center mx-3">
            <div className="px-2">
                <FaArrowRight />
            </div>
            <Button onClick={moveLeft}>
                <FaArrowLeft />
            </Button>
            <Button onClick={toggleWrap} color={wrap? "primary-border-selected" : "primary-border"}>
                <LuWrapText />
            </Button>
        </div>
    );
};

export default Buttons;