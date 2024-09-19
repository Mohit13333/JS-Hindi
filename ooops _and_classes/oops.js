const user={
    userName:"mohit",
    loginCount:8,
    signedIn:false,
    getUserDetails: function() {
        // console.log(`username: ${this.userName}`);

    }
}
// console.log(user.userName, user.signedIn, user.loginCount)
// console.log(user.getUserDetails())

// const promiseOne=new Promise()
// const date=new Date()
function User(userName,loginCount,isLoggedIn) {
    this.userName=userName;
    this.isLoggedIn=isLoggedIn;
    this.loginCount=loginCount;
    return this
}
const userOne=new User("Mohit",12,true);
const userTwo= new User("Mohit Singh",11,false);
console.log(userOne.constructor);
// console.log(userTwo);
