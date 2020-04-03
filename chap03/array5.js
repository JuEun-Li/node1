let a = [3];
a[5] = 456;
console.log("배열의 크기: " + a.length);

for (let i = 0; i < a.length; i++){
    console.log("a[%d] : %s", i , a[i] );
}