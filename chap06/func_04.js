// (외우기)가변 파라미터 사용법. 배열처럼 사용한다.

function sum(...a){
    let result = 0;
    for(let i = 0; i < a.length; i++){
        result = result + a[i];
    }
    return result; // return값 표시하는거 잊지 말기.
}
console.log(sum(1, 2, 3, 4));