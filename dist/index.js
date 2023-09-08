const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const restart = document.getElementById('restart');

const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const resultElement = document.querySelector('.result');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => playRound('Rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('Paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('Scissors', getComputerChoice()));
restart.addEventListener('click', () => restartGame());

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    resultElement.textContent = "Tie!";
    return;
  }

  if (playerChoice == 'Paper' && computerChoice == 'Rock'
    || playerChoice == 'Scissors' && computerChoice == 'Paper'
    || playerChoice == 'Rock' && computerChoice == 'Scissors') {
    playerScore += 1;
    resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
  }

  setScoreTextContent();
  checkIfGameOver();
}

function checkIfGameOver() {
  if (playerScore == 5 || computerScore == 5) {
    resultElement.textContent = 'Game over. Play again?';
    setButtonStates('none', 'block');
  }
}

function setButtonStates(state1, state2) {
  rock.style.display = state1;
  paper.style.display = state1;
  scissors.style.display = state1;
  restart.style.display = state2;
}

function setScoreTextContent() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  resultElement.textContent = 'Ready!';
  setScoreTextContent();
  setButtonStates('block', 'none');
}