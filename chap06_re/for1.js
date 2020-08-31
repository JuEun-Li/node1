let person = { name: "홍길동", age: 16 };

for (let key in person) {
    let value = person[key]; // 속성을 엑세스 하는 방법
    console.log("%s: %s", key, value);
}