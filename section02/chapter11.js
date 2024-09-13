console.log(1);

setTimeout(() => {
    console.log(2);
}, 3000);
// 원하는 함수를 특정 시간이 지난 이후 비동기적으로 실행
// 자바스크립트는 쓰레드가 1개이기 때문에 비동기로 실행되는 함수의 경우
// webAPIs에 위탁

console.log(3);

