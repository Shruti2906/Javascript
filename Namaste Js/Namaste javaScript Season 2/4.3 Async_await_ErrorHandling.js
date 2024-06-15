
/*
in .then() syntax we had .catch() for error handling.

here in async await we use try-catch for error handling.

*/

const API_URL = 'https://api.github.com/users/shruti2906';
// async function handlePromised(){
//     try{
//         const data = await fetch(API_URL);
//         const jsonValue = await data.json();
//         console.log(jsonValue);
//         // fetch(API_URL).then((data)=>{return data.json()}).then((jsonData)=>{ console.log(jsonData)})
//     }catch(err){
//         console.log(err);
//     }
  
// }
// handlePromised();

/*
if there is an error at this line- const data = await fetch(API_URL);
lines after this line won't even execute. the catch block will execute.

*/

//......Another/previous way of handling error......

//  async function always returns a promise.
// When an error is thrown inside an async function, the promise it returns is automatically rejected. This allows you to handle errors //using .catch() on the returned promise, providing a structured way to manage exceptions in asynchronous code.
async function handlePromised(){
    
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        // console.log(jsonValue);
        // fetch(API_URL).then((data)=>{return data.json()}).then((jsonData)=>{ console.log(jsonData)})
  
}
handlePromised().catch((err)=>{console.log(err)});