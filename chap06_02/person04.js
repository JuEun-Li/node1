// 함수내부에서 객체 생성하기.

function createPerson(s, i){
    return {name : s, age : i}; // 객체를 만들어서 리턴한다! name= 속성명, s는 변수(값).
}

let person1 = createPerson("홍길동", 23);
let person2 = createPerson("도깨비", 33);

console.log(person1);
console.log(person2);