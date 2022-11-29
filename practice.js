let player = {
    name: "Sanduni",
    chips: 145
}

let cards = []
sum = 0
console.log(sum)
let hasBlackJack = false
let isAlive = false
let messageEl =  document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips



let message = "";



function  getRandomCard(){
    let randomCard = Math.floor(Math.random() * (13)) + 1
    if(randomCard > 10){
        return 10;
    } else if (randomCard ==1) {
        return 11;
    } else{
        return randomCard
    }
    
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    
    if (sum <= 20){
        message = "Do you want to draw a new card?"
        

        // else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        

    // else -> "You're out of the game! 😭"
    } else {
        message = "You're out of the game!"
    
        isAlive = false
    }
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    
    messageEl.textContent = message

}



function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    console.log("Drawings a new card")
    }
}
