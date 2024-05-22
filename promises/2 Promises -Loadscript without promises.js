alert('my script loaded');
console.log('my script loaded');

// function loadscript(src, callback){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = function(){
//         console.log('script loaded', src);
//         callback(null, src);
//     }
//     script.onerror = function(){
//         console.log('Error Loading');
//         callback(new Error('src got some error'), null);
//     }
//     document.body.appendChild(script);
// }

// const hello = function (error, src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert(`hello now we'll be notified when our script is loaded\n ${src}`);
// }
// loadscript('https://cdn.jsdelivr.net/gh/Shruti2906/MyScript@main/myscript.js', hello);

