const randomNumer = parseInt(Math.random() * 10 + 1)
console.log(randomNumer);
const input = document.querySelector('#userInput')
const submit = document.querySelector('#submit')
const prevGuess = document.querySelector('#Guesses')
const remGuess = document.querySelector('#Remaing')

let myArr = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click' , function(f){
        f.preventDefault();
        const guessNum = parseInt(input.value)
        console.log(guessNum);
        validateGuess();
    })
}

function validateGuess(guessNum){
    if(isNaN(guessNum)) {
        alert('Please Enter a valid Number')
    }
    else if(guessNum <= 1 || guessNum >= 10){
        alert('Number must lies between 1 to 10')
    }
    else{
        myArr.push(guessNum)
        prevGuess.innerHTML += `${guessNum}, `
        numGuess++;
        if(numGuess === 6){
            alert('Game Over')
        }else{
            checkGuess()
        }
    }
}

function checkGuess(guessNum){
    if(guessNum === randomNumer){
        alert('Hurryyyy!! Your guess is correct')
    }else{
        validateGuess();
        endGame();
    }
}

function endGame(){
    input.value = '';
    input.setAttribute('disabled','');
}