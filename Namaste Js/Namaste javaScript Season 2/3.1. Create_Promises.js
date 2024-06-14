const cart = ["shoes", "kurtas"];

const promise = createOrder(cart); //returns orderID; this is an async operation so it returns a promise.

promise
.then(function(orderId){
    // proceedToPayment(orderId);
    console.log("Promise resolved, orderId: ",orderId);
})
.catch((err)=>{//handle error gracefully
    console.log(err.message);
})

///Producer end
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){

        //logic to createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "12345";
        if(orderId){
            resolve(orderId);
        }

    });

    return pr;
}
function validateCart(cart){
    return false;
}

/**
Explanantion:
        createOrder() function created a promise object and this promise object was attached with the callback function in .then()
        js called createOrder() & it returned a promise and because the cars items where validated, it resolved the promise.
*/

/*

new Promise() is a promise contructor.
resolve & reject are the functions which are given by javascript to build promises.

*/
