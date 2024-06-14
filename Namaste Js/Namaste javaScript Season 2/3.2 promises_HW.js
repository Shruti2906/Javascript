const cart = ["smartphone", "laptop", "headphones"];

// createOrder, proceedToPayment, showOrderSummary, updateWallet

createOrder(cart)
.then((orderId)=>{
    console.log("orderId: ", orderId);
    return orderId;
})
.then((orderId)=>{
    return proceedToPayment(orderId);
})
.then(()=>{
    return showOrderSummary();
})
.then(()=>{
    updateWallet();
})
.catch((err)=>{

})

function createOrder(){
    return new Promise((resolve, reject)=>{
        resolve('1234')
    });
} 
function proceedToPayment(){
    return new Promise((resolve, reject)=>{
        reject('payment failed, bank server is busy, try after some time')
    });
}
function showOrderSummary(){
    return new Promise(()=>{
        resolve();
    });
}
function updateWallet(){
    return new Promise(()=>{
        resolve("wallet: ",5000000+"INR");
    });
}

