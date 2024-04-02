// Primitive
// 7 types
// N - number
// N - null
// B - boolean
// B - bigint
// S - String
// S - Symbol
// U - undefined

//non primitives
//Arrays, Objects, Functions
const arr = [1, 2, 3];
const obj = {
    key1:"key1",
    key2:1
}
const fun = function(){
    console.log("Hello");
}

console.log(typeof undefined);
console.log(typeof null);
// console.log(typeof Number);

const id = Symbol('123');   //it will generate some unique value even if same value is passed to it.
const anotherId = Symbol('123');
console.log(id, anotherId);

// js is dynamically typed language



// objects, browser elememts master