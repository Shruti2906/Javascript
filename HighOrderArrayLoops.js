const arr = [1, 2, 3, 4, 5];

// for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It provides a simpler syntax compared to traditional for loops.

//arrays, objects, strings all are iterable
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World";
for (const char of greeting) {
    // console.log(char);
}

//Maps
const map = new Map();
map.set(10, "10");
map.set("hello", "Hi");
// console.log(map);

for (const [key, value] of map) {
    // console.log(key,"->",value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [key, value] of myObj) {    //NOT Works for objects
//     console.log(key,"->",value);
// }
const objKeys = Object.keys(myObj);
for (const key of objKeys) {    
    // console.log(key);
}

// for in loop is used to iterate over the properties of an object.
//forin
for (const key in myObj) {
//    console.log(`${key} -> ${myObj[key]}`);
}

for (const key in arr) {
//    console.log(arr[key]);
}

//+++++++ forEach +++++++++++
arr.forEach( function nm(item) {
    // console.log(item);
})
arr.forEach(function (item){
    // console.log(item);
})
arr.forEach( (item)=>{
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}
arr.forEach(printMe); //passing function, giving reference of function, not calling it.


//+++++Widely used
arr.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
});

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item)=>{
    // console.log(item);
})
myCoding.forEach(({languageName, languageFileName})=>{  //destructuring the object
    // let {languageName, languageFileName} = item;
    console.log(languageName, languageFileName);
})
