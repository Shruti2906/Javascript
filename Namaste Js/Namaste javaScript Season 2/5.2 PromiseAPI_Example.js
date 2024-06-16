/*
    There are 4 promise APIs which are majorly important: 
    1. Promise.all()
    2. Promise.allSettled()
    3. race()
    4. Promise.any()    
*/
/*
  1.  Promise.all();
        -It is used to handle multiple promises together. (if there are multiple api calls, multiple promises it will handle that.)
        -it takes a array(it basically takes iterable) of promises as the input.
        -used when we have to make paralled API calls & get the results.
        eg. we there are 10 users and we want to get user info for all of these users.
            here we have to make parallel api calls & get the results.
        -also know as "FAIL FAST".

    promise.all([p1, p2, p3]);

    p1 -> 3 seconds
    p2 -> 1 sec
    p3 -> 2 sec

success case:
    the result will be array of results of all of these successfull API call's values.
    -it will wait for all of them to finish. & gives the result.
    -so it will give result after 3 seconds.

failure case:
    -one of the promises gets rejects.

    p1 -> 3 sec
    p2 -> 1 sec failed/rejected
    p3 -> 2 sec

    as soon as any of the promise gets rejected, promise.all() will throw the error.
    promise.all() will give the same error as given by the rejected promise.
    so, here the
                output is: Error

    after 1 second it will throw an error, it won't even wait or see if other promises are resolved or rejected or whatever.
     i.e as soon as any promise gets rejected. promise.all() just throws the error.   
*/
//NOTE: we're using the dummy promises, so that we can control the time for their execution.
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("P1, success");
        },3000)
    })
    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // resolve("P2 success");
            // reject("P2 Fail");
        }, 1000)
    })
    const p3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("P3 Success");
            // reject("P3 Fail");
        }, 2000);
    })
    // Promise.all([p1, p2, p3]).then((result)=>{
    //     console.log("result: ", result);
    // })
    // .catch((err)=>{
    //     console.error(err);
    // });
//success=> result:  (3) ['P1, success', 'P2 success', 'P3 Success']  //after 3 seconds
//Failure=> P3 Fail     //after 2 seconds
/*
    2.  promise.allSettled()

success case:
    p1-> 3 takes sec
    p2-> 1 sec
    p2-> 2 sec

    after 3 sec; result -> [val1, val2, val3] 

failure case:
    p1-> 3 takes sec
    p2-> 1 sec  rejected
    p2-> 2 sec

    even after p2 gets rejected promise.allSettled() will wait for all promises to get settled.
    after 2 seconds, we'll get 
                             result -> [val1, Error2, val3]
*/
    const p11 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("P11, success");
        },3000)
    })
    const p22 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("P22 success");
            // reject("P22 Fail");
        }, 1000)
    })
    const p33 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("P33 Success");
            // reject("P33 Fail");
        }, 2000);
    })
    // Promise.allSettled([p11, p22, p33]).then((result)=>{
    //     console.log("result: ", result);
    // })
    // .catch((err)=>{
    //     console.error(err);
    // });
//success=> result:  (3) ['P11, success', 'P22 success', 'P33 Success']  //after 3 seconds
//Failure=>//after 3 seconds
//          result:  [ {p11 success},{p22 success},{p33 success} ]
/*
    3. Promise.race()

        -Its like race & the person who finishes first will be th e winner.
        -It will give you the result of first settled promise. irrespective of whether it is sucess or failure. 

Success Case: 

    Promise.race([p1, p2, p3]);
    p1-> 3 seconds
    p2-> 1 seconds
    p3-> 2 seconds

    after 1 seconds, it will give the result of 2nd promise (val2).

Failure case: 
    What if first promise is error:
    p1-> 3 sec
    p2-> 1 sec  Failed
    p3-> 2 sec

        it will return the result of first settled promise.
        if p2 first settled and returned Error; Promise.race() will return Error.
 */
        const p111 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // resolve("P111, success");
                // reject("P111 Fail");
            },3000)
        })
        const p222 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // resolve("P222 success");
                reject("P222 Fail");
            }, 1000)
        })
        const p333 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // resolve("P333 Success");
                reject("P3333 Fail");
            }, 2000);
        })
        // Promise.race([p111, p222, p333]).then((result)=>{
        //     console.log("result: ", result);
        // })
        // .catch((err)=>{
        //     console.error(err);
        // });
/*

    4. Promise.any()
            -It will wait for the first promise to get successfull.

Promise.any([p1, p2, p3]);

success case:
    p1-> 3 sec
    p2-> 1 sec
    p2-> 2 sec
    
    Promise.any() will return the result of p2; as p2 is settled first and p2 is fufilled.
    result-> val2
    
Failure case:
    p1-> 3 sec
    p2-> 1 sec  Rejected
    p2-> 2 sec  Rejected.
    
    as p2 is settled first; but threw an Error(i.e rejected) thus result of p2 will be ignored.
    and Promise.any() will wait for next promise to get settled.

    say, p2 also fails, it will wait for p3 to get settled.

    and now,
        if p3 is resolved i.e successfull, it will give result of p3 as final result.
            resulr-> val3
        
        but, if p3 also fails; now the result of Promise.any() will be aggregated error.
            result-> [Error1, Error2, Error3]
*/
const p1111 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("P1111, success");
        reject("P1111 fail");
    },3000)
})
const p2222 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("P2222 success");
        reject("P2222 Fail");
    }, 1000)
})
const p3333 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("P333 Success");
        reject("P3333 Fail");
    }, 2000);
})
Promise.any([p1111, p2222, p3333]).then((result)=>{
    console.log("result: ", result);
})
.catch((err)=>{
    console.error(err);
    console.error(err.errors);
});
//Success: Result =>    //wait for first resolved(i.e success) promise 
//Failure: Result => [aggregate error   //aggregate all the errors & give an aggregate error.
//                    to get all the error(i.e all the errors returned by all promises console.log(err.errors))then we'll get ressult=> [err1, err2, err3]`