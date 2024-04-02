//  we have 2 types of data typeof
//  1) primitive type
//  2) non primtive/reference type

//+++++++++++++++++++++++++++++++++
//Stack(primitive)(call by value), Heap(Non-primitive)(call by reference)

let myName = "shruti"
let anotherName = myName;
anotherName = "patil"
console.log("anotherName: "+anotherName);
console.log("myName: "+myName);

let userOne = {
    name:"Shruti",
    email:"abc@gamil.com"
}
let userTwo = userOne;
userTwo.email = "xyz@gmail.com";
console.log("userOne.email: "+userOne.email);


