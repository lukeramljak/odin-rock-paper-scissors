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