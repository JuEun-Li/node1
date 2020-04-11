// count++ 해서 10이 되면 종료

let count = 0;

function printTime(msg) {
    console.log(msg, new Date());
    count = count + 1;

    if(count == 10){
        clearInterval(id); // 정지
    }
  }
  
  let id = setInterval(printTime, 1000, "1초 후에");
  
