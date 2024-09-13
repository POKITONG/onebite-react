// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;
console.log(num6);

// 3. 복합 대입 연산자
let num7 = 10;
num7 = num7 + 20;
console.log(num7);
num7 += 20;
console.log(num7);
num7 -= 20;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
num8++;
console.log(num8);
console.log(++num8);

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. 비교 연산자
let com1 = 1 === 2;
let com2 = 1 !== 2;
console.log(com1, com2);

let com3 = 2 > 1;
let com4 = 1 > 2;
console.log(com3, com4);

let com5 = 2 >= 2;
let com6 = 2 <= 2;
console.log(com5, com6);
