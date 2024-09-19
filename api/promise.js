const promiseOne= new Promise(function(resolve, reject) {
    // do an sync task
    // db calls,cryptography,networkk
    setTimeout(function() {
        console.log('async task is completd');
        resolve();
    },1000)
})
promiseOne.then(() => {
    console.log("promise consume")

})
new Promise((resolve,reject)=>{
    setTimeout(function() {
       console.log('async task2 is complete');
       resolve(); 
    },2000)

}).then(() => {
    console.log("promise consumed 2")
});
const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName: "mohit",password:895432});

    },3000)
})    
promiseThree.then((user) => {
    console.log(user)

});

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({userName: "mohit singh",password:895432});
        }else{
            reject("Error: something went wrong");
        }

    },4000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Promise done")
});

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({userName: "javaScript",password:1234});
        }else{
            reject("Error: JS went wrong");
        }
    },5000)
 
})
// async function consumePromiseFive() {
//     try {
//     const response = await promiseFive
//     console.log(response);
//     } catch(error){
//         console.log(error);
//     }

// }
// consumePromiseFive(); 
const async=(async()=>{
    try {
        const response = await promiseFive
        console.log(response);
        } catch(error){
            console.log(error);
        }
})
()
const async2=(async()=>{
    try{
//     const response = await fetch('http://jsonplaceholder.typicode.com/users')
    const response = await fetch('https://api.github.com/users/Mohit13333')
//     // console.log(response);
    const data=await response.json()
    console.log(data);
    } catch(error){
        console.log("e",error);
    }
})

()
// fetch('https://api.github.com/users/Mohit13333')
// .then((response)=>{
//     return response.json()

// })
// .then((response)=>{
//     console.log(response)

// })
// .catch((error)=>{
//     console.log("error",error);
// })

