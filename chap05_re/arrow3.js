function test1(f) {
    let result = f(3, 4);
    console.log(result);
}

let add = (a, b) => a + b; // 함수 내에 코드가 return문 1줄일 때, return문, 중괄호 생략
let mul = (a, b) => a * b;

test1(add);
test1(mul);