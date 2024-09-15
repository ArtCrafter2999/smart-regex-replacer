import React, { TextareaHTMLAttributes } from "react";
import TextArea from "./TextArea.tsx";
import { useAppContext } from "./useAppContext.ts";
import cn from "classnames";

type Props = {
    className?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const InputTextArea = (props: Props) => {
    const {input: [, inputProps], wrap} = useAppContext();
    return (
        <div className="flex-1 h-full max-h-[85vh] overflow-hidden">
            <TextArea label="Input" className={cn("resize-none h-[90%] flex-1 grow", wrap || "text-nowrap")}
                      {...inputProps} {...props}
            />
        </div>
    );
};

export default InputTextArea;