// const tinderUser=new Object()//singleton object
const tinderUser={}
    tinderUser.id="123abc"
    tinderUser.name="Sam"
    tinderUser.isLoggedIn=false


// console.log(tinderUser);
const regUser= {
    email:"sam@example",
    fullName:{
        userFullName:{
            firstName:"Sam",
            lastName:"sah"
        }        


    }

}
// console.log(regUser.fullName.userFullName.firstName);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
const obj3={...obj1,...obj2}
// console.log(obj3);
const users=[
    {
        id:1,
        email:"mk@gmail.com",

    },
]
const v=users[1].email
console.log(v)
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))