import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <Viewer count={count}/>
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        {/*컴포넌트마다 백그라운드와 내부 여백을 적용해주기 위해 section 태그로 묶음*/}
        </div>
    )
}

export default App
