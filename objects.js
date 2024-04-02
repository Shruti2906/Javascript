//objects in js can be declared using 2 ways
//1. constructor /singleton
//2. literal - not singleton

// both declare object the is just of singleton

//constructor
    // Object.create();

//object literals
    // const jsUser = {
    //     name: "Shruti",
    //     "location": "pune",
    //     "full name": "shruti patil",
    //     lastLoginDays: ["mon", "tues"]
    // }
    // console.log(jsUser.lastLoginDays);
    // console.log(jsUser["lastLoginDays"]);
    // console.log(jsUser.location);
    // console.log(jsUser["full name"]); // in this case there no other way to access ele without js["full Name"]..cannot use '.' here.

// -----------------------------------------
// interview question- take a symbol add it as object key and print it.

    const mysym = Symbol("Key1"); 
    const User = {
        name: "shruti",
        [mysym] : "myKey1",   //Its the syntax, now its referring to the Symbol("key1");
        location: "pune"
    }
    // console.log(User[mysym]);
    // console.log(typeof(User[mysym]));

    // User.location = "Bengaluru";
    // console.log(User);
// -----------------------------------------

//to lock the object, so that it can't be modified further
    // Object.freeze(User);
    // User.location = "Mumbai";
    // console.log(User);


//functions
User.greeting = function() {
    console.log("Hello Js User");
}
User.greeting2 = function(){
    console.log(`Hello Js User ${this.name}`);
}
console.log(User.greeting());
console.log(User.greeting2());

//NOTE: always prefer using dot '.' for accessing object properties, but there are some cases we have to use [].