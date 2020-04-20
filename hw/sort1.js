// sort메소드의 파라미터는 콜백함수이다.

let persons = [
    { name : "홍길동", age : 16},
    { name : "암꺽정", age : 18},
    { name : "전우치", age : 19}
];

persons.sort((p1, p2) => p1.age - p2.age); // 이 리턴값을 기준으로 배열을 정렬.
console.log(persons);
