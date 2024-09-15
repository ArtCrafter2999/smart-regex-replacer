import Input from "./Input.tsx";
import Result from "./Result.tsx";
import TextArea from "./TextArea.tsx";
import InputTextArea from "./InputTextArea.tsx";
import Buttons from "./Buttons.tsx";
import { useAppContext } from "./useAppContext.ts";

const App = () => {
    const {pattern, replacement} = useAppContext();

    return (
        <div className="w-screen min-h-screen h-screen dark:bg-background-800
                        bg-white flex justify-center items-center text-white">
            <div className="h-full flex flex-col w-4/5">
                <Input label="Regex" {...pattern[1]} />
                <div>
                    <TextArea label="Replace" {...replacement[1]} />
                </div>
                <div className="h-full grid grid-cols-[1fr_auto_50%]">
                    <InputTextArea/>
                    <Buttons/>
                    <Result/>
                </div>
            </div>
        </div>
    );
};

export default App;