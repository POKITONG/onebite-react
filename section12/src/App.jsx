import {createContext, useReducer, useRef, useState} from 'react'
import './App.css'
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Notfound from "./pages/Notfound.jsx";
import {getEmotionImage} from "./util/get-emotion-image.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Edit from "./pages/Edit.jsx";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) => String(item.id) === String(action.data.id)
                ? action.data
                : item
            );
        case "DELETE":
            return state.filter((item) => String(item.id) !== String(action.id));
        default :
            return state;
    }
}

const mockData = [
    {
        id: 1,
        createdDate: new Date("2024-09-19").getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date("2024-09-18").getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date("2024-08-18").getTime(),
        emotionId: 3,
        content: "3번 일기 내용",
    },
]

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
/*    const nav = useNavigate();*/
    // useNavigate : 페이지를 실제로 이동시키는 네비게이트 함수를 반환해 줍니다.

/*    const onClickButton = () => {
        nav("/new");
    };*/

    // a 태그와 같이 링크가 필요한 경우 : Link 컴포넌트 사용
    // 이벤트 핸들러 함수 내에서 특정 조건에 따라서 페이지를 이동시켜야 하는 경우 : useNavigate 훅 사용


    // public 과 assets 차이 :
    // public : import 가 아닌 url 을 통해 로드 가능
    // ex) <img src={"/emotion.png"} />
    // assets : import 를 통해 로드 가능, 비트가 내부적으로 이미지 최적화 진행
    // data URI : 이미지와 같은 외부 데이터들을 문자열 형태로 브라우저의 메모리에 캐싱하기 위해서 사용하는 포맷
    // -> 새로고침 해도 다시는 불러오지 않도록 최적화 됨
    // 일반적인 데이터를 사용해서 불러오는 이미지들은 새로고침 할 때마다 매번 다시 불러오게 됨
    // -> 이미지가 만개, 십만개 등 굉장히 많이 필요한 상황에서는 public 폴더 내에 저장하는 것이 좋을 수 있다.

    // Network : 리액트 앱이 주고받는 모든 네트워크 요청들을 모니터링하는 기능 제공

    {/* Link : html 의 a 태그를 대체하는 컴포넌트
                페이지 이동시 a 태그와 다르게 새로고침이 되지 않는다.*/
    }

    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(4);

    // 새로운 일기 추가
    const onCreate = (createdDate, emotionId, content) => {
        // 새로운 일기를 추가하는 기능
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            }
        });
    };

    // 기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id, createdDate, emotionId, content,
            }
        })
    };

    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id
        })
    };

    return (
        <>
            <DiaryDispatchContext.Provider value={{
                onCreate, onDelete, onUpdate,
            }}>
                <DiaryStateContext.Provider value={data}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/>
                        {/*/:id 를 통해 url 파라미터를 사용하는 경로임을 명시*/}
                        <Route path="/edit/:id" element={<Edit/>}/>
                        <Route path="*" element={<Notfound/>}/>
                    </Routes>
                </DiaryStateContext.Provider>
            </DiaryDispatchContext.Provider>


        </>
        // 1. Routes 컴포넌트 내부에는 Route 컴포넌트만 들어갈 수 있다.
        // 2. Routes 컴포넌트 외부 요소는 모든 페이지에 전부 렌더링 된다. (Header, Footer)
    );

}

export default App
