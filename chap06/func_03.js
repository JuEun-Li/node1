// 애매함을 없애는 방법

function add(a, b){
    return a + (b || 0);
}
// 만약 b가 true이면(값이 알맞으면) b의 값 인정.
// 반대로 b가 false이면 결과는 오른쪽 항의 값(0)이 된다.

console.log(add(3, 4));
console.log(add(3));