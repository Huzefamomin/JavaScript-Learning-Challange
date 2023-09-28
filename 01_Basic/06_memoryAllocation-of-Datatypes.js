
// Primitives are store in Stack Memory 
// And Non-Primitives are store in Heap Memory

let myName = "HuzefaMomin" 

let anotherName = myName
anotherName= "Appa"

console.log(myName);
console.log(anotherName);

// ---------------------------------------------------------------

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Huzefa@google.com"
console.log(userOne.email);
console.log(userTwo.email);

// --NOTES--
// In stack which is a primitive types storage is creats a copy 
// the existing one and what ever we try to change it only change for 
// the copy so the original value is secure 

// But in heap Non-primitive type the copy is not created 
// it actually gives the refrence of original value so if 
// we make any changes it actualy modfies the original value 
