let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl=document.getElemenstById("sum-el");
let sumEl=document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let player = {
    playerName: '홍길동',
    playerChips: 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent=player.namev+ ": $" + player.playerChips;

function getRandomCard(){
    let card = Math.floor(Math.random() * 13 ) + 1;
    if(card === 1) return 11;
    if(card > 10) return 10;
    return card;
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    isAlive = true;
    sum = firstCard+secondCard;
    renderGame();
    //let messageEl = document.getElementById('message-el');
}


function renderGame() {
    cardEl.textContent = "Cards: ";
    for(let i = 0; i<cards.length; i++){
        cardEl.textContent += cards[i] + ' ';
    }
    sumEl.textContent="Sum: " + sum;

    if(sum < 21) {
        message = "카드를 더 뽑으시겠습니까?";
    }
    if(sum == 21) {
        message = "승리";
        hasBlackJack = true;
    }
    else if(sum > 21) {
        message = "패배";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack===false){
        let card = getRandomCard();
        sum+=card;
        cards.push(card);
        renderGame();
    }
}