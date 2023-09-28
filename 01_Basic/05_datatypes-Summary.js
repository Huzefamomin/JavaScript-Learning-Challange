//  Primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100     //--> Number type
const scoreValus = 100.3  //--> Number type
const isLoggedIn = false  //--> boolean type
const ousideTemp = null   //--> Null type
let userEmail; //--> undefeined type
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 321645889755555n //--> bigInt type
console.log(typeof bigNumber);

//Reference type(Non- primitive):  Array, objects, Functions

const heros = ["shaktiman", "Superman", "Spiderman"] //--> Array type

let myObj= {
    name: "Huzefa", // --> Object Type
    age: 24,
}

// inside a curly bracess is a object type

// function () {  --> function type
// }

//  we can also treat fum=nction in a variable like

const myFunction = function(){
    console.log("Hello Huzefa");
}

// the datatype of function is object function

// IMP --> All the non-primitive containes the object data type

 