function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor

        setTimeout(() => {

            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
            console.log("안녕");
            // resolve("안녕");
            reject("왜 실패했는지 이유...")
        }, 2000);
    });

    return promise;
}

// then 메서드
// -> 그 후에

const p = add10(0);
p.then((result) => {
    console.log(result);

    const newP = add10(result);
    // newP.then((result) => {
    //     console.log(result);
    // });
    return newP;
}).then((result) => {
    console.log(result);
});

add10(10)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    }).then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);
    });

// promise.then((value) =>
//     console.log(value)
// ).catch((error) => {
//     console.log(error);
// });
// -> 프로미스 체이닝


// setTimeout(() => {
//     console.log(promise);
// },3000);