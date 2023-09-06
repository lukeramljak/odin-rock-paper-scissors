const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const restart = document.getElementById('restart');

const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const resultElement = document.querySelector('.resultElement');

let playerScore = 0;
let computerScore = 0;
setScoreContent();

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
    resultElement.textContent = "It's a tie!";
  } else if (playerWins(playerChoice, computerChoice)) {
    increasePlayerScore(playerChoice, computerChoice);
  } else {
    increaseComputerScore(playerChoice, computerChoice);
  }

  if (playerScore == 5 || computerScore == 5) {
    resultElement.textContent = 'Game over!';
    setButtonStates('none', 'block');
  }
}

function playerWins(playerChoice, computerChoice) {
  if (playerChoice == 'Paper' && computerChoice == 'Rock'
    || playerChoice == 'Scissors' && computerChoice == 'Paper'
    || playerChoice == 'Rock' && computerChoice == 'Scissors') {
    return true;
  };
}

function increasePlayerScore(playerChoice, computerChoice) {
  playerScore += 1;
  resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
  playerScoreElement.textContent = `You: ${playerScore}`;
  playerScoreElement.parentElement.classList.add('winner-colour');
  showWinnerColour(playerScoreElement);
}

function increaseComputerScore(playerChoice, computerChoice) {
  computerScore += 1;
  resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
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
  resultElement.textContent = 'Ready!';
  setScoreContent();
  setButtonStates('block', 'none');
}