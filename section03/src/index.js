// const {add, sub} = require("./math");
import mul, {add, sub} from "./math.js";
// default 로 export 한 모듈의 경우 {} 을 사용하지 않고 이름을 그대로 사용해서 임포트 할 수 있다.
// 또한 해당 함수의 이름 그대로가 아닌 다른 이름으로 불러와도 사용 가능하다.


// ESmodule 시스템을 이용할 때는 임포트 시 파일의 확장자까지 명시해 주어야 한다.

console.log(add(1, 2));
console.log(sub(1, 2));