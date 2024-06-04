// Javascript ans classes
//js is a prototype based language

//OOP   - programing paradigm(structure or style of programming)
// Object-  collection of properties and methods

/*  Why oop?
    to avoid spegatti code


    ##parts of OOP
    Object Literal

    -constructor
    -prototype
    -classes
    -instances

    oops 4 pillars
    Abstraction
    Encapsulation
    Inheritance
    Encapsulation
*/


// object literal
const user = {
    username: "shruti",
    loginCnt: 5,
    getUserDetails: function(){
        // console.log("Got user details from DB");
        console.log(`getDetails username: ${this.username}`);
        console.log("this",this);
    }
}
console.log(user["username"]);
console.log(user.loginCnt);
user.getUserDetails();
console.log("golbal this",this);

//constructor function
const primise = new Promise(()=>{})
let date = new Date();

function newUser(username, loginCount, isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    // console.log("function this:"+this);
    return this;
}
const user1 = newUser("shruti",12, true);
const user2 = newUser("patil",14, false);
console.log(user1); //user1 will log 'patil' username. as we have not used new  for creating user2.

const userOne = new newUser("sh",12, true);
const userTwo = new newUser("p",14, false);
console.log(userOne); 
console.log(userOne.constructor);
console.log(userOne instanceof newUser);
console.log(user2 instanceof newUser);
//when we use 'new' keyword, an object gets created called as instace.
//then constructor function is called(because of new keyword), which packs all the arguments etc initializes the object
//this keyword also gets injected
//