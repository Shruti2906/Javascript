let randomNo = parseInt(Math.random()*100+1);

// setInterval(function(){
//     console.log(Math.random());
// }, 1000);

const submit = document.querySelector("#subt");
const userInput = document.querySelector('#guessField');
const guessSlots = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;

console.log("rand no: ", randomNo);
if(playGame){
    submit.addEventListener('click', (e)=>{
        console.log("clicked");
        e.preventDefault(); 
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(guess==='' || isNaN(guess)){
        alert('please enter a valid number')
        // return false;
    }
    else if(guess<1 || guess>100){
        alert('please enter a valid number from 1 to 100');
        // return false;
    }
    else{
        prevGuess.push(guess);
        if(numGuess >= 10){
            displayGuess(guess);
            displayMsg(`Game Over. Random number was ${randomNo}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    // return true;
}

function checkGuess(guess){
    if(guess===randomNo){
        displayMsg("You guessed it Right");
        endGame();
    }
    else if(guess<randomNo){
        displayMsg(`Number is tooo low`);
    }
    else if(guess>randomNo){
        displayMsg(`Number is tooo high`);
    }

}
//cleanup
function displayGuess(guess){
    userInput.value = ''
    guessSlots.innerHTML += `${guess},  `;
    
    remaining.innerHTML = `${10-numGuess}`;
    numGuess++;
}

function displayMsg(msg){
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    userInput.innerHTML = ''
    userInput.setAttribute("disabled", '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNo = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1;
        guessSlots.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true
    })
}

