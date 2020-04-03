// 빈 배열에 랜덤 정수 100개(1이상 100이하)를 생성하여 채운다.
// 배열의 원소들 중에서 짝수(2의 배수)를 찾아 제거한다. 그리고 출력.
let a = [];

for (let i = 0; i < 100; i++){
    a[i] = Math.floor(Math.random() * 100 + 1);
    if(a[i] % 2 == 0)
        a.splice(i);
}
console.log(a);