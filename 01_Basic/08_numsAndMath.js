const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));
// precision means rounding of a number like (123.899) will be (124)
// it basically removes the digits on the given precision values. 


const anotherNumber = 1123.8966
console.log(otherNumber.toPrecision(3));
// In this Case the value will round off like --> 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
// This is to manage the zeros according to Indian language like --> 10,00,000


// ----------------------------------------<><><><><>-----------------------------------------------

console.log(Math);
console.log(Math.abs(-4));
// To only change the negative values to positive
console.log(Math.round(4.4));
// To round of to a low value 4
console.log(Math.ceil(4.2));
// To round of to a top value 5
console.log(Math.floor(4.9));
// To round of to a low value 4 whatever the decimal is 
console.log(Math.min(6, 8, 9, 12));
// To find a minimum value amongs the numbers
console.log(Math.random());
// It gives the random values 0.746321867652114  
// values are in between 0 and 1 like --> 0.1  0.2 etc
console.log(Math.random()*10+1);
// It dose the same thing but shifts the decimal point 
// and the +1 is added just to avoid the error of zero if the compiler
// gives 0.1 after shifting the value it will be 0 

console.log (Math.floor(Math.random()*10+1));
// its converts to a single digit value

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);
// to get a random no in between the range of 10 and 20
// eg--> 15   number<20 and >10