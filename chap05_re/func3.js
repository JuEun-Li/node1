function outterFunc() {
    print("hello");

    function print(msg) {
        console.log(msg);
    }
}
// 함수 내부에 함수가 선언 되었다. (=지역 함수)

outterFunc();

// 함수 외부에서 지역 함수 선언 불가.