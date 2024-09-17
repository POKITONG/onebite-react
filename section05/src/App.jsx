import './App.css'
import HookExam from "./components/HookExam.jsx";

// vite 로 만든 react 프로젝트에서는 from 뒤의 확장자를 적지 않아도 되도록 내부적으로 자동 설정되어 있다.

function App() {

    return (
        <>
            <HookExam/>
        </>
    );
}

// html 을 반환하는 자바스크립트 파일 : 컴포넌트

// 리액트에서 컴포넌트가 리렌더링 될 때
// 1. 자신이 관리하는 State 의 상태가 변경되었을 때
// 2. 자신이 재공받는 props 의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링 될 때

export default App
