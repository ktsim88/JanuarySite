// user greeting
let userName = prompt('Welcome! Who are you?')
userName ? document.getElementById('greeting').innerText = (`Hello ${userName}!`) : document.getElementById('greeting').innerText = 'Hello!'

//user score
let userScore = userName
userScore ? document.getElementById('score').innerText = (`${userName}'s Score`) : document.getElementById('score').innerText = 'Your Score'

// instruction button
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
