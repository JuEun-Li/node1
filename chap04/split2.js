let s = "one two, three  four"; // 콤마, 공백 1개, 2개로 이루어진 문자열 
let a = s.split(/[\t ,]+/); // 콤마, 탭, 공백 문자들의 결합과 일치하는 정규식

for (let i = 0; i < a.length; ++i)
    console.log(a[i]);