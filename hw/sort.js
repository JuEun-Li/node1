// 빈 배열을 만든 후, 랜덤한 정수 100개를 생성하여 배열에 삽입한다.
// 배열을 오름차순으로 정렬한 후, 출력.

let a = [];

for(let i = 0; i < 100; i++){
    a[i] = Math.floor(Math.random() * 100 + 1);
}
a.sort(function(a, b) {
    return a - b;
});
console.log(a);

// sort()을 이용하여 정렬을 시도하면,
// 문자열로 바뀌어 아스키코드를 기준으로 정렬을 하게된다.
// a - b를 리턴하는 과정을 넣어야한다.