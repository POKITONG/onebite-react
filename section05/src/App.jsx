import './App.css'
import Header from "./components/Header";
// vite 로 만든 react 프로젝트에서는 from 뒤의 확장자를 적지 않아도 되도록 내부적으로 자동 설정되어 있다.
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button"

function App() {

    const buttonProps = {
        text: "메일",
        color: "red",
        a: 1,
        b: 2,
        c: 3,

    }
    return (
        <>
            {/*<Header/>*/}
            {/*<Main/>*/}
            {/*<Footer/>*/}
            <Button {...buttonProps}/>
            <Button text={"카페"}/>
            <Button text={"블로그"}>
                <Header/>
            </Button>
        </>
    );
}

// html 을 반환하는 자바스크립트 파일 : 컴포넌트

export default App
