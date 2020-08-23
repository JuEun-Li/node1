function test1(f) {
    let result = f(3, 4);
    console.log(result);
}

let add = (a, b) => {
    return a + b;
} // function 키워드가 삭제된 것 이외에 변화는 없다.

let multifly = (a, b) => {
    return a * b;
}

test1(add);
test1(multifly);