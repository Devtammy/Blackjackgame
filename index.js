
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false  // Create a variable called isAlive and assign it to true
let message = ""    // Declare a variable called message and assign its value to an empty string
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Tammy",
    chips: 150
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    let randomNumber = Math.floor((Math.random() * 13) + 1)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

//Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
// Create a for loop that renders out all the cards instead of just two
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
// Write the conditional according to these rules:
    if (sum <= 20) {                                    // if less than or equal to 20 -> "Do you want to draw a new card?"
        message = "Do you want to draw a new card?" 
    } else if (sum === 21) {                            // else if exactly 21 -> You've got Blackjack!"
        message = "You've got Blackjack!" 
// Add hasBlackJack variable
        hasBlackJack = true
    } else {                                            // else -> "You're out of the game!"
        message = "You're out of the game!" 
        isAlive = false
    } 
    
    //Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
     
}
function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}

