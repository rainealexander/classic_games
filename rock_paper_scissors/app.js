const computerDisplay = document.getElementById('computer-choice');
const playerDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('game-result');

const choices = document.querySelectorAll('button');

const throwsText = ['rock', 'paper', 'scissors'];
const throwsEmoji = ['✊', '✋', '✌️'];

let playerChoice;
let computerChoice;
let result;

choices.forEach(choice => choice.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerDisplay.innerHTML = playerChoice;
  getComputerChoice();
}));

function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3);
  computerChoice = throwsText[choiceNum];
  computerDisplay.innerHTML = computerChoice;
  getResult();
}

function getResult() {
  console.log('player: ', playerChoice);
  console.log('computer: ', computerChoice);
  if (playerChoice === computerChoice) {
    result = 'it\'s a draw';
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'scissors') {
      result = 'player wins!';
    } else {
      result = 'computer wins :(';
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'player wins!';
    } else {
      result = 'computer wins :(';
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'paper') {
      result = 'player wins!';
    } else {
      result = 'computer wins :(';
    }
  }
  resultDisplay.innerHTML = result;
}
