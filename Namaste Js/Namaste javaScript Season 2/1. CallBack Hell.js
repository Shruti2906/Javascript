const cart = ["shoes", "kurtas"];

api.createOrder(cart, function (){
    api.proceedToPayment(function (){
        api.showOrderSummary(function (){
            api.updateWallet()
        })
    })    
})




/*

1. Importance of callbacks:
            -they are super important in writing async code in javascript.
            in fact async programming in js exist because of callbacks.

Issues of CallBack:

1.CallBack Hell:
    we cannot write it like this:
        api.createOrder();
        api.proceedToPayment();
        because ->have to write it asynchronously as these are async operation.
                but  proceedToPayment() is dependent on createOrder(). i.e proceedToPayment() cannot be executed without completion of createOrder().
                so we have to write it like this in a callback-
                api.createOrder(function(){
                    api.proceedToPayment();
                })

    so, when we a large codebase and the apis are here n there, one after another.;here we end up falling in the callback hell.
    CallBack:
        one callback inside another callback, inside another callback or some if statement & some random things are happenig makes this callback hell.
        -& our code starts to grow horizontally instead of vertically.

        -this kind of code structure is very UNREADABLE & UNMAINTAINABLE.

        -This structure is also known as 'PYRAMID OF DOOM'.

        summary-> 'callback inside callback inside callback makes code unmaintainable'
-------
2.
    Inversion of Control:
        -Its another problem we see while using callbacks.
        -'Inversion of Control is we loose control of our code while we are using callbacks.'
        eg.
            api.createOrder(cart, function (){
                api.proceedToPayment();
            })
            
            here we are giving our code i.e proceedToPayment() to createOrder() and blindly trusting it that it will call function.
            but this createOrder() could have been in some other service or some other developer wrote it, or some intern wrote it.
            we're blindly trusting create order api. there could be bugs in createOrder(). 
            What if our callback function was never called. what if it called proceedToPayment() twice...
            So,
                whenever we pass our callback function, we are giving the control of our piece of code to some other code.
                & we don't know what's happeing behind the scenes.

            summary-> 'we loose control of our code'





*/

// Another callback Example:

// task1(){

// }
// task2(){

// }
// task3(){

// }
// to make is async

//now task1, task2, task3 will execute in any order as per there timings.
function task1(){
    setTimeout(()=>{
        console.log("task 1 completed");
    }, 2000);
}
function task2(){
    setTimeout(()=>{
        console.log("task 2 completed");
    }, 1000);
}
function task3(){
    setTimeout(()=>{
        console.log("task 3 completed");
    }, 3000);
}
// but what if task2 is dependent on task1, i.e task2 should run after completion of task1.
// now we need to pass task2 as a callback to task1, so that after its own completion task1 will call task2.
function task1(callback){
    setTimeout(()=>{
        console.log("task 1 completed");
        callback()
    }, 2000);
}
function task2(callback){
    setTimeout(()=>{
        console.log("task 2 completed");
        callback();
    }, 1000);
}
function task3(){
    setTimeout(()=>{
        console.log("task 3 completed");
    }, 3000);
}
task1(()=>{
    task2(()=>{
        task3(()=>{

        });
    });
});
    
