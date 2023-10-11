//  Push METHOD
let array1 = [1,2,3,4,5]
array1.push(6)
console.log(array1);

//  Unshift METHOD
let array2 = [1,2,3,4,5]
array2.unshift(6)
console.log(array2);

//  Pop METHOD
let array3 = [1,2,3,4,5]
let popped = array3.pop()
console.log(popped);
console.log(array3);

// concat METHOD
let array4 = [1,2,3,4]
let newArray = array4.concat(5,6)
console.log(newArray);
console.log(array4);


//Splice METHOD

let letters = ['a','b','c'];
//Add 'x' ant 'y' at index 1
letters.splice(1,0,'x','y');
console.log(letters);
//output : [ 'a', 'x', 'y', 'b', 'c' ]

//Removing 1 element starting from index 1
letters.splice(1, 1);
console.log(letters);
//output: [ 'a', 'y', 'b', 'c' ]

//Replaces the elements at index 2 with 'q'
letters.splice(2, 1, 'q');
console.log(letters);
//output: [ 'a', 'y', 'b', 'c' ]

