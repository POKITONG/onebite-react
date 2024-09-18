import "./TodoItem.css";
import {memo} from "react";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return <div className="TodoItem">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckBox}/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>;
}

// memo 메서드는 현재의 props 와 과거의 props 를 비교해서 같을 경우에만 작동한다.
// 얕은 비교로 비교하기 때문에 객체 타입의 값은 무조건 서로 다른 값이라고 판단하게 된다.
// 그래서 객체 타입을 props 로 전달받는 컴포넌트는 memo 메서드를 그냥 사용한다고 해서 리렌더링이 방지되지 않는다.

// 고차 컴포넌트 (HOC)
// -> 컴포넌트를 인수로 받아서 해당 컴포넌트의 최적화 혹은 메모제이션 같은 추가적인 기능을 덧붙여서 기능이 추가된
// 컴포넌트를 반환해주는 메서드

export default memo(TodoItem, (prevProps, nextProps) => {
    // 반환값에 따라 Props 의 변경 유무 판단
    // T -> Props 변경 -> X 리렌더링 X
    // F -> Props 변경 -> 리렌더링 O

    if (prevProps.id !== nextProps.id) return false;
    if (prevProps.isDone !== nextProps.isDone) return false;
    if (prevProps.content !== nextProps.content) return false;
    if (prevProps.date !== nextProps.date) return false;

    return true;

});

// memo 메서드의 두번째 인수로는 콜백함수를 전달할 수 있다.
// 해당 콜백함수의 파라미터로 prevProps, nextProps 를 전달해서 해당 함수의 반환값에 따라서
// props 가 바뀌었는지 판단한다.