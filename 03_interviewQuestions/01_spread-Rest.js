// Spread operator Example
const array = [1, 2, 3]
console.log(...array);


// copying an array
const originalArray = [1, 2, 3]
const copiedArray = [...originalArray]
console.log(copiedArray);


// Merging arrays 
const array1 = [1, 2, 3];
const array2 = [4, 5];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

//Passing multiple arguments to the functions
const number = [1, 2, 3, 4, 5, 6];
sum (...number);
function sum(a, b, c, d, e, f){
    console.log(a+b+c+d+e+f);
}



// Rest operator 

display (1,2,3,4,5)

function display (first, second, ...restArguments){
    console.log(first);
    console.log(second);

    console.log(restArguments);
}
