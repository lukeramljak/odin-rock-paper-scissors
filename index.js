function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index]
}
