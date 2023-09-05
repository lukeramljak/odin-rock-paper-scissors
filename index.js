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
restart.style.display = 'none';

let playerScore = 0;
let computerScore = 0;

const pScore = document.querySelector('.player-score');
pScore.textContent = `You: ${playerScore}`;
const cScore = document.querySelector('.computer-score');
cScore.textContent = `Computer: ${computerScore}`;

const result = document.querySelector('.result');
const scoreBox = document.querySelector('.score-box');

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
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
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
  pScore.textContent = `You: ${playerScore}`;
  pScore.parentElement.classList.add('winner-colour');
  showWinnerColour(pScore);
}

function increaseComputerScore(playerSelection, computerSelection) {
  computerScore += 1;
  result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  cScore.textContent = `Computer: ${computerScore}`;
  cScore.parentElement.classList.add('winner-colour');
  showWinnerColour(cScore);
}

// TODO: remove timeout and instead keep winner green until next click
function showWinnerColour(element) {
  setTimeout(() => {
    element.parentElement.classList.remove('winner-colour');
  }, 600);
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = `You: ${playerScore}`;
  cScore.textContent = `Computer: ${computerScore}`;
  rock.style.display = 'block';
  paper.style.display = 'block';
  scissors.style.display = 'block';
  restart.style.display = 'none';
  result.textContent = 'Ready!';
}