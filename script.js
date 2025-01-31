// user greeting
let userName = prompt('Welcome! Who are you?')
userName ? document.getElementById('greeting').innerText = (`Hello ${userName}!`) : document.getElementById('greeting').innerText = 'Hello!'


userName ? document.getElementById('name').innerText = (`${userName}'s Score`) : document.getElementById('name').innerText = 'Your Score'
// instruction button
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
//codecademy js

//Vars for USerScore
let userScoreDisplay = document.getElementById('userScoreDisplay')
let userScore = 0
let userSelect = document.getElementById('userSelect')
let userImage = document.getElementById('userImage')

//vars for computerscore
let compScore = 0
let compScoreDisplay = document.getElementById('compScoreDisplay')
let compSelect = document.getElementById('computerSelect')
let compImage = document.getElementById('compImage')


let winner = document.getElementById('winner')
// rounds
let round = 1;
let roundDisplay = document.getElementById('round'); 
roundDisplay.innerText = `Round: ${round}/5`;
// game over word
let finalWinner = document.getElementById('finalWinner')
// winner functions
function userWins() {
  userScore++
  userScoreDisplay.innerText = userScore
  winner.innerText = 'User Wins'
  roundsPlayed()
}

function compWins() {
  compScore++
  compScoreDisplay.innerText = compScore
  winner.textContent = 'Computer wins this round!'
  roundsPlayed()
}

function tie() {
  console.log("tied")
  compScore++
  userScore++
  userScoreDisplay.innerText = userScore
  compScoreDisplay.innerText = compScore
  winner.innerText = 'its a tie!'
  roundsPlayed()
}

function image() {
  if (userSelect === 'scissors' || compSelect === 'scissors') {
    userImage.src = 'imgs/scissors.png'
    compImage.src = 'imgs/scissors.png'
  } else if (userSelect === 'paper' || compSelect === 'paper') {
    userImage.src = 'imgs/paper.png'
    compImage.src = 'imgs/paper.png'
  } else if (userSelect === 'rock' || compSelect === 'rock') {
    userImage.src = 'imgs/rock.png'
    compImage.src = 'imgs/rock.png'
  }
}
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      tie();
    } else {
      if (userChoice === "rock") {
        if (computerChoice === "paper") {
          compWins();
        } else {
          userWins();
        }
      }
      if (userChoice === "paper") {
        if (computerChoice === "rock") {
          userWins();
        } else {
          compWins();
        }
      }
      if (userChoice === "scissors") {
        if (computerChoice === "paper") {
          userWins()
        } else {
          compWins();
        }
      }
    }
  }
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
    userSelect.innerText = `You threw: ${userChoice}`;
    compSelect.innerText = `The computer threw: ${computerChoice}`;
  determineWinner(userChoice, computerChoice);
  image();
}

// rounds
function roundsPlayed() {
  round++
  roundDisplay.innerText = `Round: ${round}/5`
}

//reset game
function resetGame() {
  userScore = 0;
  compScore = 0;
  round = 0;
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
  roundDisplay.innerText = `Round: ${round}/5`;
  winner.innerText = '';
  userSelect.innerText = '';
  compSelect.innerText = '';
  userImage.src = "imgs/2.png";  
  compImage.src = "imgs/1.png";
}