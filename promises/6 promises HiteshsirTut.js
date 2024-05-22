//Hitesh sir's tut


// fetch("https://smoething.com").then().catch().finally();

//promise also reduces callback hell
//callback hell - callback inside callback

//get one instance of Promise object
const promise1 = new Promise((resolve, reject)=>{
    //do an async task
    //DB calls, cryptography, network
    setTimeout(()=>{
        // console.log('async task is complete');
        resolve();
    }, 1000)
})

//.then is connected to resolve
    // promise1.then(()=>{
    //     console.log("promise consumed");
    // })


//when resolve is called, .then will get executed
    // new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         console.log("async task 2");
    //         resolve();
    //     }, 1000);
    // }).then(()=>{
    //     console.log("Async 2 resolved");
    // })

//creating promise
    // const promise3 = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve({username:"sh", email:"sh@123"});
    //     }, 1000);
    // });

//consuming promise
    // promise3.then((user)=>{
    //     console.log(user);
    // })

// -----------------
const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"sh", password:"1234"})
        }
        else{
            reject('ERROR: something went wrong');
        }

    }, 1000);
})
//chaining-the value return by previous .then will be available to next .then()
// Eg:=
    //this way it won't work
    // const username = promise4.then((user)=>{
    //     console.log(user);
    //     return user.username;
    // })
    // console.log("username", username);

    promise4.then((user)=>{
        console.log(user);
        return user.username;
    }).then((username)=>{
        console.log(username);
    }).catch(function(error){
        console.log(error)
    }).finally(()=>{
        //promise is resolved or rejected.
        //after certain point of time this will get executed
        console.log("the promise 4 is either resolved or rejected")
    })

    // -----------------------------

    const promise5 = new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            let error = true;
            if(!error){
                resolve({username:"javascript", password:"123456"})
            }
            else{
                reject();
            }
        }, 1000)
    })
  
   async function consumedPromiseFive(){
        try{
            const response = await promise5
            console.log(response)
        }catch(error){
            console.log(error);
        }
   }
   consumedPromiseFive()

// ----------------async await & .then------------------------   

//    async function getAllUsers(){
//     try{
//         console.log("calling fetch")
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log("fetch response",response)
//         const data = await response.json()
//         console.log("data",data)
//     }catch(error){
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    // console.log(response);
   return response.json()
}).then((data)=>{
    console.log("data",data);
})
.catch((error)=>{
    console.log("error",error)
})