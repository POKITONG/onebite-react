// math 모듈

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}
//
// module.exports = {
//     add,
//     sub,
//     // 키값과 밸류값이 같을 경우에는 해당 밸류값만 적어도 괜찮다.
// }

// export {add, sub};

export default function multiply(a, b) {
    return a * b;
}