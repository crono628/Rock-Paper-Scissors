let choices = ["rock", "paper", "scissors"];
let human = "you win";
let computer = "computer wins";
let tie = "tie, play again";

function computerPlay() {
  let num = choices[Math.floor(Math.random() * 3)];
  return num;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    round++;
    return tie;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    round++;
    return human;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    round++;
    return human;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    round++;
    return human;
  } else {
    computerScore++;
    round++;
    return computer;
  }
}

let playerScore = 0;
let computerScore = 0;
let round = 1;

let game = () => {
const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     playerSelection = button.id;
//   });
// });

  const playerSelection = prompt('choose')
  const computerSelection = computerPlay();

  console.log(
    `round ${round} - ${playRound(playerSelection, computerSelection)} `
  );
  console.log(`you chose ${playerSelection}, score is ${playerScore}`);
  console.log(`computer chose ${computerSelection}, score is ${computerScore}`);
  console.log("--");

  if (playerSelection === null) {
    return;
  }  
  if (playerScore !== 5) {
    if (computerScore !== 5) {
      game();
    } else {
      console.log("game over, the computer wins the series");
    }
  } else {
    console.log("game over, you win the series");
  }
};

game();