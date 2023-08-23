function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

let playerScore = 0;
let computerScore = 0;

const pscore = document.querySelector('.player-score');
pscore.textContent = `Your score: ${playerScore}`;
const cscore = document.querySelector('.computer-score');
cscore.textContent = `Computer score: ${computerScore}`;

const result = document.querySelector('.result');

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result.textContent = "It's a tie!";
  } else if (playerSelection == 'paper' && computerSelection == 'rock'
    || playerSelection == 'scissors' && computerSelection == 'paper'
    || playerSelection == 'rock' && computerSelection == 'scissors'
  ) {
    increasePlayerScore(playerSelection, computerSelection);
  } else {
    increaseComputerScore(playerSelection, computerSelection);
  }
}

function increasePlayerScore(playerSelection, computerSelection) {
  playerScore += 1;
  result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  pscore.textContent = `Your score: ${playerScore}`;
}

function increaseComputerScore(playerSelection, computerSelection) {
  computerScore += 1;
  result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  cscore.textContent = `Computer score: ${computerScore}`;
}

function game() {
  if (playerScore < computerScore) {
    return "You lost!";
  } else {
    return "You won!";
  }
}
