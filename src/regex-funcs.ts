export function stringWithArgs(split: (string | number)[], args: string[]) {
    return split.map(s => typeof s === "number" ? args[s] : s).join("");
}

// export function replaceSection(input: string, startIndex: number, count: number, replacement: string): string {
//     return input.slice(0, startIndex) + replacement + input.slice(startIndex + count);
// }
export function replaceSection(input: string, startIndex: number, count: number, replacement: string): string {
    // const startIndex = input.indexOf(searchString, from)
    // const count = searchString.length
    // console.log(replacement)
    // console.log(input.slice(0, startIndex), "((((", replacement, "))))" , input.slice(startIndex + count));
    // console.log(input.slice(0, startIndex))
    // console.log(replacement)
    // console.log(input.slice(startIndex + count+1))
    return input.slice(0, startIndex) + replacement + input.slice(startIndex + count);
}

// export function escapeRegExp(text: string) {
//     return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// }

const getNumbers: splitCallback<number> = (match: RegExpExecArray) => {
    return match[1] ? parseInt(match[1], 10) : undefined
}

// eslint-disable-next-line no-unused-vars
type splitCallback<T> = (match: RegExpExecArray) => T | undefined

export function splitByMatches<T>(replaceString: string, callback: splitCallback<T>, matchScreen: string = "%{{([0-9]+)}}"): (string | T)[] {
    const matches = regexExecAll(matchScreen + `|([^${matchScreen[0]}]+)|(${matchScreen[0]})`, replaceString);
    const result: (string | T)[] = [];
    for (const match of matches) {
        const matchRes = callback(match)
        if (matchRes !== undefined) {
            result.push(matchRes);
        } else if (match[match.length-2] !== undefined) {
            result.push(match[match.length-2]);
        } else result.push(match[match.length-1]);
    }
    return result
}

export function regexExecAll(pattern: string, input: string) {
    return input.matchAll(new RegExp(pattern, "gm"))
}

export function smartRegexReplace(pattern: string, replacement: string, input: string): string {
    if (!pattern || !replacement || !input) return input
    // return input.replace(pattern, replacement);
    const matches = regexExecAll(pattern, input);
    const split = splitByMatches(replacement, getNumbers);

    let res = input;
    for (const match of matches) {
        console.log(match)
        res = replaceSection(res, match.index, match[0].length, stringWithArgs(split, match));
    }
    return res
}