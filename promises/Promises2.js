// Promise - is nothing but promise of code execution
// the code in promise will be executed in background and when is it executed we'll be notified using.then.
//The code either executes or fail in both the cases the subscriber will be notified
//the syntax of promise lloks like this
    // let promise = new Promise(function(resolve, reject){
    //     //execute
    // })
// the callback given is built in callback given by Js engine
//resolve and reject are callbacks given by Js, they are called like this
//resolve(value) - if the job is finished successfully
//reject(value) - if the job fails

//The promise object returned by new Promis has these properties:
//state- initially pending then fulfilled then rejected
//result - initially undefined then changes to value if resolved (resolve(value)) or error if rejected (reject(error))

//consumer-
//then & catch
//the consuming code receive the final result of the promise through then and catch
//promise.then(function(result){/*Handle*/}, function(error){/*Handle Error*/})
//if we are only intrested in successful completion,
//we can provide only one function argument to .then()
    //  let promise3 = new Promise(resolve=>{
    //     setTimeout(()=>resolve("done"), 1000);
    //  })
    // promise3.then(alert)    //here instead of writing my function am using alert, this will print the value given


//If we are only intrested in errors we can use null as first argument:
// .then(null, function(){}) or we can use catch



//all promises will run paralally
let promise1 = new Promise(function(resolve, reject){
    console.log('promise is pending');
    setTimeout(function(){
            console.log('promise is fulfilled');
            resolve(true);
    }, 5000);
})
let promise2 = new Promise(function(resolve, reject){
    console.log('promise is pending');
    setTimeout(function(){
            console.log('promise is rejected');
            reject(new Error('error occurred'));
    }, 5000);
})

//to get the value
promise1.then((value)=>{
    console.log(value);
})

//to get the errror
promise2.catch((value)=>{
    console.log(value);
})
promise2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error)
})


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let promise = new Promise(function(resolve, reject){
    // alert('hello');
    // console.log('hello in promise');
    // resolve(56);
// })
// console.log('hello one');
// setTimeout(function(){  
    // console.log('hello two in 3seconds')
// }, 3000);
// console.log('Hello three');
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++