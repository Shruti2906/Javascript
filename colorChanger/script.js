const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector("body");

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', (event)=>{
        console.log(event);
        console.log(event.target)
        // if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        // }
        
})

})