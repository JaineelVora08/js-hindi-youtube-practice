const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
//var type ke bagair bhi you can declare.. error nai aayegi

let accountState;
//undefined print, declared but not defined
//console.log(accountState);

// accountId = 2 // not allowed
// error aayega

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
