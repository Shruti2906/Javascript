function loginMsg(userName){
    console.log("!usename: ",userName);
    if(!userName){
        console.log("please enter user Name");
        return;
    }
    return `${userName} just logged in`;
}

// console.log(loginMsg(""));

//situation: when no of arguments is unknown
function calculatePrice(...price){ //REST operator. any no of items can be send to this function
    return `prices received are : ${price}`;
}
// console.log(calculatePrice(100, 200, 300));

//passing object to function
function passingObj(obj){
    return `product is ${obj.productName} and price is ${obj.price}`;
}
const val = passingObj({
    productName:"Pen",
    price: 100
});
console.log(val);


