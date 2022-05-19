let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let drawCard = document.getElementById("newcard-el")


function getRandomCard() {
    return 7}


function startGame() {
    renderGame()
}
let randomNumber = Math.random()

console.log(randomNumber)

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    } 
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    let drawnCard = getRandomCard()
    console.log("Drawing a new card from the deck!")
    sum += drawnCard
    cards.push(drawnCard)
    console.log(cards)
    startGame()
}
