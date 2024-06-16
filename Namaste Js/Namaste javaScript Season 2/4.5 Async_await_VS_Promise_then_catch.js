// Async/Await   VS   Promise.then/catch

/*
what should we use

- async/await is just the "syntactic sugar" over the .then() and catch().
    =>what it means is; when we use async/await js behind the scenes using its own .then() & .catch() only.
        so basically the only effect which is happening is heppening in the code how you write.
        js will treat your program exatly how it would tret with older approach.


 what is better async/await or then().catch() ??
=> both of them are better.
    async/await is a new way of writing code.
    -in async/await we don't have to do promise chaining. like we don;t have to deal with lots of callbacks.

    its a personal choice what to use.
*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Why Does an async Function Return a Promise?

=>An async function in JavaScript automatically returns a promise. This is by design to ensure that the asynchronous nature of the function is preserved and can be handled appropriately. Here are the main reasons why this is necessary:

1. Consistency: By returning a promise, async functions provide a consistent interface for handling asynchronous operations. This allows you to use .then(), .catch(), and await with any async function.
2. Execution Flow: When an async function encounters an await statement, it pauses execution at that point. Returning a promise allows the function to "pause" and resume execution later. The calling code can continue executing while the async function is waiting.
    (so that when function is suspended at await statement the promise will be returned by function so that rest code after our async function call can continue execution.)
3. Error Handling: If an error occurs within an async function, it can be caught and handled using .catch() on the returned promise. This ensures that errors can be managed effectively in asynchronous code.


If there are multiple await statements, the promise returned by the async function does not resolve until all await statements have completed, and the function has finished executing. If the async function has no return statement, the resolved value of the promise will be undefined.


async function always returns a promise.
*/