import {useReducer} from "react";

// reducer : 변환기
// -> 사앹를 실제로 변화시키는 변환기
function reducer(state, action) {
    // 첫번째 인수로 현재의 state 값, 두번째 인수로 액션 객체 제공
    // reduce 함수에서 새로운 state 의 값을 반환해주면 상태가 변화된다.
    console.log(state, action);
    switch (action.type) {
        case "INCREASE" :
            return state + action.data;
        case "DECREASE" :
            return state - action.data;
        default :
            return state;
    }
}

const Exam = () => {
    // dispatch: 발송하다, 급송하다
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수

    const [state, dispatch] = useReducer(reducer, 0);
    // Reducer 의 첫번째 함수로는 상태 변환 함수를, 두번째 해당 상태의 초기값을 전달해준다.

    const onClickPlus = () => {
        // 인수: 상태가 어떻게 변화되길 원하는지 전달해야 한다.
        // 보통 객체로 만들어서 인수로 전달
        // -> 액션 객체
        dispatch({
            type: "INCREASE",
            // type : 상태를 어떻게 변화시키길 원하는지
            data: 1,
        });
    };

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        })
    }

    return <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
}

export default Exam;