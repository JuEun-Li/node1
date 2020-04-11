// 콜백 함수 전달(외우기)

function test1(f){
    let result = f(3,4);
    console.log(result);
}

function add(a, b){
    return a + b;
}

function mul(a, b){
    return a * b;
}

test1(add);
test1(mul);