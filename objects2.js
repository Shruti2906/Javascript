// const swiggyUser = new Object();
// console.log(swiggyUser);

const user = {}
user.id = "123abc";
user.name = "Sam";
user.isLoggedIn = false
// console.log(user);

const regularUser = {
    email: "abc@gmail.com",
    fullname:{
        userfullname: {
            firstName: "Shruti",
            lastName: "patil"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2:"b", 3:"c"};
const obj2 = {4:"d", 5:"e"};
// const obj3 = {obj1, obj2};
// console.log(obj3);
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2); //giving {} is preferred
// console.log(obj3);
// console.log(obj1);   //Object.assign(target, source) it will add obj2 in obj1 and return obj1
// console.log(obj2);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        Id:1,
        email: "abc@a.com"
    },
    {
        Id:2,
        email: "xyz@b.com"
    },
    {
        Id:1,
        email: "aaa@c.com"
    },
]
users[1].email;
console.log(users);

//********* Very Important And Usefull ************ */
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('id'));

