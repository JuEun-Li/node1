function hello(a,b){
    console.log(a + b);
}
hello(3,4);
// 정상적인 호출.


function hello_2(i,j){
    console.log(i + j);
}
hello_2();
// 하지만 만약 b에 null이나 undefined 값이 들어가면?
// NaN 출력.


function hello_3(a){
    console.log("hello " + a);
}
hello_3();
// 문자열과 함께 선언된 경우 undefined.