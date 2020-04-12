// assign 메소드 활용

let person = { name : "홍길동", age : 22};
let info = { age : 20, department : "소프", grade : 2};

Object.assign(person, info); // person에 info를 대입
console.log(person);
