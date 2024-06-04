/*
is js syncronous or asynchronous
single threaded or multithreaded



evrything in ja happen inside an execution context

    you can image execution context as big box and it has 2 components.

    memory(/variable environment)      and     code(/thread of execution)


Js is synchronous, single threaded language.
    -that means js can only execute 1 command at a time and in a specific order.

-----------
What happens when you run Js code?

    when run a js project, execution context is created.
    eg.
            var n=2;
            function sqaure(num){   //line no 2
                var ans = num*sum;
                return ans;         //line 4
            }
            var sqaure2 = sqaure(n); //line 6
            var sqaure4 = sqaure(4);

        when we run this  code, global execution context is created.
        this execution context is created in 2 phases,
            1) memory creation
            2) code execution
        
        1) memory creation:
                -in this phase, js will allocate the memory to all the variables and functions
                n: undefined
                sqaure: //stores the whole code of function inside memory space
                        function sqaure(num){
                            var ans = num*sum;
                            return ans;
                        }
                sqaure2: undefined
                square4 = undefined
        
        2) code execution:
                now js once again runs through this whole js program line by line.
                whenever it encounters the line var n=2, it places 2 inside n.
                        n:2     //before it was undefined
                there is nothing t o execute from line no 2 to 5,
                at line 6, here is function execution.
                when this line is executed, again entire new execution context is created inside code execution part.
                        this EC is also created in 2 phases.
                        i] memory creation phase: 
                                memory is allocated to variables & functions(involves parameters & other variables & functions) 
                                num : undefined
                                ans : undefined
                        ii] code execution:
                                num : 2
                                ans : 16 //num*num is executed and result is assigned to ans
                                at line no 4, 'return' encountered so, stop execution and return the whole control back to the execution context, where the function was invoked

                now the whole EC is deleted and the control goes to line no 6

              lly,
                for line no 6, new EC is created....

                once the line no 7 executed js is done with the execution and the whole execution Context also goes off.
                        

Call Stack:
        -Is the stack where all the execution contexts are kept.
        -call stack maintains th order of execution of execution contexts.
        -call stack is also named by some fancy names:
            1. execution context stack
            2. program stack
            3. control stack
            4. runtime stack
            5. machine stack   


************************** Hoisting in Javascript **************************************************

Hoisting is s phenomena in the javascript by which you can access these variables
and functions even before you have initialized it, or you've put some values in it.

you can access it without any error.



1.
var x = 7
function getName(){
    console.log("javascript");
}
getName();
console.log(x);
------------------
2.

getName();
console.log(x);
var x = 7
function getName(){
    console.log("javascript");
}

//output:
    javascript
    undefined

-----------------
3.

getName();
console.log(x);

function getName(){
    console.log("javascript");
}

//output:
    javascript
   Error : x is not defined
---------------

not invoke, just try to log the function
console.log(getName);
function getName(){
    console.log("javascript");
}
output:
function getName(){
    console.log("javascript");
}

//this is because hoisting, how js executes the code.
//even before this code is executing the memory is allocated to this code.

-----------------------------

In The Browser

inspect -> sources -> refresh browser tab(to run js file inserted in html current page)
    ->checl scope-> global

-----------
    getName();
    var getName = () => {
        console.log("javscript");
    }

    output: index.js:2 Uncaught TypeError: getName is not a function
        at index.js:2:1

//Because-
    when we write var getName = ()=>{}
    getName is treated as variable and assigned 'undefined' in the memory creation phase.

     And when execution reaches var getName= ()=>{}, js replace undefined with whole function code

************************ Functions In Javascript ***************************************************************************

var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x);
}    
//output:
10
100
1       
--------------

var a;
console.log(a===undefined)
//output:
    true


******************The Smallest Javascript Program********************************************************************

The smallest js program is empty file.
though there is nothing to setup but still js engine still does its job. of creating execution context and it also creates global object.
which is 'window' in case of browser.

when on our console we write - window,
    we get window object with lots of funtions and variables in it.
    these functions & variables are created by js engine and available in the global execution context

    And like this window js also creates 'this' keyword.

window is global object which is created along with the global execution context.

so whenever any js program runs, a global object is created, a global EC is created, along with this global EC a 'this' variable is created.

this===window //true:

    -whenever js is running, there has to an js engine executing it.
        like chrome has v8, safari has it own, node has its different etc.
        all these js engines has this responsibility of creating global object.
        in case of browser it is 'window' in case of node it is something different.
    
    -whenever an EC is created a 'this' is created along with it, whether its global EC or functional EC,
     And so at global level this points to the gloabl object(i.e the window in case of browser) thus, this===window


Global space: 
    is nothing but any code you write inside js not inside a function.
    var x = 10
    function fun(){ 
        let y=9
    }
    console.log(x)
    console.log(window.x)
    console.log(this.x)
    x is attached to gloabla object,
    y is not in global space.

********************** Undefined & Not Defined in js *************************************************************

js is loosly typed language:
    which means it doe snot attaches its variables to any specific data types.
    eg.
        var x=10
        x = "string"
        x = true

some people also call it as weakly typed language.

** Never do this:
    var x = undefined

        it could lead to inconsistancies, 
        undefined is like a placeholder which is kept inside the variables & it says that in the whole code that variable is not assigned anything.

********************** Scope Chain, Scope & Lexical Environment ****************************************************************************************************

Scope of global EC is what you can access inside global EC.


scope in js is directly related to lexical environment.
    // function a(){
    //     console.log(b);
    //     function c(){
    //         console.log(b);
    //     }
    // }
    // var b = 10;
    // a();

    function a(){
        var b = 10;
        console.log(b);
        function c(){
            console.log(b);
           }
    }
    console.log(b);
    a();

Scope: The scope means where we can access the specific variable or a function inside our code.

    2 aspects:
    what is the scope of this variable,
    is this variable x inside the scope of the function

    whenever a EC is created a lexical environment is also created.
   
   " lexical environment is the
        local memory along with the lexical environment of its parent. "
    
    lexical means in hierarchy or order or in a sequence(where is written physically).
        eg. we can say c() function is lexically inside a() function
                
    eg.
        lexical environment of function a iS its local memory space + reference to its parent's (i.e a()'s) lexical environment

        lexical environment of function b is its local memory space + reference to its parent's (i.e global EC's) lexical environment

        lexical environment of Global EC is its local memory(i.e global memory) + null (as it has no parent so reference to parent's lexial environment will refer to null)


so whenever the EC is created you also get reference to the lexical environment of its parent.

Scope Chain: chain of lexical environment and parent references.

    so, when any variable is not available in a, it will find it in b, if its not in b, it will find it in global context.
this is way of pointing is nothing but scope chain.

    so, "The Chain Of Lexical Environment Variables is Know as The Scope Chain".
        And It Defines whether the variable or function is present inside the scope or not.
            if the scope chain is exhausted and variable is not found that means it is not inside the scope chain.


in browser inspect tool-> sources-> call stack-> gloabal EC(anonymous) //this is scope or we can say lexical environement of global EC.

-> a => Local
     => Global
     //this is lexical environment of a (local memory of a() along with its parent's lexical environment )

-> c => Local
     => Closure (a)
     => Global
     //this is lexical environment of a (local memory of a() along with its parent's lexical environment & its parent(global EC) lexical environment )


**************************** Temporal Dead Zone ***********************************************************************

//let & const declarations are hoisted, but they they're hoisted in very different way.
//so we can say that they are in the temporal dead zone for the time period.

console.log(b);
let a = 10
var b = 100;

//in above code, memory is allocated to variable b and it is attached to the global object(thus 'undefined' is assigned to it before initialization)
//similalry memory is alloated to variable a, but they (let & const) are stored in a different memory space than global. and you 
//      can NOT access these let & const declarations before its initialization (i.e before you've put some value in them).

//### " Temporal Dead Zone:
//      is the time since when this 'let or const' variable is hoisted and till it is initialized some value."
// #############
/**
 * So, The Phase from which variable a is hoisted and till it is initialized with some value (10), this phase is temporal dead zone.
 

 console.log(a);
 let a = 10;
 output: Error: Cannot access 'a' before initialization
 //It means Js engine recognizes variable a but cannot access it, as its not initialized.
 //i.e its in temporal dead zone.

 whenever we try to access a variable inside the temporal dead zone it gives us the reference error.
 we cannot access the variables in the temporal dead zone, you can only access them once they're initialized some value.


 let & const are maintained in a seperate spce/storage(i.e reserved space for let & const) they are not attached to the global object(window).
so you won't be able to access let variable like this => window.a or this.a
----------

ReDeclaration is also not possible for let & const.
eg.
    let x = 10
    let x = 200 //Syntax error..can Not redeclare it in a SAME SCOPE.
----------
"const" is even more strict than let.
eg
    -const cannot be re-initialized
        const x = 10
        x = 20  //Type error

    -'const' declarations must be initialized.
        const x;    //syntax error, It has be be initialized
------------

TypeError:
    assignemnt to constant variable.
        const x = 10;
        x = 20

SyntaxError:
    missing syntax
        const x;
     
    duplicate declaration => identifire 'y' has already been declared.   
        const y = 10;
        let y = 10;

ReferenceError:
    when js engine tries to find out a specific variable inside the memory space & you cannot access it.
    console.log(x);
    let x = 20
    console.log(ww);

-------------
let, const and var which one tp use?
-> whenever possible, i.e whenever you don't want to redeclare a value, use const.
    so that you won't get any unexpected errors.

    and if cannot use const, use let.

    keep var aside in day to day coding.

    there might be some cases where we have to use var, but use it very conciously.

-----------------
sometimes temporal dead zone can lead to a lot of unexpexted errors,
so the best way to avoid this temporal dead zone, is to always keep your initializations & declarations on the top.
(this is also know as shrinking the temporal dead zone to 0)
Shadowing 

******************** Block, Scope and Shadowing ******************************************************************************

    a block is defined by curley braces {}
-block is also know as Compund Statement
    -block is used to combine multiple js statement into one group.

    eg,
    {
        var a = 10;
        console.log(a);
    }

But, Why do we need to group the statements ?
-> we need to them so that we can use them in a place where js expects only one statement.    
    eg.
        if(true) true;  //valid
        but if you want to write multiple statement, you can only do this by using block of statements{}
        if(true){
            let a = true;
            let b = false;
        }

block Scope:
        What all variables and functions we can access inside the block is known as block scope.
 */

// let & const are block scoped    
        // that means they are stored in a seperate memory space which is reserved for this block.
        //you cannot access these a, and b outside of this block
            // {
            //     var a = 10;
            //     let b = 20;
            //     const c = 30;
            // }        
/*
 
int the browser, put debugger on first line
->inspect-> sources-> scope
-> Block=> b: undefined
        => c: undefined
   
->global=> a: undefined 

var is always attached to global scope whether its declared in any block or global scope.

-------------------
Shadowing:
    if we same name variable outside of the block, the varianle inside block shadows the one which is declared outside of the block.
    eg
        var a = 100;
        {
            var a = 10; //it shadows the one declared outside of this block.
            console.log(a);// prints 10
        }
        console.log(a);// prints 10

  * in case of 'let' : 

        var b = 100;
        let a = 100; // this a has another scope
        {
            let a = 10; //this a has block scope
            let b = 20;
            const c = 30;
            console.log(a);
        }
        console.log(a);//100

int the browser, put debugger on first line
->inspect-> sources-> Scope
-> Block => a: 10
         => b: 20
         => c: 30
-> Script => a: 100
-> Global => b: 20
->global=> a: undefined 

-----Shadowing example
        
        var d = 100;//this is in global scope
        // these have another scope
        let a = 100; 
        let b = 100;
        {
            var d = 90; //this is in global scope
            //these have block scope
            let a = 10; 
            let b = 20;
            const c = 30;
            console.log(a);
            {
                let vv = 88;
                console.log("inner vv: "+vv);
                console.log("inner a: "+a);
            }
        }
        console.log(a);//100
        console.log(b);//100
        console.log(d);//90 changed
        // console.log(c);//reference error not defined

        {
            let x = 2;
            console.log("another block x:"+x);
        }
----------------
**** Illegal Shadowing :

//valid
   let a = 10;
   {
    let a = 10
   }     
//valid
   var a = 10;
   {
    let a = 10
   } 
//valid
   var a = 10;
   {
    var a = 10
   }
//Invalid...............
   let a = 10;
   {
    var a = 10  //syntax error: Identifier 'a' has already been declared
   }
   because=> when avariable is shadowing something it should not scross the boundry of its scope.
        in the same scope let cannot be redeclared.
    
----------------------------------
** Remember:  Var is a function scope.
   Thus, below is valid....
        let a = 10;
        function fun(){
            var a = 10;
        }
const also behaves the same as let.

        same is the case foe arrow functions.

-----------------------------------------

** "block also follows lexical scope"...........
I also follows the lexical scope chain pattern.
---------------------------------------------------------------
4
**************        ## VAR Scope ##          ********************

    The scope of var in JavaScript is indeed different when declared inside blocks, functions, and loops.
1. var in Function Scope:
        When var is declared inside a function, it has function scope. This means it is accessible anywhere within that function, but not outside of it.
        eg.
            function fun(){
                var functionScoped = 10;
                onsole.log(functionScoped)
            }
            console.log(functionScoped)//reference error: functionScoped undefined
2. var in Global Scope:
        When var is declared outside of any function, it has global scope. This means it is accessible anywhere in your code and becomes a property of the global object (window in browsers or global in Node.js).
        eg.
            var globalScoped = 10;
            console.log(globalScoped);
            console.log(window.globalScoped);
3. var in Block Scope (e.g., inside {})
        When var is declared inside a block (a pair of curly braces {}), it does not have block scope. Instead, it is hoisted to the nearest function or global scope. This can lead to unexpected behavior.
        eg.
            if (true) {
                var blockScoped = "I'm not really block scoped";
            }
            console.log(blockScoped); // Outputs: "I'm not really block scoped"
4. var in Loops:            
        When var is declared inside a loop, it behaves as if it was declared outside the loop (at the nearest function or global scope). This is because var does not have block scope.
        eg.
            for (var i = 0; i < 3; i++) {
                setTimeout(function() {
                    console.log(i); // Outputs: 3, 3, 3
                }, 1000);            
            }

Summary
var in Function Scope: Accessible anywhere within the function, not outside.
var in Global Scope: Accessible anywhere in the code, becomes a property of the global object.
var in Block Scope: Not truly block scoped, gets hoisted to the nearest function or global scope.
var in Loops: Behaves as if declared outside the loop, shared across all iterations.
                var can cause unexpected behavior in closures within loops.
Implied Globals: Variables declared without var, let, or const inside a function become global variables.


************************** Closures *******************************************************************************************

Closure: 
    A closure means a function bind together with its lexical environment.
    MDN:
        A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

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
                console.log(a, b);
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
    -maintaining state in async world
    -setTimeputs
    -Iterators
    -and many more..
    
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

        counter()();//this has its own closure thus different count
        

 Disadvantage of closure :
-There could be over consumption of memory in closures.
every time a closure is formed, it consumes a lot of memory, & sometimes those closed over variables are not garbage collected till the program expires so that means its accumulating a lot of memory.
and if not handles properly it could also lead to memory leaks. because the memory is accumulated over time & it can also freeze the browser.



******************** Closures - setTimeout() ************************************************************************

        function x(){
            var i=1;
            setTimeout(function(){
                console.log(i);
            }, 1000);
        }
        x();    //after 1 second it will print 1

//now see,
        function x(){
            var i=1;
            setTimeout(function(){
                // console.log(i);
            }, 1000);
            console.log("js won't wait for none");
        }
        x(); 
//this => [ function(){console.log(i);} ] remembers the "reference" to i; as it forms a closure. and whenever this function goes it takes the reference of i along with it.
//setTimeout takes this function and stores it into a place & attaches the timer to it.
//and once this timer is over(complete), it takes this function and puts this inside a callstack. and it will run.

    function yy(){
        for(var i=1; i<=5; i++){
            setTimeout(function(){
                // console.log(i);
            }, i*1000);
        }
        console.log("hello js");
    }
    yy();
///Output: hello js 6 6 6 6 6 
//Remember:= the function has the refernce of variable i (not the value).
//so when i=1, settimeout will put this function somewhere and attaches the timer to it.
//similarly for i=2,3 ..5 setTimeout will put this function somewhere and attaches the timer to it. and prints 'hello js'.
// when the timer expire and the function was called. 'by this time the REFERENCE of i contains value 6'.
//......if  "let" is used instead of  "var";  It will print the 1 2 3 4 5.  why? => because let has block scope.
//i.e each time when the callback function runs it has its own copy of i with it.
//since let is blocked scope; each time the setTimeout is called, the callback function forms the closure with the new variable itself.

//  without using "let" solve this problem:

    for(var i=1; i<=5; i++){
        function a(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
        }
        a(i);
    }
************************* Garbage collection ******************************************************

Garbage Collector:
    Its a program in the browser ((js engine) it frees unutilized memory.
    -in low level programming languages like c, c++ its up to programmer how to handle memory. programmer can allocate(using new keyword etc),delete memory.
    while in case of high level languages like js; it taken care by the language itself(garbage collector).
    whenever it founds out not used variables etc its frees up the memory for it. garbage collector
    

Relation of closures with garbage collector :=

    function a(){
        let x = 10;
        return function b(){
            console.log(x);
        }
    }
    let y = a();
    //...

    y();
    //here even after function a() is finished executing, the variable x could have been garbage collected. but its not,
     beacuse function b() is passed returned to variable y. and this function b() has closure which contains x.
     thus we may use y() somewhere in our code. so it won't be garbage collected.
     so it occupies the memory.

     using IIFE can be a good way:=

        a()();
    //now once the a() is invoked and it returned b and its (b) is invoked once.
    //After that b() does not have any reference, so x does not have any reference. so It can be garbage collected.

** Smart Garbage Collection:    
// Here, in browser, If we put a debugger at console.log(X); line.
// and console.log x it will be printed. but if we console log z it will say undefined.
//as its garbage collected smartly!!!
        function a(){
            var x = 10; var z = 0;
            return function b(){
                console.log(x);
            }
        }
        let y = a();
        y();

********************* Functions: First Class Fcuntions *************************************************************************************************

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


 Difference Between Function Statement & Function Expression.
            The major diff in these 2 is hoisting

        // a();    //a called
        // b();    //TypeError: b is not a function.
        // function a(){  
             console.log("a called");
        // }
        // var b = function(){
        // }

//4.  Anonymous function
    // function (){}    //error- cannot declare like this.
    // a function does not have its own identity.
    // Anonymous functions are used in a plce where functions are used as a value.


//First class functions
    // The ability of functions to be used as values, and can be returned from function
    // we can pass functions as an argument, we an return them from function.

******************** CallBack Functions ***********************************************************************

//What is call back functions in Js ??
//blocking Main Thread in js
//Power of call backs

//What is call back functions in Js ??
    // functions are first class citizens in js. i.e they can be passed into another function.
    // this function that you pass on to another function is called callback function.

    // these callback functions are very usefull in js, 
    // they give us access to the whole asynchronous world in the synchronous single threaded language.
/*Remember: - js is a synchronous single threaded language 

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

//  So, js has just one "call stack", & you can also call it as the "Main Thread".
// everything whateveer is executed inside your page is executes through the call stack only.
//So, if any operation blocks this call stack, that is known as the "Blocking The Main Thred".

//suppose (in above eg) function x has very heavy operation which takes around 20-30 seconds to complete that function.
//by that time; because js has only one thread; It won't be able to execute any other function in the code. That means everything in the code will be blocked.
//we should never block the call stack...we should always try to use async operations for things which takes time.

//Summary: If js did not have this first class functions(i.e if we did not have this callBack functions; i.e we could not have pass functions to another functions),
// we could not have been able to do asynchronous operations.
//So, using this web API (setTimeout) & the callback functions we are able to do asynchronous operations.

******************** Event Listners ***********************************************************************


//Deep about Event Listeners
//Closures Demo with Event Listeners
//Scope Demo with Event Listners
//Garbage Collection & removeEventListeners.


//this piece of code mean; when js will execute it, it will pick up the element with id "clickMe"
//& it will add a event listener (that event is click).  & when that event will occur it will call the callback function xyz().
// so this is again a callback function xyz, which will be stored somewhere & that will automatically come in our callstack.
//so when this event "click" will occur it will call the callback function xyz() will automatically come in our call stack.
  
// let clickMe = document.getElementById("clickMe");
    // clickMe.addEventListener("click", function xyz(){
    //     console.log("button clicked");
    // });


//... Closure + Event Listners.

    // <html lang="en">
    // <head>
    //     <title>Event Listeners</title>
    // </head>
    // <body>
    //     <button id="clickMe">click me</button>
    //     <script src="eventListeners.js"></script>
    // </body>
    // </html>

        console.log("script loaded");
        function a(){
            let count = 0;
            let clickMe = document.getElementById("clickMe");
            clickMe.addEventListener("click", function xyz(){
                console.log("button clicked ",++count," times");
            });
        }
        a();
//debugger on console.log(count);
//call stack-> xyz
//->scope-> closure (a)
// count=1;

//...In Browser
// inspect tool -> Elements -> click on <button id="clickMe">click Me</button>
//(below there is Event Listeners tab) Event Listeners -> click ->
//                                                                button clickMe
//                                                                    ->handler: f xyz() 



//Garbage Collection & removeEventListeners.

//** Imp Interview Question:  Why do we need to Event Listners ???
//   (in large codebase people remove event listners, why do they do that?)
// =>       Event Listeners are heavy (heavy means it takes memory)   
//          whenever we attach event listener, it form a closure, even when we're not executing any of the code but still the memory for closure is not getting free. as we might need this event listener in the future.
//  & suppose our page has 1000s of buttons & event listeners attached, then our page can go a lot of slow.
//   because of these so many closures consuming a lot of our memory for their scopes n all.
// That's why Its good practice to remove the event Listeners.
//  

**************** Event Loop *************************************************************************
//Event Loop
//Call back Queue
//Microtask Queue
//How Everything is Working inside the browser.


js is synchronous single threaded language.
It has 1 call stack and it can do only 1 thing at a time.
this call stack is present inside the js engine. and all the code of js is executed inside this call stakc.
    -if anything wents inside the call stack it quickly executes it.(waits for non)
    but, what if we want execute something after some point of time??
    -> we cannot do that because, whatever comes inside call stack it simply executes it.
    -> to achieve this

=========================================

***********........... Web APIs ............**********

* Browser
    Browser is the most remarkable featire in the history of man kind.
    -the browser has js engine
    -it also has local storage.
    -you can have a timer inside browser
    -browser can make connection to the servers. also after getting reponse from server it can display in on the UI. 
    -also has accesses like blutooth, location etc.


    if in the js code which is running inside the call stack, we need access to all of these features of the browser.
    eg. 
        suppose we need access to the timer.
        suppose we need access to thE page beign rendered(UI). or localstorage or Urls or blutooth..etc.
    to access them; we need to have some connection, the js engine has to have some way to access them.

        To Access All Those SuperPowers, we Need "Web API."

   * some of the web APIs:
        -seTimeout()
        -DOM APIs
        -fetch()
        -LocalStorage
        -console
        -Location
        
    BROWSER gives us(js program) the access to all of these features via web APIs.
    eg
        we get access to -DOM Tree by DOM APIs.
                        Timer by DOM setTimeout.
                        fetch gives us power to make connections to the other servers like external servers.

    .. We get all of this inside the call stack because of the "GLOBAL OBJECT" ..

  What is Global Object ??
=>Its window object (in case of browsers).
So, browser gives js engine access to all browser functionalities through a keyword know as "window".

    so, if you want the access to the timer inside your js code, you have to do something as window.setTimeout();
        if you want the access to the localstorage inside your js code, you have to do window.localStorage();
        if you want the access to the log something inside the console, you have to do window.console.log();
      & because window is the global object and setTimeout etc is present inside the global object(i.e global scope) you can access it without 'window' keyword.

* So, the flow is:=>
*     //this is how js gets access to all of the browser functionalities.
*"""""""" call stack(js program) -> window(Global Object) -> Web APIs -> browser functionalities .....'''''''

-------------

console.log("hello js");
above line will basically calls the console(web API) -> and this internaly makes a call to log something inside the console.

So, you can access the consoe or do console.log because of the "console" web API and this api is plugged through "window" to your code.

-------------

setTimeout(function cb(){
    console.log("call Back");
}, 1000);
console.log("end");

timstamp: 14.00

this setTimeout()(which is window.setTimeout()) it given us access to the time functionality of the browser.
and it takes the callback function along with some time(eg. 1000 sec).

so, when we pass the callback function to the setTimeout() is basically registers a callback. 
    & because of the delay given along with callback it also starts the timer of the browser.
    & js code moves to the next line, it does not wait.

    as soon as the time expires, the call back function needs to be executed.
    //so to run it, we need it inside the call stack.
    BUT,
        It cannot directly go into the call stack; then it goes into the call stack ??
      => It will go to the call stack thriugh the "CallBack Queue".

      So, when the timer expires the callback function is put inside the CallBack Queue.

**     "Event Loop" acts like a Gatekeeper, and it checks whether we have something inside the callback queue, & if we have something it just pushes it into the call stack.

.... So, The Flow IS :=> 
        As the 'timer expires' -> 'callBack function' is pushed in 'CallBack Queue' -> 'Event Loop' check callBack queue and push the Callback function in 'Call Stack' -> and the callback fucntion inside the call stakc is run line by line.

-------------------

console.log("Start");
document.getElementById("btn").addEventListener("click", function cb(){
    console.log("callBack");
})
console.log("End");

    whenever we run the js code, EC is created & pushed inside the call stack. and the code is executed line by line.
    at line console.log(), it calls the web API is provides access to the console & prints on the console.

    What is addEventListener??
  => Its again a functionality given by the 'browser' to the 'js' through the 'window object' in form of a 'web API'.
     so, whenever we do 'document.getElementById()' its calling the 'DOM API' which intern fetches something from the DOM.
     this addEventListener also registers a callback on an event(here click event).
So,
    -> Registering the callback:- inside the web APIs environment the callback function(cb()) will be registered & an event is attached to it. 
    -> js code executes next lines, js waits for none.  
    -> now the program execution is finished but the 'Event Handler' i.e our callback function will stay in the web api environment(registered) untill we explicitly remove the event listener or close the browser.
        so this registred call back method just sits in the web environment in the hope that someone will call it.
    -> When user clicks on button; this cb() is pushed inside the 'CallBack Queue' and waits here till its turn to get executed.
    -> event loop then push it inside the call stack and it gets executed.

Event Loop:
    -It has only one job which is to continuously monitor the 'call stack' as well as the 'callBack Queue'.

CallBack Queue, Why do we need it?
(we can directly push the callbacks from web environment to call stack, then why this callback queue?)
=> suppose user clicks on the button5 times back to back then this call back function will be pushed inside the callback queue 5 times one after another.

    ->CallBack Queue is also know as "Taak Queue".

------------------------------------
......Fetch

console.log("start");

setTiemout(function cbT(){
    console.log("CB SetTimeout")
}, 5000);

fetch("https://api.netflix.com")
.then(function cbF(){
    console.log("CB Netflix");
});

console.log("End");

Execution:-
    -> console.logs "start"
    ->cbT() is registered in web API's environment and timer of 5000ms starts.
    ->fetch() is again a web API that used to make network calls.
    ->fetch also registers the cbF into web API's environment.
    -> now in web environment, cbT() is waiting for timer to get expire & cbF is waiting to fetch data from the server.
    -> fetch makes call to netflix server, which returns data back to the fetch() & once we get the data the cbf() is now ready to be executed.
    -> now, the call back function cbF() is pushed inside the "MicroTask Queue".
    ->'Event Loop' check the call stack and gives chance to callbacks inside microtask queue & callback queue to execute.

    ->Say, we got response from the netflix server but we're still executing the code(suppose these are 1000s of lines of code).
        so we've the cbF() callback function in microtask queue waiting to be executed but we are still running the remaing code in our program.
        meanwhile the timer also expires; cbt() is pushed in callback queue.
        Remember, Its the js doing one thing at a time, But browser can do multiple things at a time.
      The job of Event Loop is to contineously keep checking if the call stack is empty or not, if it is empty schedule the callback function for execution.
    -> when the whole program executes, call stack is empty, event loop will push cbF() in call stack. (as it has higher priority over cbT())
    -> as soon as cbF() finish execution event loop will put cbT() inside the call stack.

* MicroTask Queue:
    ->"Its similar to the CallBack Queue but it has a higher priority."
    functions inside the microtask queue will execute first & functions inside callback queue will execute later.
    -> what can come iside it: all the callback functions which comes through promises, will go inside microtask queue.
        & there is something known as mutation observer, it keeps on checking whether there is some mutation in the DOM Tree or not.
        if there is some mutation in the DOM Tree, it can execute some call back function.
        -call back functions which come through promises.
        -mutation observer.
            goes inside the microtask queue.

    but all the other functions such as:
        -callback functions from setTimeout
        -callback functions from DOM APIs like event Listeners etc
            all goes inside "CallBack Queue/Task Queue"


"STARVATION" of the taks inside CallBack Queue could happen!!!!
****** Read About it.





*/









        

    










