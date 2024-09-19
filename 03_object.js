// singleton
// Object.create
// object literals
const mySym=Symbol("key1")
const jsUser={
    name:"Mohit",
    "fullName":"Mohit Singh",
    age:18,
    [mySym]:"key1",
    email:"hello@.com",
    location:"Mumbai",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["name"]);
// console.log(jsUser["fullName"]);
// console.log(typeof jsUser[mySym]);
jsUser.email="mk@gmail.com";
// console.log(jsUser["email"]);
// Object.freeze(jsUser);
jsUser.email="mn@.com";
// console.log(jsUser);
jsUser.greeting=function(){
    console.log("Hello js user!");
}
console.log(jsUser.greeting());
jsUser.greeting2=function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(jsUser.greeting2());