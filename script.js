// user greeting
let userName = prompt('Welcome! Who are you?')
userName ? document.getElementById('greeting').innerText = (`Hello ${userName}!`) : document.getElementById('greeting').innerText = 'Hello!'

