// 객체를 복제하기

let person1 = {name : "홍길동", age : 22};
let person2 = Object.assign({}, person1);

console.log(person2);