import { createContext, useContext } from "react";
import { InputResult } from "./useInput.ts";

type contextObj = {
    pattern: InputResult
    replacement: InputResult
    input: InputResult
    wrap: boolean
    toggleWrap: () => void
    result: string
    ensureFullResult: () => string
}

export const AppContext = createContext<contextObj>({} as contextObj)
export function useAppContext() {return useContext(AppContext);}