import "./Main.css";
// 컴포넌트에서 CSS 파일을 불러올 때에는 import 뒤에 파일 경로만 작성

const Main = () => {
    // JSX 주의사항
    // 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
    // 2. 숫자, 문자열, 배열 값만 렌더링 된다.
    // 3. 모든 태그는 닫혀있어야 한다.
    // 4. 최상위 태그는 반드시 하나여야만 한다.

    const number = 10;
    const obj = {a: 1};
    const user = {
        name: "이정환",
        isLogin: true,
    }
    if (user.isLogin) {
        return <div style={{
            // backgroundColor: "red",
            // borderBottom: "5px solid blue",
            // JSX 문법 상에서 요쇼의 스타일 속성을 직접 설정할 때에는 카멜케이스 사용
        }} className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
    // return (
    //     <main>
    //         {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //         <h1>main</h1>
    //         <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
    //         {10}
    //         {number}
    //         {[1, 2, 3]}
    //         {true}
    //         {undefined}
    //         {null}
    //         {obj.a}
    //     {/* 숫자, 문자열이 아닌 경우 오류가 발생하지는 않지만 화면에 렌더링되지 않는다.*/}
    //     </main>
    // );
};

export default Main;