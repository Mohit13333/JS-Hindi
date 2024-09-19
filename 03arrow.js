const user={
    userName:"Mohit",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        // console.log(this)
    }
}
// user.welcomeMessage();
// user.userName ="Sam"
// user.welcomeMessage();
// console.log(this)

// function chai(){
//     let user="Mohit"
//     console.log(this.user)
// }
// chai();
const chai= () =>{
    let user="Mohit"
    console.log(this);
}
// chai();

// const addTwo=(num1,num2) =>{
//       return num1+num2 //explicit return
// }

// console.log(addTwo(2,3));
// const addTwo=(num1,num2) => num1+num2
// const addTwo=(num1,num2) => (num1+num2) //implicit return
const addTwo=(num1,num2) => ({userName:"Mohit"})

console.log(addTwo(2,3));
const myArray=[2,3,4,4,5]
myArray.forEach()