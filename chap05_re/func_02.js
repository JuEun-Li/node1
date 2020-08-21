// 파라미터 값이 제대로 전달 되었는지(undefifned가 아닌지) 확실하게 코드를 짜는 법

function add(a, b) {
    if (b == undefined) // 만약 b의 파라미터 값이 전달되지 않았다면
        b = 0;
    return a + b;
}

console.log(add(3));

// 예2

function add2(a, b) {
    if (!b) // b가 false라면 = 0, undefined, null 등등..)
        b = 0;
    return a + b;
}

console.log(add2(3));

// 예3

function add3(a, b) {
    return a + (b || 0); // b가 true일 때 b, false일 때는 0으로 취급.
}

console.log(add3(3));