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

const cscore = document.querySelector('.computer-score');
cscore.textContent = `Computer score: ${computerScore}`;
const pscore = document.querySelector('.player-score');
pscore.textContent = `Your score: ${playerScore}`;


function playRound(playerSelection, computerSelection) {
  const result = document.querySelector('.result');

  if (playerSelection == computerSelection) {
    result.textContent = "It's a tie!";
  } else if (playerSelection == 'rock' && computerSelection == 'paper'
    || playerSelection == 'paper' && computerSelection == 'scissors'
    || playerSelection == 'scissors' && computerSelection == 'rock'
  ) {
    computerScore += 1;
    cscore.textContent = `Computer score: ${computerScore}`;
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore += 1;
    pscore.textContent = `Your score: ${playerScore}`;
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  }
}

// function game() {

//   if (playerScore == computerScore) {
//     return "It's a tie!";
//   } else if (playerScore < computerScore) {
//     return "You lose!";
//   } else {
//     return "You win!";
//   }
// }
