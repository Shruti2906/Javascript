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


/*

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
