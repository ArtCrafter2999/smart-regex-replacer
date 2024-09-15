import { Dispatch, SetStateAction, useState } from "react";

export type InputResult = [
    string,
    { value: string, onChange: (e: {target: {value: string}}) => void;},
    Dispatch<SetStateAction<string>>
]

export function useInput(): InputResult {
    const [input, setInput] = useState<string>("");

    return [
        input,
        {value: input, onChange: (e) => setInput(e.target.value)},
        setInput
    ]
}