import './App.css'
import {useState} from "react";

// vite 로 만든 react 프로젝트에서는 from 뒤의 확장자를 적지 않아도 되도록 내부적으로 자동 설정되어 있다.
function App() {
    const [count, setCount] = useState(0);
    const [light, setLight] = useState("OFF");

    return (
        <>
            <div>
                <h1>{light}</h1>
                <button onClick={() => {
                    setLight(light === "ON" ? "OFF" : "ON");
                }}> 전구 {light === "ON"? "끄기" : "켜기"}
                </button>
            </div>
            <div>
                <h1>{count}</h1>
                <button onClick={() => {
                    setCount(count + 1);
                }}>+
                </button>
            </div>
        </>
    );
}

// html 을 반환하는 자바스크립트 파일 : 컴포넌트

export default App
