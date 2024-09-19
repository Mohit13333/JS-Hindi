// const isUserLoggedIn = false
// const temp=90
// if(temp<50){
// console.log("temprature is less than 50");
 
// }else if(temp>50){
//     console.log("tmprature is greater than 50");
// }
// <,>,<=,>=,==,===,!=,!==
// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power ${power}`)
// }
// const balance=1000
// if(balance>500) console.log("test"),console.log(balance)
// if(balance>500){
//     console.log("greater than 500")
// }else if(balance<500){
//     console.log("less than 500")
// }else{
//     console.log("test")
// }
const UserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedinfromEmail=true
if(UserLoggedIn&&debitCard&&loggedInFromGoogle){
    console.log("Allowed to buy course")
}else if(UserLoggedIn&&debitCard&&loggedInFromGoogle||loggedinfromEmail){
    console.log("allowed to buy course")
}else{
    console.log("not allowed to buy course")
}
// // nullish coalescing operator(??):null undefined
// let val1;
// val1=5??10
// console.log(val1);