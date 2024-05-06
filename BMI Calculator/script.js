
const form = document.querySelector('form');

form.addEventListener("submit", (event)=>{
    event.preventDefault()    //prevent default action, here submit

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = `Plese give a valid height`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = `Plese give a valid weight`;
    }
    else{
        const bmi = (weight/((height*weight))).toFixed(2);
        
        let msg = ''
        if(bmi < 18.6){
            msg = `You are Under Weight`;
        }
        else if(bmi>= 18.6 && bmi<=24.9){
            msg = `You are Normal Range`;
        }
        else{
            msg = `You are Overweight`;
        }
        //show the result
        results.innerHTML = `<span>${bmi}</span><br>${msg}`;
    }

})