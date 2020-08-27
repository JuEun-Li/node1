function createPerson(s, i) {
    return { name: s, age: i }; // 객체를 리턴하는 함수
}

let person1 = createPerson("홍길동", 16);
let person2 = createPerson("임꺽정", 18);

console.log(person1);
console.log(person2);