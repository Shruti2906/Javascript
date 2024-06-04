//functions are heart of Js
//you can assign a function to a variable also. i.e function acts like a value.

// 1. function statement Or Function declaration
    // function a(){
    // }

//2.  function expression
    // var b = function(){
    //     console.log("b called");
    // }

//3.  Named Function Expression
    // var b = function xyz(){
    //     console.log("b called");
    // }
    // b() //b called
    // xyz() //referenceError
//beacuse xyz() is not a function inside the outer scope. but it is created as a local variable.


/**  Difference Between Function Statement & Function Expression.
            The major diff in these 2 is hoisting

        // a();    //a called
        // b();    //TypeError: b is not a function.
        // function a(){   console.log("a called");
        // }
        // var b = function(){
        // }
*/

//4.  Anonymous function
    // function (){}    //error- cannot declare like this.
    // a function does not have its own identity.
    // Anonymous functions are used in a plce where functions are used as a value.


//First class functions
    // The ability of functions to be used as values, and can be returned from function
    // we can pass functions as an argument, we an return them from function.
