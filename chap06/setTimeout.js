// 밀리초 후에 callback함수를 호출하는 함수

function printTime(msg){
    console.log(msg, new Date); // 현재 시간 출력
}

setTimeout(printTime, 1000, "1초 후");
setTimeout(printTime, 2000, "2초 후");
setTimeout(printTime, 3000, "3초 후");