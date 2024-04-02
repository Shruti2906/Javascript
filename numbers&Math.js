const score = 400

let s = "shruti";
console.log(s.toUpperCase());

const num = 100;
console.log(num);

const num2 = new Number(200);
console.log(num2);
console.log(num.toFixed(2)); //.00 digit(2)

//important from interview point of view
let demo = 11.2233;
console.log(demo.toPrecision(4));

const hundreads = 1000000;
console.log(hundreads.toLocaleString());//deafult as per US standard
console.log(hundreads.toLocaleString('en-IN'));

//******************MATH ************************* */
let val = Number.MIN_VALUE;
val = Number.MAX_VALUE;
val = Number.MAX_SAFE_INTEGER;

// Maths library is build in library that come by default with javascript.
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //ceil() will always select top value eg for 4.2 it will select 5
console.log(Math.floor(4.9)); //floor() will always select lower value eg for 4.9 it will select 4

console.log(Math.min(20,10, 5, 15));
console.log(Math.random()); //Math.random() will always return value between 0 and 1.
console.log(Math.random());





