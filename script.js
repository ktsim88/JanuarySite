// user greeting
let userName = prompt('Welcome! Who are you?')
userName ? document.getElementById('greeting').innerText = (`Hello ${userName}!`) : document.getElementById('greeting').innerText = 'Hello!'


// instruction button
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
//codecademy js

//Vars for USerScore
let userScoreDisplay = document.getElementById('userScoreDisplay')
let userScore = "0"
let userSelect = document.getElementById('userSelect')

//vars for computerscore
let compScore = "0"
let compScoreDisplay = document.getElementById('compScoreDisplay')
let compSelect = document.getElementById('compSelect')


 let winner = document.getElementById('winner')

function userWins() {
  userScore++
  userScoreDisplay.innerText = userScore
  console.log('User Wins');
}

function compWins() {
  compScore++
  compScoreDisplay.innerText = compScore
  console.log('computer Wins')
}
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return (userWins() && compWins());
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return compWins();
      } else {
        return userWins();
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return userWins();
      } else {
        return compWins();
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        return userWins()
      } else {
        return compWins();
      }
    }
  }
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  
    userSelect = `You threw: ${userChoice}`;
    compSelect = `The computer threw: ${computerChoice}`;
  winner = (determineWinner(userChoice, computerChoice));
}

//reset game
function resetGame(reset) {
  userScore = 0
  compScore = 0
}