import React from "react";
import cn from "classnames";

type Props = {
    result: string
}

const Result = ({ result }: Props) => {
    return (
        <div className="flex-1">
            <label>
                Result
            </label>
            <pre>
                {result}
            </pre>
        </div>
    );
};

export default Result;