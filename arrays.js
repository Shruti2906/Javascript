// 'use strict';


let marks = [91, 82, 63, 84, false, null];
console.log(marks);
console.log(marks[0]);

console.log(marks.length);

marks[6] = 97
console.log(marks);

//arrays are mmutable, arrays can be changes
//in js arrays are objests
console.log(typeof(marks));

//strings are immutable strings cannot be changes

let string  = ['ram', 'sham', 'radha'];
string[0] = 'krishna';
console.log(string);

//Array methods
let num = [0, 1, 2, 3, 4, 5];
let b = num.toString(num);
console.log(typeof b);

//join ()
console.log(num.join("_"));
console.log(num.join(" and "));

//pop() - it changes original array itself
num.pop();
console.log(num);
num.push(97);
console.log(num);

//shift(), unshift() simimlar to pop(), push(); pop removes from end, shift removes from start
//shift() - removes and return ele from start of array
let r = num.shift();
console.log(r)
console.log(num);

//unshift()
num.unshift(30);
console.log(num);

//delete operator just like typeof operator

let nums = [10, 20, 30, 40]
delete nums[0]
console.log(nums);

let person = {
    name: "shruti",
    age:22
}
console.log(Object.keys(person));
delete person.age;
// person.age = undefined;
// delete person;       //this will give error in strict mode and it will give unexpected result in non strict mode
console.log(Object.keys(person));
console.log(person.age);
