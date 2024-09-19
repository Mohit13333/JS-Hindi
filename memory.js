// types of memories
// stack (primitive)
// heap (non-primitive)
let myYoutubename="mohit singh"
let anothername=myYoutubename
anothername="othername"
console.log(myYoutubename);
console.log(anothername);
let userOne={
    email: "user@example.com",
    upi: "upi",
}
let userTwo=userOne
userTwo.email="user2@example.com"
console.log(userOne.email);
console.log(userTwo.email);
// if stack has any changes then you get the copy of that value
// if heap has some changes then you get the reference means chage in original value
