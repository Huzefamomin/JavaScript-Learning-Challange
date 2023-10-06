// Dates 

let myDate = new Date()

// Methods (Functions) on Date type formate conversion

console.log(typeof myDate);   //it is object type

// let myCreatedDate = new Date (2023 , 0, 23)  //here months starts with zero index
// console.log(myCreatedDate.toDateString());
// for customized Date addition  outout: Mon Jan 23 2023

// let myCreatedDate = new Date (2023 , 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());
// // output: 1/23/2023, 5:03:00 AM 

// let myCreatedDate = new Date ("2023-01-23") //here months starts with 10 index
// console.log(myCreatedDate.toLocaleString());
// // output: 1/23/2023, 12:00:00 AM

let myCreatedDate = new Date ("01-14-2023") //here months starts with 10 index
console.log(myCreatedDate.toLocaleString());
// output: 1/14/2023, 12:00:00 AM

console.log(myDate.toString());
// output: Fri Oct 06 2023 05:00:15 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toISOString());
// output: 2023-10-06T05:01:25.991Z

console.log(myDate.toJSON());
// output: 2023-10-06T05:02:36.314Z

console.log(myDate.toDateString());
// output: Fri Oct 06 2023

console.log(myDate.toLocaleDateString());
// output: 10/6/2023

console.log(myDate.toLocaleTimeString());
// output: 5:04:28 AM

console.log(myDate.toTimeString());
// output: 05:04:59 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString());
// output: Fri, 06 Oct 2023 05:05:26 GMT

console.log(myDate.getTimezoneOffset());
// output: 0



////Time Stamp////

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //Mileseconds to second conversion of time

let newDate = new Date()
console.log(newDate.getMonth() +1);
console.log(newDate.getDate());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))   // more customization of the functon is possible 