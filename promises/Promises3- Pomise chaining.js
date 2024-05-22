let promise  = new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log('resolved after 2 seconds');
        resolve(56);
    }, 2000);
})
promise.then(function(value){
    console.log(value);
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve('promise 2');}, 2000)
        
    })
    return p2;
}).then((value)=>{
    console.log('we are done');
    return 2;   //even if its numberic value Js will automatically covert it into instantly returned promise
}).then((value)=>{
    console.log("this is handler and its not returnig any promise.let see what happens when we attach handler to this",value);
    // console.log('now we are finally done ', value)
}).then((value, error)=>{
    console.log('we are now in last handler',value, error);
})

