// 한 페이지에 10명의 학생정보를 출력하고자 할 때, 
// n명의 학생 정보를 출력하려면 몇 페이지가 필요한지 구하기.

let studentCount = 31; // 출력해야할 학생 수
let pageSize = 10; // 한 페이지에 10명

console.log(Math.ceil(studentCount / pageSize));