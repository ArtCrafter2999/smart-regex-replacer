import React, { ReactNode, useMemo, useState } from "react";
import { useInput } from "./useInput.ts";
import { smartRegexReplace } from "./regex-funcs.ts";
import { AppContext } from "./useAppContext"



const AppContextProvider = ({children}: {children: ReactNode}) => {
    const pattern = useInput();
    const replacement = useInput();
    const input = useInput();
    const [wrap, setWrap] = useState<boolean>(false);

    function toggleWrap() {
        setWrap(prev => !prev);
    }

    const longResult = useMemo(() => input[0].length > 1000, [input]);
    let result = longResult? input[0].slice(0, 2000): input[0]
    if (pattern[0] && replacement[0] && input[0]) {
        result = smartRegexReplace(pattern[0], replacement[0], result)
    }
    function ensureFullResult() {
        if(!pattern[0] || !replacement[0] || !input[0]) return result
        if(longResult)
            return smartRegexReplace(pattern[0], replacement[0], input[0]);
        return result
    }

    return (
        <AppContext.Provider value={{ pattern, replacement, input, wrap, toggleWrap, result, ensureFullResult}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;