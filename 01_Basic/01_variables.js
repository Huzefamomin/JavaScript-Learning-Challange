const accountId = 144552
let accountEmail = "huzefa@google.com"
var accountPassword = "12345"  
accountCity = "Pune"
let accountState;

// accountId = 2 // --> not allowed in the javaScript

accountEmail = "huzefamomin@google.com"
accountPassword = "1212121"
accountCity = "Mumbai"  

/*
Preffer not to use var because of
 issue in block scope and functional scope
*/ 

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
