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
const restart = document.getElementById('restart');
restart.addEventListener('click', () => restartGame());

let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
setScoreContent();

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
    setButtonStates('none', 'block');
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
  playerScoreElement.textContent = `You: ${playerScore}`;
  playerScoreElement.parentElement.classList.add('winner-colour');
  showWinnerColour(playerScoreElement);
}

function increaseComputerScore(playerSelection, computerSelection) {
  computerScore += 1;
  result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
  computerScoreElement.parentElement.classList.add('winner-colour');
  showWinnerColour(computerScoreElement);
}

// TODO: remove timeout and instead keep winner green until next click
function showWinnerColour(element) {
  setTimeout(() => {
    element.parentElement.classList.remove('winner-colour');
  }, 600);
}

function setButtonStates(state1, state2) {
  rock.style.display = state1;
  paper.style.display = state1;
  scissors.style.display = state1;
  restart.style.display = state2;
}

function setScoreContent() {
  playerScoreElement.textContent = `You: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  result.textContent = 'Ready!';
  setScoreContent();
  setButtonStates('block', 'none');
}