"use strict";

let highscoreMessage = document.querySelector(".highscore");
let scoreMessage = document.querySelector(".score");
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let checkButton = document.querySelector(".check");
let message = document.querySelector(".message");
let secret = document.querySelector(".number");
let again = document.querySelector('.again');
let body = document.querySelector('body');
let highscore = 0;
let score = 20;

let guessFunction = () => {
    let guess = Number(document.querySelector('.guess').value);
    validate(guess);
    console.log(secretNumber);
};
checkButton.addEventListener("click", guessFunction);

const displayMessage = (sms) => {
    message.textContent = sms
}

function validate(guess){
    if(!guess){ displayMessage('🛑 No Number')}
    else { WinOrLose(guess); }
}

function WinOrLose(guess){
    if(guess === secretNumber){
        secret.textContent = secretNumber;
        displayMessage('Correct Number');
        body.style.backgroundColor = '#60b347';
        if(score > highscore){
            highscore = score;
            highscoreMessage.textContent = highscore;
            secret.style.fontSize = '8rem';
            secret.style.width = '25rem';
        }

    }else if(guess !== secretNumber) {
        guess > secretNumber? displayMessage('Too High') : displayMessage('Too Low');
        --score;
        scoreMessage.textContent  = score; 
    }

    if(score < 1) {
        displayMessage('You Lost The Game');
        body.style.backgroundColor = '#dc143c';
        checkButton.style.display = 'none';
    }
}

let againFuntion =  () => {
    secret.textContent = '?';
    displayMessage('start guessing...');
    score = 20;
    scoreMessage.textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    body.style.backgroundColor = '#222';
    secret.style.width = '15rem';
    checkButton.style.display = 'block';
    // console.log(secretNumber);
}
again.addEventListener('click', againFuntion);

