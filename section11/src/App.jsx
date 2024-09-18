import {createContext, useCallback, useMemo, useReducer, useRef, useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime(),
    }
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) => item.id === action.targetId
                ? {...item, isDone: !item.isDone}
                : item
            );
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

// export const TodoContext = createContext();
// 리렌더링 할 때마다 새로운 Context 생성을 막기 위해 보통 컴포넌트 바깥에 선언한다.

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {

    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            }
        })
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId,
        })
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId,
        })
    }, [])

    const memoizedDispatch = useMemo(() => {
        return {onCreate, onDelete, onUpdate};
    }, []);

    return (
        <div className="App">
            <Header/>
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDispatch}>
                    <Editor/>
                    <List/>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
            {/* Provider 의 모든 자식 컴포넌트들은 value 의 값을 공급받을 수 있다.*/}
        </div>
    );
}

export default App
