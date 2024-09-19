const userEmail= [] //"" false, //"h@example.com"true
if (userEmail){
    console.log("Got user email")
}else{
    console.log("No user email")
}
// falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN .
// truthy value
// "0","false"," ",[],{},function(){},
// if (userEmail.length===0) {
//     console.log("Array is empty")
// }
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}
// nullish coalescing operator(??):null undefined
let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??15
console.log(val1);
//ternaary operator
// condition? true: false;
const iceTea=100
iceTea<=80?console.log("lessthan 80"):console.log("More than 80");