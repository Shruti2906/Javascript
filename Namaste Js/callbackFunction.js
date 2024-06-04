//What is call back functions in Js ??
//blocking Main Thread in js
//Power of call backs
//Deep about Event Listeners
//Closures Demo with Event Listeners
//Scope Demo with Event Listners
//Garbage Collection & removeEventListeners.


//What is call back functions in Js ??
    // functions are first class citizens in js. i.e they can be passed into another function.
    // this function that you pass on to another function is called callback function.

    // these callback functions are very usefull in js, 
    // they give us access to the whole asynchronous world in the synchronous single threaded language.
/*Remember: - js is a synchronous single threaded language */

//as the function y is passesed as an argument to another function.
//its (y()) is called callback function.
    // function x(y){}
    // x(function y(){
    //     console.log("y");
    // })

// --------------
//js is synchronous single threaded language, it executes code one line at a time & in order.
//here setTimeout will take its callback function and attach a timer of 5000 mili seconds to it.
//callback functions give us the power of asynchronity.
//it will execute this function after the timer expires. it does not for 5000ms for this timer to expire.
//whatever needs to be done after 5sec, that feature(or that piece of code) as a callback function to this setimteout. which will be later executed.
//now it will move on and execute next line of code.
//Order of execution :=>
//in browser -> inspect tool -> put debugger on console.log("timer");  &  console.log("y");
//-> observe call stack;    y
//                          x
//                          anonymous(global EC)
// -> after console.log(y) i.e all code execution complete;  
// call stack ->  empty
//then after 5 seconds
// call stack ->  anonymous(global EC)

    // setTimeout(function(){
    //     console.log("timer");
    // }, 5000);
    // function x(y){
    //     console.log(x);
    // }
    // x(function y(){
    //     console.log("y")
    // })

// --------------------------------------------------

// ....... Blocking The Main Thread .......

//**  So, js has just one "call stack", & you can also call it as the "Main Thread".
// everything whateveer is executed inside your page is executes through the call stack only.
//So, if any operation blocks this call stack, that is known as the "Blocking The Main Thred".

//suppose (in above eg) function x has very heavy operation which takes around 20-30 seconds to complete that function.
//by that time; because js has only one thread; It won't be able to execute any other function in the code. That means everything in the code will be blocked.
//we should never block the call stack...we should always try to use async operations for things which takes time.

//Summary: If js did not have this first class functions(i.e if we did not have this callBack functions; i.e we could not have pass functions to another functions),
// we could not have been able to do asynchronous operations.
//So, using this web API (setTimeout) & the callback functions we are able to do asynchronous operations.