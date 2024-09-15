import React from "react";
import { regexExecAll, replaceSection, splitByMatches } from "./regex-funcs.ts";
import { useAppContext } from "./useAppContext.ts";
import cn from "classnames";


const Result = () => {
    const { result, pattern: [pattern], replacement: [replacement], wrap } = useAppContext()

    let modifiedResult: (string|RegExpExecArray)[] = [result];
    if(!replacement && pattern && result){
        // modifiedResult = regexExecAll(pattern, result);
        console.log(modifiedResult)
        // console.log(modifiedResult)
        // const matches = regexExecAll(pattern, modifiedResult);
        // let index = 0
        // for (const match of matches) {
        //     index = modifiedResult.indexOf(match[0], index);
        //     let grouped = match[0];
        //     for (let i = 1, gi = 0; i < match.length; i++) {
        //         gi = grouped.indexOf(match[i], gi);
        //         grouped = replaceSection(grouped, gi, match[i], `<em>${match[i]}</em>`)
        //     }
        //     modifiedResult = replaceSection(modifiedResult, index, match[0], `<strong>${grouped}</strong>`)
        // }
    }

    return (
        <div className="flex-1 max-h-[85vh] basis-1/2 h-full relative">
            <label>
                Result
            </label>
            <pre className={cn(`h-[90%] overflow-auto
                outline-0 rounded-md w-full dark:bg-transparent border
                dark:border-secondary-200 border-secondary-600 px-1`,
                wrap && "text-wrap"
                )}
            >
                {modifiedResult.map(r => typeof r === "string"? r:
                    <strong>{r}</strong>
                )}
            </pre>
            {/*<div>
                TODO: Copy to clipboard
            </div>*/}
        </div>
    );
};

export default Result;