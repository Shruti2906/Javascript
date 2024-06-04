
// Closure: 
//     A closure means a function bind together with its lexical environment.
//     MDN:
//         A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


//in below example, function y() was returned from x().
//as js is synchronous after line no 17 the execution context n all which was created for x() will be removed from call stack n everywhere.
//so x() does not exist.
//but when called z(); it prints a = 7 ..!!!
    // function x(){
    //     var a = 7;
    //     function y(){
    //         console.log(a);
    //     }
    //     return y;
    // }
    // var z = x();
    // console.log(z);
    // z();
    //output:   7
//when functions are returned from another function; they still maintain their lexical scope.
//they remember where they were actually present.
//so when you returned function y. not just the code but the 'closure' was returned.
//that closure enclosed function along with its lexical scope. that was returned & stored inside z.
// -----
    // function x(){
    //     var a = 7;
    //     function y(){
    //         console.log(a);
    //     }
    //     a = 100;
    //     return y;
    // }
    // var z = x();
    // console.log(z);
    // z();
    //output:   100
//because function y holds the reference to a's memory location, not the value itself.
//when z() is running it will try to find out that reference "a". & when z() is executed the reference points to 100.
//that means, that 100 is still in the memory preserved because of closure and when x was gone it was not garbage collected. because it has to be used later.


//here we can see 2 closures for z() & x().
//in browser->inspect->sources->put a debugger on console.log(a,b) and see clure x & cloure z.
function z(){
    let b = 2000;
    function x(){
        var a = 7;
        function y(){
            console.log(a);
        }
        y();
    }
    x();
}
z();

/*Uses of closure:
    -Module Design Pattern
    -Currying
    -Functions Like once()
    -memoize
    -maintaining state in async workd
    -setTimeputs
    -Iterators
    -and many more...
*/


/**
Use of Closures in Data Hiding:

function counter(){
    let count = 0;
    return function increamentCount(){
        count++;
        console.log("count:", count);
    }    
}
let cnt = counter();
cnt();
cnt();

let cnt2 = counter();
cnt();
*/

/* Disadvantage of closure :
        -There could be over consumption of memory in closures.
        every time a closure is firmed, it consumes a lot of memory, & sometimes those closed over variables are not garbage collected till the program expires so that means its accumulating a lot of memory.
        and if not handles properly it could also lead to memory leaks. because the memory is accumulated over time & it can also freeze the browser.

*/








//why the closure is not visible for function z when nothing in z() is being referred in x()??
// doubt,   where exaclty this closure was stored???? is was in call stack or where????? when EC get created where it gets created & where its stored.