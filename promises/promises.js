//Are there still reasons to use promise libraries like Q or BlueBird now that we have ES6 promises?:
//  https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we#:~:text=native%20promises%20have%20very%20very,features%20then%20use%20those%20libraries.

const promise1 = new Promise(function (resolve, reject){
    //do async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
})

promise1.then(function(){
    console.log("promise consumed");
})


new promise(function(resolve, reject){

    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", em:"chai@eg.com"})
    }, 1000);
})
promiseThree.then(function(){
    console.log(user);
})

promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "shruti", password: "123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log()
})