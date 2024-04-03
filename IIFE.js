//IIFE - Immediately invoked function Expression


//when we want to execute the function as soon as we write it..
//eg. we have written one file which has only db connection, and we want this file to get executed as soon as our application starts.

// syntax: ()()
//() - inside this will write function definition
//() - execution call, calling the function

//named IIFE
(function one(){
    console.log(`DB connected`);
})();   //here semicoclon ';' is important because it will cause an error

//Unknown IIFE, IIFE with parameters
((name) => {
    console.log(`${name} DB connected two`);
})("shruti")
//sometime problems are coused by pollution of global scope, so to avoid the global scope pollution we use IIFE