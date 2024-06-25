const randomNumer = parseInt(Math.random() * 10 + 1);
console.log(randomNumer);
const input = document.querySelector('#userInput');
const submit = document.querySelector('#submit');
const prevGuess = document.querySelector('.Guesses');
const remGuess = document.querySelector('.Remaing');

let myArr = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number.');
    } else if (guess < 1 || guess > 10) {
        alert('Number must be between 1 and 10.');
    } else {
        myArr.push(guess);
        numGuess++;
        remGuess.textContent = `Remaining Guesses: ${5 - numGuess}`;
        if (numGuess === 5) {
            displayGuess(guess);
            alert(`Game Over! The random number was ${randomNumer}.`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumer) {
        alert('Congratulations! You guessed the number.');
        endGame();
    } else {
        alert('Try again!');
    }
}

function displayGuess(guess) {
    console.log(guess);
    input.value = '';
    if (prevGuess !== null) {
        prevGuess.textContent += guess + ' ';
    }
}

function endGame() {
    input.value = '';
    input.setAttribute('disabled', '');
    playGame = false;
}