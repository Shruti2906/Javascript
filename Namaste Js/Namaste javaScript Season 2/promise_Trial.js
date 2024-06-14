


createOrder()
.then(()=>{
    console.log("promise resolved");
})

function createOrder(){
    const pr = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true);    
        }, 2000);
        
    });
    return pr;
}

function t(){

    console.log("waiting");
}
t();
