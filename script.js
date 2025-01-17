// user greeting
let userName = prompt('Welcome! Who are you?')
userName ? document.getElementById('greeting').innerText = (`Hello ${userName}!`) : document.getElementById('greeting').innerText = 'Hello!'

//user score
let userScore = userName
userScore ? document.getElementById('score').innerText = (`${userName}'s Score`) : document.getElementById('score').innerText = 'Your Score'

// instruction button
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
//codecademy js
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "it was a tie";
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "computer won";
      } else {
        return "you won";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "you won";
      } else {
        return "computer won";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        return "you won";
      } else {
        return "computer won";
      }
    }
  }
function playerScore() {
    const userScore = document.getElementById('userScore')
    if (userChoice === getComputerChoice) {
        return userScore + 1
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return userScore + 1
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return userScore + 1
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return userScore + 1
    } else {
        return userScore + 0
    }     
}
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice))
}
