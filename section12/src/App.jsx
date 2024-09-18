import {useState} from 'react'
import './App.css'
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Notfound from "./pages/Notfound.jsx";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {
    const nav = useNavigate();
    // useNavigate : 페이지를 실제로 이동시키는 네비게이트 함수를 반환해 줍니다.

    const onClickButton = () => {
        nav("/new");
    };

    // a 태그와 같이 링크가 필요한 경우 : Link 컴포넌트 사용
    // 이벤트 핸들러 함수 내에서 특정 조건에 따라서 페이지를 이동시켜야 하는 경우 : useNavigate 훅 사용

    return (
        <>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>
                {/* Link : html 의 a 태그를 대체하는 컴포넌트
                페이지 이동시 a 태그와 다르게 새로고침이 되지 않는다.*/}
            </div>
            <button onClick={onClickButton}>New 페이지로 이동</button>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary" element={<Diary/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
        // 1. Routes 컴포넌트 내부에는 Route 컴포넌트만 들어갈 수 있다.
        // 2. Routes 컴포넌트 외부 요소는 모든 페이지에 전부 렌더링 된다. (Header, Footer)
    );
}

export default App
