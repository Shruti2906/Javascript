/////previously written LoadScript function using promise

const loadscript = (src)=>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = ()=>{
            console.log('succes');
            resolve(1);
        }
        script.onerror = ()=>{
            console.log('error');
            reject(0);
        }
    })
}

let p1 = loadscript('https://cdn.jsdelivr.net/gh/shruti2906/myscript@main/myscript.js')
p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log('we are sry, we are having problems');
})