//********  Js Execution context  **********

    //Execution context of different runtime environments are different
    //eg execution context of all of these runtimes are different nodeJs, browser, Deno, bun all 
    //when this execution context is created 'this' keyword is used to refer to it.

    //in browser, this refers window object


//types of execution context
    // -Global Execution context
    //- Function execution context
    // -Eval Execution context

//program in Js executes in 2 phases
// 1. memory creation phase/memory phase/creation phase
//2. execution phase

//in memory creation phase nothing gets executed, only memory gets allocated to declare variables etc

//Let's understand with an example how the Js code executes
let val1 = 10;
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

//step 1: Global execution contex/global environment is created and 'this' will point to it.
//step 2: memory creation phase(MCP): val1=undefined, val2 = undefined, addNum = defination, result1 = undefined, result2 = undefined
//step 3: Execution phase: val1 = 10,  val2 = 5, addNum = {new variable environment + Execution thread}
//              whenever any function is called new variable environmet+execution thread is created.
//      as {new variable environment + Execution thread} is created for addNum() it will go through same phases:-
//      memory phase : val1=undefined, val2=undefined, total=undefined
//      execution context num1 = 10, num2=5, total=15, return total in parent(here global execution context).
//      above created execution context will now be deleted.
//  result1 = 15, addNum = {new variable environment + Execution thread}  
//      ..same thing memory creation & execution for addNum, the result will be returned to parent context and this context will be deleted.
//  result2 = 12
//


///call stack = {       //top of stack
//      addNum
//      global execution context at bottom
// }
//LIFO_last in first out