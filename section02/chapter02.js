function returnFalse() {
    console.log("False 함수");
    return undefined;
}

function returnTrue() {
    console.log("True 함수");
    return 10;
}

console.log(returnTrue() || returnFalse());
// 단라 평가: AND 연산과 같은 논리 연산자에서 첫번째 피연산자의 값만으로도
// 연산의 결과를 확정할 수 있다면 이후 피연산자의 값에는 접근조차 하지 않는 것

// 단락 평가 활용 사례

function printName(person) {
    const name = person && person.name;
    console.log(name || "person에 값이 없음");
}

printName();
printName({name : "이정환"});