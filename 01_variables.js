const accountId = 7245364
let accountEmail = "bhaskar508@gmail.com" //Use let 
var accountPassoward = "78346"
accountCity = "Jaipur"  //do not use this syntax
let accountState;

//  accountId = 2   //not allowed

accountEmail = "shanjay@gmail.com"
accountPassoward = "1010101"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassoward, accountCity, accountState]);