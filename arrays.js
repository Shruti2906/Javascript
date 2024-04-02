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

const arr = [1, 2, 4, 5];
const A = new Array(1, 2, 3);
console.log(arr[2]);

//Array methods
arr.push(6);
console.log(arr);
arr.pop()
console.log(arr);

//shift
arr.shift(1);
console.log(arr);
arr.unshift(10);
console.log(arr);
arr.push(11, 1);
console.log(arr);

//slice vs splice
const a1 = [1, 2, 3, ,4 ,5 ];
const l1 = a1.slice(1, 3); //it will return copy arr ele from index 1 to 3 (3 exclusive), oroginal array remain unchanged
console.log("l1",l1);
console.log("original array a1: ",a1);
const l2 = a1.splice(1, 3);//it will return copy arr ele from index 1 to 3 (3 exclusive), BUT it will change the original array
console.log("l2: ",l1);
console.log("original array a1: ",a1);

