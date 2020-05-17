let a = "555"; 
let b = "323";

console.log(a);
console.log(b);

b = [a, a = b][0];

console.log('----------------');

console.log(a);
console.log(b);
