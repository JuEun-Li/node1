// this 문제에 대하여

let obj = {
    count: 0,
    startTimer: function(){
        console.log(this.count); // 여기서 count는 0
        let callback = function() { console.log(this.count++);}; // count++는 값 없음
        setInterval(callback, 1000);
    }
}
obj.startTimer();