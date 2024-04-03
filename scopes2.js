function one(){
    const username = "shruti";

    function two(){
        const name = "patil";
        console.log(username);
    } 
    // console.log(name); // not accessible
    two();
}
one();

if(true){
    const username = "shruti"
    if(username=="shruti"){
        const name = "patil";
        console.log(username+name);
    }
    // console.log(name); //not accessible here
}
// console.log(username); //not accessible here

//+++++++++++++++++++ Intresting question ++++++++++++++++++++

//both are function just they are called wih different name

//simple function
console.log(addone(10));
function addone(num){
    return num+1;
}

//function expression
// addTwo(20); //not allowed
const addTwo = function (num) {
    return num+2;
}
addTwo(20);