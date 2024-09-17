// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다 (조건문, 반복문 내부 호출)
// -> 서로 다른 hook 들의 호출 순서가 엉망이 되어서 내부적으로 오류가 발생할 수도 있음.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

import useInput from "../hooks/useInput.jsx";

// const state = useState();

const HookExam = () => {
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;