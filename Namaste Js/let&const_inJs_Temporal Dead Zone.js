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



*/
