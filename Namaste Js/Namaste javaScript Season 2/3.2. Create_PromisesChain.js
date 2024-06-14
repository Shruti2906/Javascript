const cart = ["shoes", "kurtas"];

const promise = createOrder(cart); //returns orderID; this is an async operation so it returns a promise.

promise
.then(function(orderId){
    
    console.log("Promise resolved, orderId: ",orderId);
    return orderId;
})
.then((orderId)=>{
    return proceedToPayment(orderId);
})
.catch((err)=>{
    console.log(err.message);
})
.then(()=>{
    console.log("last in the promise chain")
    throw new Error("error occcurred 2nd time");
})
.catch((err)=>{
    console.log(err.message);
})


///Producer end
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
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

function proceedToPayment(orderId){
    return new Promise((resolve, reject)=>{
        resolve("Payment successfull");
    });
}