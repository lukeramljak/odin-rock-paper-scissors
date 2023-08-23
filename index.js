function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('Rock', getComputerChoice()));
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('Paper', getComputerChoice()));
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('Scissors', getComputerChoice()));
const restart = document.querySelector('.restart');
restart.addEventListener('click', () => restartGame());

let playerScore = 0;
let computerScore = 0;

const pscore = document.querySelector('.player-score');
pscore.textContent = `You: ${playerScore}`;
const cscore = document.querySelector('.computer-score');
cscore.textContent = `Computer: ${computerScore}`;

const result = document.querySelector('.result');

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result.textContent = "It's a tie!";
  } else if (playerWins(playerSelection, computerSelection)) {
    increasePlayerScore(playerSelection, computerSelection);
  } else {
    increaseComputerScore(playerSelection, computerSelection);
  }

  if (playerScore == 5 || computerScore == 5) {
    result.textContent = 'Game over!';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    restart.style.display = 'block';
  }
}

function playerWins(playerSelection, computerSelection) {
  if (playerSelection == 'Paper' && computerSelection == 'Rock'
    || playerSelection == 'Scissors' && computerSelection == 'Paper'
    || playerSelection == 'Rock' && computerSelection == 'Scissors') {
    return true;
  };
}

function increasePlayerScore(playerSelection, computerSelection) {
  playerScore += 1;
  result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  pscore.textContent = `You: ${playerScore}`;
}

function increaseComputerScore(playerSelection, computerSelection) {
  computerScore += 1;
  result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  cscore.textContent = `Computer: ${computerScore}`;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  pscore.textContent = `You: ${playerScore}`;
  cscore.textContent = `Computer: ${computerScore}`;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  restart.style.display = 'none';
  result.textContent = 'Ready!';
}