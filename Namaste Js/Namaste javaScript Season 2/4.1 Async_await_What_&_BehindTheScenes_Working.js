/*
what is async?
what is await?
how async await works behind the scenes?
 examples of using async/await
error handling
async await vs promise.then/.catch
*/

/*
async is a keyword that is used to create async function

*/

// const pr = new Promise((resolve, reject)=>{
//     resolve("promise resolved");
// })


//always returns a promise.
// async function getDataValue(){
// return "string";
// return pr;
//}

//async function always return a promise.
//if we return something else from async function like string,it will wrap it inside a promise and return a promise.
//but this function will always return a promise.

// const dataPromise = getDataValue();
// console.log(dataPromise);

// dataPromise.then((data)=>{
//     console.log("data: ",data);
// })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    ... async & await combo is used to resolve promises.
    write await infront of promise to be resolved. once its resolve the value willl come in val

    await is a keyword that can only be used inside an asyc function.
*/
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise resolved.");
        }, 5000)
    });
   
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2 resolved.")
        }, 10000);
    })

async function handlePromise() {
    console.log("Hello world");
    //js engine is waiting for promise to get resolved.
    const val = await p;
    console.log('line after await in async function');
    console.log(val);

    const val2 = await p2;
    console.log('line after await in async function 2');
    console.log(val2);
}
handlePromise();

console.log("rest code outside async function");

// (function getData(){
//     p.then((data)=>{
//         console.log(data);
//     })
//     console.log('line after .then()');
// })();
//output :
// line after .then()
// promise resolved.


/*
js engine appears to be waiting, it's not actually waiting.
it's not actually occupying the callstack.
*/

//+++++++++++++++++++++++++++ What happens behind the scenes.
/*

1.
-> global EC
-> call stack 

console: 
-----------------

2.
now,
-> handlePromise()
-> global EC
-> call stack

console: hello world.
......
as soon as this line executes const val = await p; handlePromise() execution will suspend.
& it will move out of the call stack.
-once the p1 is resolved then only it will move ahead.
----------------

3.
-> global EC
-> call stack

console:  Hello world 
          rest code outside async function

rest of the code execution will continue.     
-----------------
4.     
-after promise p1 is resolved; The resolved value of p causes the continuation of handlePromise().
-However, handlePromise will not be immediately pushed back onto the call stack. Instead, it is placed in the Job Queue (also known as the Microtask Queue).
-The JavaScript engine will only process items from the Job Queue once the current execution context (the call stack) is empty.


-> global EC
-> call stack
--------------------

5.
-> call stack   //Empty
-------------------

6.
-Once the main script (global context) finishes executing (i.e., the call stack is empty), the event loop checks the Job Queue.
-At this point, handlePromise is resumed, and the following lines of code after await p are executed. (i.e handlePromise() will start executing from where it left.)

-> handlePromise()
-> call stack

console: 
        line after await in async function
        promise resolved.
--------------------

7.
-The second await p2 is encountered, causing handlePromise to be suspended again.
-The promise p2 starts its 10000ms timer.

-> call stack   //Empty
--------------------

8.
-After an additional 5000ms (10 seconds from the start), promise p2 resolves.
-The resolved value ("promise 2 resolved.") is available.
-again handlePromise is placed back into the Job Queue.
-Once the call stack is empty, the engine processes the Job Queue again.
-handlePromise resumes

-> handlePromise
-> call stack


console: 
        line after await in async function
        promise resolved.
        line after await 2 in async function
        promise 2 resolved.
------

Remember the program is not stopped, the function is suspended.

NOTE: as we are creating both the promises in the start of the script, their time will start at the starting of script execution itself.

    in handlePromise() we're only waiting for promises to get resolved.
    for simplification we can write functions to start primise execution & return it.
    like this:-

                function getPromise1(){
                    const p = new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        resolve("promise resolved.");
                    },5000)
                
                    });
                    return p;
                }
                function getPromise2(){
                    const p2 = new Promise((resolve, reject)=>{
                        setTimeout(()=>{
                            resolve("promise 2 resolved.")
                        }, 10000);
                    })
                    return p2;
                }
                async function handlePromise(){
                    console.log("Hello world");
                    const val = await getPromise1();
                    console.log('line after await in async function');
                    console.log(val);

                    const val2 = await getPromise2();
                    console.log('line after await in async function 2');
                    console.log(val2);
                }
handlePromise();


*/
