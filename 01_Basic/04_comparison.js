console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);  //false 
console.log(null == 0); //false
console.log(null >= 0); //true

// The reson is that an equality check == and comparisons > <> < >= 
// <= works differently

// comparisons convert null toa number, treating it as 0.
// that's why (3) null>=0 is true and (1) null>0 is false

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

console.log("2"===2);
console.log(2===2);
console.log("2"==2);


// ==  double equels checks the values
// ===   triple equals it checks the value strickly it checks the values and datatype both.

