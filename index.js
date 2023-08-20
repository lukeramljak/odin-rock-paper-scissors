function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection == 'rock' && computerSelection == 'paper'
    || playerSelection == 'paper' && computerSelection == 'scissors'
    || playerSelection == 'scissors' && computerSelection == 'rock'
  ) {
    computerScore += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
}

let playerScore;
let computerScore;

function game() {
  let i = 5;
  while (i > 0) {
    const playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    i--;
  }
  if (playerScore == computerScore) {
    return "It's a tie!";
  } else if (playerScore < computerScore) {
    return "You lose!";
  } else {
    return "You win!";
  }
}

console.log(game());