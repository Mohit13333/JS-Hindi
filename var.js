const accountId =14356
let accountEmail="mohitkumar@gmail.com"
var accountPassword ="895432"
accountCity="Jaipur"
let accountState;
// accountId=2// const is not changebale account     
accountEmail="mk@gmail.com"
accountPassword="21212121"
accountCity="Mumbai"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
/*
prefer not use to var
because of issue in 
lock scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity, accountId, accountState]);