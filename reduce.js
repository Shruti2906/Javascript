
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// }, 0);

const sum = myNums.reduce((acc, currval) => acc+currval, 0);

// console.log(myTotal);
 
const shopingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Java Course",
        price: 3999
    },
    {
        itemName: "Python Course",
        price: 5999
    }
]
const totalPrice = shopingCart.reduce((acc, currval) => (acc+currval.price), 0);
console.log(totalPrice);
