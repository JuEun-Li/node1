// this문제 해결방법

let obj = {
    count: 0,
    startTimer : function() {
        console.log(this.count);
        let callback = () => {console.log(this.count++);};
        // 여기에서 count는 obj내의 것을 가리킴.
        setInterval(callback, 1000)
    }
}
obj.startTimer();