import {useState} from "react";

function useInput() {
    // 커스텀 훅은 use 단어로 시작하면 된다.
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return {input, onChange};
}

export default useInput;