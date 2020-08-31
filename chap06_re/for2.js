// 키와 속성값을 한 번에 출력하는 방법
let rectangle = {
    width: 5,
    height: 7,
    area: function () { return this.width * this.height; }
};

for (let key in rectangle) {
    let value = rectangle[key];
    console.log("%s: %s", key, value);
}

// area의 속성값은 함수.