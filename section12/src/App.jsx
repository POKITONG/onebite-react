import {useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Notfound from "./pages/Notfound.jsx";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/diary" element={<Diary/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
        // 1. Routes 컴포넌트 내부에는 Route 컴포넌트만 들어갈 수 있다.
        // 2. Routes 컴포넌트 외부 요소는 모든 페이지에 전부 렌더링 된다. (Header, Footer)
    )
}

export default App
