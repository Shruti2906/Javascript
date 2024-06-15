// +++++++++++++++++++++++ Real World Example of Async Await ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

fetch is basically a promise. when its resolved it gives the response.
this response body is a readable stream.
to convert this readable stream to JSON; we have to do like this- response.json()
response.json() is again a promise; when this promise is resolved it gives the json value.

fetch() => Response object

*/

const API_URL = 'https://api.github.com/users/shruti2906';
async function handlePromised(){
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
    // fetch(API_URL).then((data)=>{return data.json()}).then((jsonData)=>{ console.log(jsonData)})
}
handlePromised();

