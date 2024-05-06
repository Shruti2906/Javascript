
const clock = document.getElementById("clock");

// console.log(date.toLocaleDateString());

setInterval(function(){
    let date = new Date();
    // console.log(date);
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);    //1000 - for 1 second........2000 for 2 sec

