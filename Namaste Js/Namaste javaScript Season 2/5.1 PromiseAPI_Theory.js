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