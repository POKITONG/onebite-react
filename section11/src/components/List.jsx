import "./List.css";
import TodoItem from "./TodoItem.jsx";
import {useContext, useMemo, useState} from "react";
import {TodoContext} from "../App.jsx";

const List = () => {
    const {todos} = useContext(TodoContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredDate = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredDate();

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        // memoization 하고 싶은 연산 추가
        console.log("getAnalyzedData 호출");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        }

    },[todos]);
    // deps 가 비어있다면 첫번째 렌더링 됐을 때 단 한 번만 수행, 반환된다.

    // 첫번째 인수로 콜백 함수, 두번째 인수로 의존성 배열
    // 의존성배열 : deps
    // 내부의 콜백함수가 반환하는 값을 그대로 다시 반환한다.

    // 1. useMemo 는 첫번째 인수로 전달한 콜백함수가 반환하는 값을 그대로 반환한다.
    // 2. 첫번째 인수로 전달한 콜백함수를 두번째 인수로 전달한 deps 를 기준으로 메모이제이션 한다.

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();


    return <div className="List">
        <h4>Todo List 🌱</h4>
        <div>
            <div>total: {totalCount}</div>
            <div>done {doneCount}</div>
            <div>notDone: {notDoneCount}</div>
        </div>
        <input value={search}
               onChange={onChangeSearch}
               placeholder="검색어를 입력하세요."/>
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => {
                return <TodoItem
                    key={todo.id}
                    {...todo}/>;
            })}
        </div>
    </div>;

}

export default List;
