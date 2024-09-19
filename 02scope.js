let a=300
if(true){
    let a=10
    const b=20
    // var c=30
    // console.log("inner: " +a)
}
// console.log(a)
// console.log(b)
// console.log(c)





// nested scope

function one(){
    const userName="Mohit"
    function two(){
        const website="Youtube"
        // console.log(userName);
    }
    // console.log(website)
    two();
}
// one();
if(true){
    const userName="Mohit"
    if(userName==="Mohit"){
        const website=" YouTube"
        // console.log(userName+website)
    }
    // console.log(website);
}
// console.log(userName);






// intresting

console.log(addOne(1));
function addOne(num){
    return num+1

}
// console.log(addOne(1));
console.log(addTwo(3));
const addTwo= function(num){
    return num+2
}
// console.log(addTwo(3));    