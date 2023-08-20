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
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {
  let i = 5;
  while (i > 0) {
    const playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    i--;
  }
}

console.log(game());