import React, { TextareaHTMLAttributes } from "react";
import TextArea from "./TextArea.tsx";

type Props = {
    className?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const InputTextArea = (props: Props) => {
    return (
        <div className="flex-1">
            <TextArea label="Input" {...props} />
        </div>
    );
};

export default InputTextArea;