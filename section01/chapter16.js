// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "back",
};

// animal = {a: 1};
animal.age = 2; // 추가
animal.name= "까망이" // 수정
delete animal.color; // 삭제

console.log(animal);

// 상수 == 새로운 값을 할당하지 못 하는 값
// 아예 새로운 객체를 할당하는 것은 불가능 하지만 내부의 프로퍼티를 변경하는 것은 가능

// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
    name: "이정환",
    sayHi() {
        console.log("안녕!")
    },
};

person.sayHi();
person["sayHi"]();