// let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString()); 
// console.log(myDate.toJSON());
// type of date is object

// let myCreatedDate=new Date(2023,0,23,5,3)
// let myCreatedDate=new Date("2023-05-14")
let myCreatedDate=new Date("01-14-2023")
// console.log(myCreatedDate.toString());
let myStamp=Date.now()
// console.log(myStamp);
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekDay:"long",
    // timeZone:''

}
    )
