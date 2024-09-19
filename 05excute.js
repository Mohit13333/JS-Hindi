//  javaScript excution context
//  global excution context
// function excution context
// eval excution context
// it run in two phase
// 1 memory creation phase/creation phase
// 2 excution phase

let val1=10
let val2=5
function addNum(num1,num2) {
    let total=num1+num2
    return total

}
let result1=addNum(val1,val2)
console.log(result1);
let result2=addNum(10,2)   
console.log(result2); 
console.log(addNum());

