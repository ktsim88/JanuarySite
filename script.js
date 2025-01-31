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
let userWinsCount = 0
let userSelect = document.getElementById('userSelect')
let userImage = document.getElementById('userImage')
let numUserWinsDisplay = document.getElementById('numUserWins')


//vars for computerscore
let compScore = 0
let compWinsCount = 0
let compScoreDisplay = document.getElementById('compScoreDisplay')
let compSelect = document.getElementById('computerSelect')
let compImage = document.getElementById('compImage')
let numCompWinsDisplay = document.getElementById('numCompWins')


let winner = document.getElementById('winner')
// rounds
let round = 0;
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
  
  userWinsCount++;
  numUserWinsDisplay.innerText = `Wins: ${userWinsCount}`
}

function compWins() {
  compScore++
  compScoreDisplay.innerText = compScore
  winner.textContent = 'Computer wins this round!'
  roundsPlayed()

  compWinsCount++;
  numCompWinsDisplay.innerText = `Wins: ${compWinsCount}`
}

function tie() {
  console.log("tied")
  compScore++
  userScore++
  userScoreDisplay.innerText = userScore
  compScoreDisplay.innerText = compScore
  winner.innerText = 'its a tie!'
  roundsPlayed()
  userWinsCount++;
  numUserWinsDisplay.innerText = `Wins: ${userWinsCount}`
  compWinsCount++;
  numCompWinsDisplay.innerText = `Wins: ${compWinsCount}`
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
  gameOver();
}

// rounds
function roundsPlayed() {
  round++
  roundDisplay.innerText = `Round: ${round}/5`
}
// game over 
function gameOver() {
  if (userWinsCount >= 3) {
    finalWinner.innerText = 'Congrats! You won the game! Click Reset to Play Again'
  } else if (compWinsCount >= 3) {
    finalWinner.innerText = 'Dang! How did you lose against the computer!?! Click Reset to Play Again'
  } else if (userWinsCount === 3 && compWinsCount === 3) {
    finalWinner.innerText = 'Play one more round.'
  }

}


//reset game
function resetGame() {
  userScore = 0
  compScore = 0
  round = 0
  userScoreDisplay.innerText = userScore
  compScoreDisplay.innerText = compScore
  roundDisplay.innerText = `Round: ${round}/5`
  winner.innerText = ''
  userSelect.innerText = ''
  compSelect.innerText = ''
  userImage.src = "imgs/2.png";  
  compImage.src = "imgs/1.png";
  compWinsCount = 0
  userWinsCount = 0
  finalWinner.innerText = ''
  numUserWinsDisplay.innerText = ''
  numCompWinsDisplay.innerText = ''
}