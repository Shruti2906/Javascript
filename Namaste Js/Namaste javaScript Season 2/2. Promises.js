/*
Promises:
    Promises are used to handle async operations in javascript.


 */
// --------
const cart = ["shoes", "pnats", "kurtas"];

// crateOrder(cart); //returns orderId

// proceedToPayment(orderId);


// -----------
//both of these are asynchronous i.e we don't know how much time they might take to execute.
// and they're dependent on each other. i.e we can only proceed to payment once we've order id.

//how to handle this situation using callback.
// wrap proceedToPayment() function inside the callback function. 
// function (){
//     proceedToPayment(orderId)
// }

// and pass this callback function to crateOrder().

// crateOrder(cart, function (){
//         proceedToPayment(orderId)
// })

// ------------
//now its responsibility of crateOrder to place order first and then call the callback()
//this is how we used to write async code using calllbacks.
// But there are 2 major issues with this approach
//  1.CallBack hell
//  2. Inversion of control
// -------------------

// how to handle this situation using promise.

/*
 now createOrder won't take a callback, but it will return a promise.
 and this promise we can assume it as an object with some data value in it.
 and this data value will hold whatever this createOrder api will return to us.

 this createOrder() is an async operation we don't know how much time it will take for execution.

 but as soon as js engine executes this line (const promise = createOrder(cart);),
  it will return us a promise which is nothing an empty object with some data. & program will go on executing.
    {data: undefined}

    and after 5sec, 10 sec or whatever time it takes, whenever this operation is completed; this object (i.e promise) will be filled with data automatically.
    and we'll have order details in it after whatever async time it will take.

    .then() is the function available in the promise object.
            - we'll simply attach our callback function to this then() function.
            -and once we have data in our promise object, the callback function that we attach to our promise will be automatically executed.

-------
    What's the diffrence ???
   =>  We were passing our callback function to another function. here we're attaching the callback function to a promise object, not passing our callback to some other function.
        -once createOrder has done its job, it will fill the result in the data in promise object. and it will automatically invoke our callback. & we have our callback with us.
    

*/
// const promise = createOrder(cart);

// promise.then(function(){
//     proceedToPayment(orderId)
// })

const github_api = 'https://api.github.com/users/shruti2906';

const user = fetch(github_api); //fetch returns a promise.

console.log(user);

user.then((data) => {
    console.log(data);
})

console.log("end line");

/*
    Promise is a special object in js.
    there can be only 3 states inside the promise.
    1.pending
    2.fulfilled
    3.rejected

    -Also promise objects are 'Immutable'
            i.e we cannot edit the data(i.e result) in promise.

    -Promise gets resolved only once.

    -{
        data: undefined/resultOfAsyncOperation
        state:pending/fulfilled/rejected
     }
    Interview

What is promise in js?
=> Promise object is a placeholder which will be filled later with the value.
    promise object is a placeholder for a certain period of time untill we receive a value from a async operation.

    OR
    a conatainer for future value.

    MDN Defination
**  ""  Promise is a object representing eventual completion of an async operation."

*/
//previous multiple callbacks- callbackhell
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance(function () {
                sendMailToClient()
            });
        })
    })
})
//Promise Chaining
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(){
    sendMailToClient();
})
//# **NOTE: if we want the data from previous then() to available in next then(), you must return it from previous then().
// now our code does not grow horizontally but vertically.
createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then(() => sendMailToClient())
//same code with arrow function will look like aboce - Its developer's choice, which syntax to use!!!!!


/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
What is promise in js?

->Promise is an Object that represents eventual completion of an async operation.

Why do we need promise??
->
    -explain from simple multiple dependent async functions.
    -then, how to handle this using callbacks.
    -then, what are the issues of this approach
            -1. callback hell
            -2. inversion of control
    -explain promise object,
                    {
                        state: pending/fulfilled/rejected
                        data: result of async operation
                    }
            Promise is a special object in js.
            there can be only 3 states inside the promise.
            1.pending
            2.fulfilled
            3.rejected

            -data, will contain 'undefined' when promise is in pending state.
                    once the promise is resolved its state will change to fulfilled and this 'data' property will contain result of the async operation.

            -Also promise objects are 'Immutable'
                    i.e we cannot edit the data(i.e result) in promise.

            -Promise gets resolved only once.

            -Thus we can trust the promise.
     -then, explain .then() function of promise.
     -explain how promise chain works.
     -and how it resolves both callback hell & inversion of control.   
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */