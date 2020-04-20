// reduce = call back

function callback(a, b){
    console.log(a ,"+", b);
    return a + b;
} // a + b를 리턴하는 함수

let a1 = [10, 20, 30, 40, 50]; // 배열값이 여러개일땐?
let sum = a1.reduce(callback);
console.log(sum);

// 이전 값을 호출하여 더하는 것을 잊지말자.