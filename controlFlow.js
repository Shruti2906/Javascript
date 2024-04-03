const isLoggedIn = true;
if(2 == "2"){
console.log("executed");
}

// <, >, <=, >=, !=, ==, ===

if(2 === "2"){ //strict checking
    console.log("executed");
}
let month = 1;
switch(month){
    case 1: console.log(`${month} matched`);
    case 2: console.log(`case 2 matched`);
    default:console.log('default one');
}

// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values:
// "0", 'false', " ", [], {}, function(){}

//chekc if object is empty:
const emptyObj = {}
const keys = Object.keys(emptyObj);
if(keys.length===0){
    console.log("object is empty")
}

//Nullish Coalescing Operator(??) : made only for null  undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// val1 = "ww" ?? 100
console.log(val1);

//Ternary operatoe
// condition ? true : false
const p = 100
p >80 ?console.log(">80") : console.log("<80");

