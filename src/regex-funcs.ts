export function stringWithArgs(split: (string|number)[], args: string[]) {
    return split.map(s => typeof s === "number"? args[s]: s).join("");
}

// export function replaceSection(input: string, startIndex: number, count: number, replacement: string): string {
//     return input.slice(0, startIndex) + replacement + input.slice(startIndex + count);
// }
export function replaceSection(input: string, from: number, searchString: string, replacement: string): string {
    const startIndex = input.indexOf(searchString, from)
    const count = searchString.length
    return input.slice(0, startIndex) + replacement + input.slice(startIndex + count);
}

export function splitByGroups(replaceString: string, groupScreen: string = "%{{([0-9]+)}}"): (string|number)[] {
    const groups = regexExecAll(groupScreen + `|([^${groupScreen[0]}]+)|(${groupScreen[0]})`, replaceString);
    const result: (string|number)[] = [];
    for (const match of groups) {
        if (match[1] !== undefined) {
            result.push(parseInt(match[1], 10));
        } else if (match[2] !== undefined) {
            result.push(match[2]);
        }
        else result.push(match[3]);
    }
    return result
}

export function regexExecAll(pattern: string, input: string, allowIntersect: boolean = false) : RegExpExecArray[] {
    try {
        const regex = new RegExp(pattern)
        let exec
        let string = input
        const res = []
        // let prevIndex = 0
        while (true) {
            exec = regex.exec(string);
            if (exec && exec.length > 0/* && exec[0] != ""*/) {
                // exec.index += prevIndex;
                // prevIndex = exec.index + exec[0].length+1
                // console.log(prevIndex)
                res.push(exec);
                string = string.slice(exec.index + (allowIntersect ? 1: exec[0].length));
            } else break;
        }
        // console.log(res)
        return res;
    } catch (e) {
        return []
    }
}

export function smartRegexReplace(pattern: string, replacement: string, input: string): string {
    console.log("1")
    const matches = regexExecAll(pattern, input);
    console.log("2")
    const split = splitByGroups(replacement);
    console.log("3")
    let res = input;
    for (const match of matches) {
        res = replaceSection(res, match.index, match[0], stringWithArgs(split, match));
    }
    console.log("4")
    return res
}