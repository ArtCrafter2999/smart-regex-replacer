import { useMemo } from "react";
import { useInput } from "./useInput.ts";
import Input from "./Input.tsx";
import Result from "./Result.tsx";
import { smartRegexReplace } from "./regex-funcs.ts";
import TextArea from "./TextArea.tsx";
import InputTextArea from "./InputTextArea.tsx";

const App = () => {
    const [pattern, patternProps] = useInput();
    const [replacement, replacementProps] = useInput();
    const [input, inputProps] = useInput();
    const result = useMemo(() => {
        if (pattern && replacement && input)
            return smartRegexReplace(pattern, replacement, input)
        return input
    }, [pattern, replacement, input]);


    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="h-5/6 w-3/4">
                <Input label="Regex" {...patternProps} />
                <div>
                    <TextArea label="Replace" {...replacementProps} />
                </div>
                <div>
                    <InputTextArea {...inputProps} />
                    <Result result={result} />
                </div>
            </div>
        </div>
    );
};

export default App;