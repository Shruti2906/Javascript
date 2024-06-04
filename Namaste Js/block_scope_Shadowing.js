/**
 
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

        same is the case for arrow functions.
    
-----------------------------------------

** "block also follows lexical scope"...........
I also follows the lexical scope chain pattern.
-----------------------------------------------

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


*/












        

      