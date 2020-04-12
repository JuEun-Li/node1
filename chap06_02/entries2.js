// 배열의 원소 리턴

let person = {name : "홍길동", age : 22};

for (let [key, value] of Object.entries(person)){ // 원소를 key, value에 대입
    console.log("%s : %s", key, value);
}