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
let userCount = document.getElementById('userCount')
let compCount = document.getElementById('computerCount')

function keepUserScore() {
  return (userCount + 1 && console.log('User Wins'));
}

function keepCompScore() {
  return compCount +1
}
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return (userCount++ && compCount++);
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return keepCompScore();
      } else {
        return keepUserScore();
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return keepUserScore();
      } else {
        return keepCompScore();
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        return keepUserScore()
      } else {
        return keepCompScore();
      }
    }
  }
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice))
}
