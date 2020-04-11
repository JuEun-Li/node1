// 콜백 함수

function add(a,b){
    return a + b;
}

let a = add(3, 4); // 파라미터 값 지정 후 변수에 저장
console.log(a);

let f = add;
console.log(typeof f); // f의 타입은 함수

let b = f(3,4);
console.log(b); // f(3, 4)의 값 출력