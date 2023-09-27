let score = "33abc" // it will convert in the number 
                    //   but output will be NaN not a number

                    // let score = "33"  is actual value number
// Nan is also a special type 

// console.log(typeof (score))
// console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

//"33" => 33
// "33wab" ==> NaN
// true ==> 1
// false == > 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log( booleanIsLoggedIn);


//  1 ==> true; 0 ==> false
// "" => false
// "Huzefa" => True
let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);