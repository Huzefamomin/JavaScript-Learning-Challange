// find
const array = [1,2,3,4,5];
let c = array.find((num) => num % 2 ===0);
console.log(c);
//output: 2

// filter
const array1 = [1,2,3,4,5];
let d = array.filter((num) => num % 2 ===0);
console.log(d);
// output: [2, 4]

// slice 
const array0 = ["a","b","c","d","e"]
let e = array0.slice(0,4)
console.log(e);