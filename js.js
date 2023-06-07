let playGameScreen = document.getElementById("playGame");
let playGameButton = document.getElementById("playButton");

playGameButton.onclick = () => {
  playGameScreen.style.display = "none";
}



let playerDeck = [];
let oppDeck = [];
const deckOfCards = [];

const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

window.onload = () => {
  loadCards();
  shuffleCards();
  splitCards();
};

function loadCards() {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deckOfCards.push(card);
    }
  }
}

function shuffleCards() {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deckOfCards.length);
    let location2 = Math.floor(Math.random() * deckOfCards.length);
    let tmp = deckOfCards[location1];
    deckOfCards[location1] = deckOfCards[location2];
    deckOfCards[location2] = tmp;
  }
}

function splitCards() {
  playerDeck = deckOfCards.slice(0, 26);
  oppDeck = deckOfCards.slice(26, 52);
}

let player = document.getElementById("playerDeck");
let playerCard = document.getElementById("playerCard");
let opponentCard = document.getElementById("opponentCard");
let playerScore = document.getElementById("playerScore")
let opponentScore = document.getElementById("opponentScore")
let pScore = 1;
let oScore = 1;

player.onclick = () => {
  if (playerDeck.length === 0) {
    if(pScore > oScore){
      alert("You Win!!!");
    } else{
      alert("You're Trash and the CPU won!!!");
    }
    location.reload();
  } else {
    let pCard = playerDeck.shift();
    let oCard = oppDeck.shift();
    playerCard.innerHTML = Object.values(pCard);
    opponentCard.innerHTML = Object.values(oCard);
    calculate(pCard.Value, oCard.Value);
  }
};

function calculate(card1, card2) {
  switch (card1) { 
    case "J":
      card1 = 11;
      break;
    case "Q":
      card1 = 12;
      break;
    case "K":
      card1 = 13;
      break;
    case "A":
      card1 = 14;
      break;
  }
  switch (card2) {
    case "J":
      card2 = 11;
      break;
    case "Q":
      card2 = 12;
      break;
    case "K":
      card2 = 13;
      break;
    case "A":
      card2 = 14;
      break;
  }

  if (card1 > card2) {
    console.log("Player Wins");
    playerScore.innerHTML = `Score: ${pScore++}`;
    playerScore.classList.add("flash");
    setTimeout(() => {
      playerScore.classList.remove("flash");
    }, 100);
  } else {
    console.log("CPU Wins");
    opponentScore.innerHTML = `Score: ${oScore++}`;
    opponentScore.classList.add("flash");
    setTimeout(() => {
      opponentScore.classList.remove("flash");
    }, 100);
  }
}
