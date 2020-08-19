let s = "one two three four";
let a = s.split(" "); // 공백을 기준으로 쪼갠다.

for (let i = 0; i < a.length; i++){
    console.log(a[i]); // 쪼개진 문자열은 배열처럼 다뤄진다.
}