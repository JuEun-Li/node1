//1 이상 55이하의 모든 정수중 3의 배수만 더해서 화면에 출력.
let sum = 0;

for (let i = 1; i <= 55; i++) {
    if(i % 3 == 0)
        sum = sum + i;
}
console.log(sum)