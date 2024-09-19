function sayMyName(){//function definition
    console.log("M");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");

}
// sayMyName();//refrence ,() excution 
// function Sum(number1, number2){
//    console.log(number1+number2);

// }
function Sum(number1, number2){
    // let result=number1+number2
    // return result
    return number1+number2;
 
 }
const result=Sum(3,4);
// console.log("result:",result);

function loginUserMessage(userName="sam"){
    // if(userName===undefined){
        if(!userName){
        console.log("please enter your username")
        return
    }
       return `${userName} just logged in`
}
// console.log(loginUserMessage("Mohit"))
// console.log(loginUserMessage())
function calculatePrice(...num1){
    return num1

}


// console.log(calculatePrice(2,4,5))
const user={
    userName: "sam",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)

}
// handleObject(user);
handleObject({
    userName: "sam",
    price:399
});
const myNewArray=[200,300,500,600];
function reurnSecondValue(getArray){
    return getArray[1]
}
// console.log(reurnSecondValue(myNewArray));
console.log(reurnSecondValue([200,300,500,600]));