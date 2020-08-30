let person = [{ name: "홍길동", age: 16 }, { name: "임꺽정", age: 18 }];

person[0].name = "길동";
console.log(person);

console.log(person[0] == person[1]); // 두 객체의 참조가 다르다