// "Deja Vu --- Number Guesing Game"

const gameCont = document.getElementById('game-container');
const userInput = document.getElementById('user-number');
const feedback = document.getElementById('feedback');
const playAgainBtn = document.getElementById('play-again');
const submitBtn = document.getElementById('submit');
const guesses = document.getElementById('guesses');
// const attempts = document.getElementById('attempts');

const randNum = Math.floor(Math.random() * 10) + 1;// returns a random integer from 1 -10

let attemptCount = 0;
let guessArray = [];

submitBtn.addEventListener('click', function randomNumberGuess() {

  let userNum = userInput.value;
  guessArray.push(userNum);

  if(userNum < randNum) {
    feedback.innerHTML = `<h2>Your number is too low :(</h2>`;
    gameCont.style.backgroundColor = '#c3073f';
  } else if 
  (userNum > randNum) {
    feedback.innerHTML = `<h2>Too High!!!</h2>`;
    gameCont.style.backgroundColor = '#c3073f';
  } else if
 (userNum == randNum) {
  feedback.innerHTML = `<h2>CORRECT!!!</h2>`;
  gameCont.style.backgroundColor = '#1dd38a';
   submitBtn.style.backgroundColor = '#5afaba';
   submitBtn.innerText = "CORRECT!!!";
   playAgainBtn.style.transform = 'scale(1.2)';
   playAgainBtn.style.boxShadow = '0px 0px 10px 4px rgba(255, 255, 255, 0.75)';
  }


  guesses.innerHTML = `<p class="guess-text">${guessArray}</p>`;
  
  attemptCount += 1;
  attempts.innerHTML = `<p class="guess-text">${attemptCount}</p>`;
});

playAgainBtn.addEventListener('click', function resetGame() {
  attempts.textContent = '';
  guesses.textContent = '';
  gameCont.style.backgroundColor = '#373737';
  feedback.innerHTML = '';
  submitBtn.style.backgroundColor = '#5afaba';
  submitBtn.innerText = "Take a guess";
  playAgainBtn.style.transform = 'scale(1)';
  playAgainBtn.style.boxShadow = '0px 0px 10px 2px rgba(0, 0, 0, 0.2)';
});

