// "use strict"

// this is global scope
let a;
console.log(this);  //in global scope represents the global object(window)

// NOTE: this global is different Inside nodeJs, differemt in broeser, different wherever js is runing

console.log(a);

//this inside a function

function x() {
    // NOTE: inside the function the value of 'this' depends on strict , in strict mode.
    let yy  =10;
    console.log(this);
}
x();    //undefined - refer
// window.x();

// what is this global object - 
// but why html, how does browser understand content rendering bsed on html
//hot the html gets compiled
//how the browser works
//strict, non strict mode in js
//method vs function in js & in other languages
// is js purly object oriented?
// classes in js
//currying in js
//generative functions in js


/* this inside non-strict mode - (this substitution)

                -If the value of this keyword is undefined or null then
                this will be replaced with global object
                only in noon strict mode.


    the value of this keyword is also depends on how the function is called.(window)

    - in strict mode
        x();       //undefined
        window.x();        //window

    - in non-strict mode
        this substitution will happen, so the undefined/null 'this' will be replaced with global object

*/ 


const obj = {
    xyz : 10,
    printXYZ(){
        console.log("xyz:", xyz);
    }
}
obj.printXYZ(); //now as printXYZ() is invoked with explicit object (obj) the 'this' in this method will refer to 'obj' object.

//*** VERY VERY IMP: here console.log("xyz:", xyz); will log not defined (there is not implicit 'this' like java in js) js simply tries to find xyz in the lexical scope of printXYZ() (objects do not form lexical scope, functions do). and when not found there, it will try to find xyz in the global lexical context there also not found so 'Not Defined'.
//* as printXYZ() is invoked explicitly with 'obj' object, Now the 'this' is referring to object 'obj'. so console.log("xyz:", this.xyz); it will refer the 'xyz' in 'obj' object.




//call(), apply(), bind() methods
//arrroe function

const student = {
    name: "Shruti",
    printName() {
        console.log(this.a); //it will log obj's a, here 'this' refers to obj object.
    },
}

const student2 = {
    name: "Neha",
}
// say I want to use the method printName() for student2, it can be done using call, apply, bind methods.

student.printName().call(student2); //now printName method will use the value of 'this' of student2 object.
                                    //i.e overrding 'this'

// ----------------------------- Arrow Function ----------------------------------------------------

// how does 'this' works in arrow functions
/*
    arrow function don't have their own 'this' binding associated with them.
    but they use the lexical context of their parent.

    they don't have the concept of 'this' basically.

    It retains the 'this' value of the "enclosing lexical context".
*/
/*
Both arrow functions and regular functions handle this differently, but neither has a truly "own" this in the sense that this always depends on some external context.

Here’s a refined explanation:

Regular Functions:
    this is determined at the time of invocation — it refers to the object that called the function. This means that a regular function’s this depends on how the function is called.
    If called as a method on an object, this refers to that object.
    If called as a standalone function (e.g., func()), this refers to the global object (window in browsers, global in Node.js) in non-strict mode. In strict mode, it becomes undefined.
Arrow Functions:
    Arrow functions don’t have their own this, but they are different because they capture this lexically from their surrounding context when defined, rather than when they are invoked.
    An arrow function doesn't care how it is called; it always uses the this value from the scope in which it was created.
So, What’s the Difference?
    Regular functions: this is determined by how the function is invoked.
    Arrow functions: this is determined by the surrounding lexical scope at the time the arrow function is defined.

*/
// eg. regular function, In the case of obj.method(), the regular function's this becomes obj because that's how the function was called.
function regularFunction() {
    console.log(this);
}

const objj = {
    method: regularFunction
};

regularFunction(); // Logs global object (or undefined in strict mode)
objj.method();      // Logs obj, because the method was called on obj

// eg. ArrowFunction...................
    // In this case, even though obj2.method() was called on obj2, the arrow function logs the global object 
    //because its this was captured when it was defined, and in this example, it was defined in the global scope.
const arrowFunction = () => {
    console.log(this);
};

const objj2 = {
    method: arrowFunction
};

arrowFunction(); // Logs the global object because the arrow function was defined in the global context
objj2.method();   // Still logs the global object because arrow functions capture `this` from where they were defined, not how they are called

//* Regular functions: this is dynamically set when the function is called, based on who calls the function. Arrow functions: this is statically bound to the surrounding lexical scope when the arrow function is defined, and it doesn’t change based on how the function is invoked. In both cases, neither regular functions nor arrow functions have their own this per se, but they handle this differently. Regular functions determine it at call time, while arrow functions determine it at definition time.

const objj3 = {
    ss: 10,
    fun: function f() {
        const y = () => { 
            console.log(this); // `this` refers to `obj2`
        }
        y(); 
    }
}
objj3.fun();

//* Summary: Arrow functions inherit this from the surrounding (lexical) context.
//*         In below case, the arrow function g() inherits this from the regular function fun().
//              & since fun() is regular function, its 'this' will be decided on how it is called.
//*         Since fun() was called normally (as a regular function), this inside fun() refers to the global object (or undefined in strict mode).
//*         Therefore, the arrow function g() also logs the global object (or undefined).
    function fun() {
        let g = () => {
            console.log(this);  // Arrow function inherits `this`
        }
        g();  // Call the arrow function
    }
    fun();  // Call the regular function
















const obj2 = {
    ss: 10,
    fun: () => {
        console.log(this);
    }
}
obj.fun();







let cc = 20;
function printCc() {
    console.log(this.cc);
}
printCc();

/*
The concept of lexical scope and this are two different things in JavaScript.

Lexical scope determines where variables (like yy) are accessible within your code. It refers to how JavaScript determines variable scope based on where functions are written in the source code.

this is not determined by lexical scope. Instead, it is determined by how a function is invoked, not where it is defined.

Lexical Scope vs this: Even though x() has its own lexical scope, the value of this inside the function is still based on how the function is called, not where it's defined. Since x() is called directly in the global context, this refers to the global object.



****    Differences Between Java and JavaScript this:   ***

Java: this always refers to the current object instance and is determined by the class structure. It is consistent, and its value does not change based on how the method is invoked.

JavaScript: this can refer to different things depending on how a function is called (e.g., globally, as a method, with call, apply, or bind). JavaScript's this can vary and be bound dynamically.

---------

1. Lexical Scope in Java
Lexical scope (also called static scope) in Java works similarly to JavaScript in terms of determining where variables are accessible. It is based on the structure of the code and where functions and variables are written.
In Java, variables declared within a method are local to that method, while instance variables (fields) are scoped to the entire class and can be accessed by any method within that class.
2. this Keyword in Java
In Java, this always refers to the current instance of the class where a method is called. It refers to the object on which a method or constructor is invoked.

Unlike JavaScript, the value of this in Java is always determined by the class instance that the method belongs to, and it does not change depending on how the method is invoked.


*/

/**
 *  Why the behaviour is differenet in strict & non strict mode ?
 * 
 * In non-strict mode, the this inside x() will refer to the global object (window in browsers, global in Node.js). In strict mode, however, this will be undefined. -> 

In JavaScript, the behavior of this inside functions differs between non-strict mode and strict mode due to design decisions made to prevent common programming mistakes and improve security and maintainability. Let's explore the reasoning behind this:

1. Non-strict Mode (this refers to the global object)
    In non-strict mode, when a function is called without an object reference, such as x(), the this keyword inside the function defaults to the global object (window in browsers, global in Node.js). This behavior exists for historical reasons:

    Legacy behavior: JavaScript was initially designed to allow functions to be called in various ways without strict rules. When a function is called without an explicit object, JavaScript automatically binds this to the global object.

    Convenience: In early JavaScript, this design was somewhat convenient for accessing global variables and properties inside functions, as you could directly refer to the global object without having to pass it explicitly.
    * 

    eg.
        function x() {
            console.log(this); // In non-strict mode, 'this' refers to the global object.
        }
        x(); // logs 'window' (in browsers)

        Here, this refers to the window object (or global in Node.js) because x() is called without any object context.

2. Strict Mode (this is undefined)
    In strict mode ('use strict'), JavaScript makes this safer and more predictable by changing this behavior. When a function is called without an explicit object, this inside the function becomes undefined instead of the global object.

    Reasons for undefined in strict mode:
    Avoiding common mistakes: The global object can hold important properties and methods (e.g., window in browsers), and accidentally referring to it inside functions (due to a misused this) can lead to bugs or unintended behavior. Strict mode prevents this by making this undefined unless explicitly bound.

    Example of potential bugs in non-strict mode:

    eg.
        function setName(name) {
            this.name = name; // In non-strict mode, this could refer to the global object
        }

        setName('Shruti'); // In non-strict mode, this will set window.name = 'Shruti'
        console.log(window.name); // 'Shruti'

        This accidental global modification is prevented in strict mode.


    Encouraging explicit context: Strict mode forces developers to be more explicit about the context (this) by either binding it through an object method, using call, apply, or bind, or using arrow functions (which inherit this).

    Cleaner and more secure code: By avoiding unintended access to the global object, strict mode improves code clarity and reduces the likelihood of introducing security vulnerabilities or unpredictable side effects.
    eg.
        'use strict';
        function x() {
            console.log(this); // In strict mode, 'this' is undefined
        }
        x(); // logs 'undefined'

Summary:
        Non-strict mode: this defaults to the global object (which can lead to unintended side effects).
        Strict mode: this is undefined unless explicitly set, encouraging safer and more predictable behavior.

 * 
 */