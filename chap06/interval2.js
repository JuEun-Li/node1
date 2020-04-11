// setInterval 함수를 더 간략하게

setInterval(function (msg){
    console.log(msg, new Date());
},1000, "1초 간격");

// 더 간결하게

setInterval((msg) => console.log(msg, new Date()), 1000, "1초 후에");