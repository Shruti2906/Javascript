//fetch is very powerfull feature in js

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{

    return response.json();
}).then((data)=>{
    console.log("data",data);
}).catch((error)=>{
    console.error("Error: ",error);
})


/**
 * 
 * usefull resource:
 * https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * specification: https://fetch.spec.whatwg.org/#fetch-method
 * https://fetch.spec.whatwg.org/#fetch-method
 */