let score = "33abc" // it will convert in the number 
                    //   but output will be NaN not a number

                    // let score = "33"  is actual value number
// Nan is also a special type 

// console.log(typeof (score))
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber);

//"33" => 33
// "33wab" ==> NaN
// true ==> 1
// false == > 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log( booleanIsLoggedIn);


//  1 ==> true; 0 ==> false
// "" => false
// "Huzefa" => True
let someNumber = 33

// let StringNumber = String(someNumber)
// console.log(StringNumber);
// console.log(typeof StringNumber);


// -----------------------------------------------operations------------------------------------------------------------------

let value = 3
let negValue = -value
// console.log(negValue);

// basic opration in JS
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);


let str1 = "Hello"
let str2 = " Huzefa"

let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2);      //12
// console.log(2 + "1");      //12
// console.log("1" + 2);      //12
// console.log("1" + 2 + 2);  //122
// console.log(2 + 2 + "1" ); //41

//  In JS if in first place its a string then it will simply add string to other
//  if its a number like in ths  console.log(2 + 2 + "1" ); //41 case it 
// first add the two numbers and then add the string to number

console.log(true);
console.log(+true);
// console.log(true+); it will show error 

console.log(+""); //0 but not preffered

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter=100
gameCounter ++
console.log(gameCounter);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// link for increment and decrement in JS

