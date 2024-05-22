
let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // console.log("value 1");
        // resolve('v1');
        reject('promise 1 rej')
    }, 10000);
})

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // console.log("value 2");
        resolve('v2');
    }, 2000);
})

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // console.log("value 3");
        resolve('v3');
    }, 3000);
})


//here if any of the 3 promises result in reject/error, it will give error & nothing will be executed.
let promise_all = Promise.all([promise1, promise2, promise3])

    // promise_all.then((value, error)=>{  //when all 3 promises are resolved, then this handler will be executed.
    //     console.log(value);
    // })

    //let's handle the error
    // promise_all.then((value, error)=>{  //when all 3 promises are resolved, then this handler will be executed.
    //     console.log(value);
    // }).catch((error)=>{
    //     console.log('error: ',error);
    // })


//Promise.allSettled it will give status and result of all promises even if its error
    // let promiseSettled = Promise.allSettled([promise1, promise2, promise3]);
    // promiseSettled.then((value, error)=>{
    //     console.log(value);
    // })

//Promise.race  waits for first promise to settle and its result/error becomes the outcome
let race = Promise.race([promise1, promise2, promise3]);
race.then((value, error)=>{
    console.log(value);
}) 
//Promise.any  waits for first promise to fullfill (and not rejected) and its result becomes the outcome,
// throws aggregate error if all the promises got rejected.
let any = Promise.any([promise1, promise2, promise3]);
any.then((value, error)=>{
    console.log(value);
}) 
//Promise.resolve  makes resolved promise with the given value.
let resolve = Promise.resolve(200);
resolve.then((value, error)=>{
    console.log(value);
}) 