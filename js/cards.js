var suit        = ['Diamond', 'Spade', 'Heart', 'Club'];
var value       = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var usedCards   = [];
var randomSuit  = 0;
var randomValue = 0;
var usedCard    = 0;
function getCard(){
    randomSuit = Math.floor(Math.random() * suit.length);
    randomValue = Math.floor(Math.random() * value.length);
    usedCard = (randomSuit * 9) + randomValue + 1;
    return usedCard;
}
function validCards(asd){
    return usedCards.indexOf(asd) == -1;
}
function array(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
getCard();
usedCards.push(usedCard);
if (usedCards[0] == 16){
    console.log('Тебе жопа!');
}else{
    console.log('Ваша карта: ' + value[randomValue] + ' ' + suit[randomSuit]);
    getCard();
    while (usedCard != 16){
        if (!validCards(usedCard)){
            getCard();
        }else{
            usedCards.push(usedCard);
            console.log('Карта: ' + value[randomValue] + ' ' + suit[randomSuit]);
        }
    }
    usedCards.push(usedCard);
    console.log('Queen of Spades');
}
console.log("Всего карт выпало: " + usedCards.length);
console.log(usedCards);
console.log(usedCards.sort(array));