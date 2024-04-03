
const user = {
    username: "shruti",
    price: 999,
    welcomeMsg:function(){
            console.log(`${this.username}, welcome to the website`);
            console.log(this);
        }
}
// user.welcomeMsg();
// user.username = "sam";
// user.welcomeMsg();
// console.log(this); //empty object , in node this is pointing to nothing but in browser 'this' points to global object 'window' object.


//  function one(){
//     const username = "sh1123";
//     console.log(this.username);
//     console.log(this);
// }
// one();

// const one = function(){
//     const username = 'sh123';
//     console.log(this.username);
// }
// one();

// const one = () => {
//     let username = "1233"
//     console.log(this.username);
//     console.log(this); //empty object {}
// }
// one();

// const addtwo = (num1, num2) => {
//     return num1+num2;
// }
// addtwo(10, 10);

// const addtwo = (num1, num2) => num1+num2;   //it will return num1+num2
// console.log(addtwo(100, 200));

// const addtwo = (num1, num2) => (num1+num2); //no need to write return keyword if used (). 
//                                             //need to write return keyword if used {}. 
// console.log(addtwo(100, 200));

// const addtwo = () => {return {username:"abc"}}
//          Or
const addtwo = () => ({username:"abc"})
console.log(addtwo());
