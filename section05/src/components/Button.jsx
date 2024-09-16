const Button = ({text, color, children}) => {
// 이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        // SyntheticBaseEvent : 합성 이벤트
        // 모든 웹브라우저의 이벤트를 하나로 통일한 이벤트 객체
        // 여러 브라우저의 규격을 참고해 하나의 통일된 통합 규격을 만들어 크로스 브라우징 이슈를 방지
        console.log(text);
    };
    console.log(text, color)
    return <button
        onClick={onClickButton} // 이벤트 핸들러
        // 반드시 함수의 이름을 전달, 함수의 리턴값 전달 x
        // onMouseEnter={onClickButton}
        style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
    </button>;

};

Button.defaultProps = {
    color: "black",

}

export default Button;