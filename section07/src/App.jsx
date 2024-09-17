import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import {useEffect, useRef, useState} from "react";
import Even from "./components/Even.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    // 1. 마운트: 탄생
    useEffect(() => {
        console.log("mount")
    }, []);

    // 2. 업데이트 : 변화, 리렌더링
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
    });
    // 3. 언마운트 : 죽음


    // useEffect(() => {
    //     console.log(`count: ${count} / input: ${input}`);
    // }, [count, input]);
    // 의존성 배열
    // dependency array
    // deps

    const onClickButton = (value) => {
        setCount(count + value);
        // console.log(count);
        // setCount 가 비동기로 동작하기 때문에 반드시 useEffect 를 사용해주어야 한다.
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={input} onChange={(e) => {
                    setInput(e.target.value);
                }}/>
            </section>
            <section>
                <Viewer count={count}/>
                {count % 2 === 0 ? <Even/> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
            {/*컴포넌트마다 백그라운드와 내부 여백을 적용해주기 위해 section 태그로 묶음*/}
        </div>
    );
}

export default App
