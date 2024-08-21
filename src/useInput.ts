import { Dispatch, SetStateAction, useState } from "react";

export function useInput(): [
    string,
    { value: string, onChange: (e: {target: {value: string}}) => void;},
    Dispatch<SetStateAction<string>>
] {
    const [input, setInput] = useState<string>("");

    return [
        input,
        {value: input, onChange: (e) => setInput(e.target.value)},
        setInput
    ]
}