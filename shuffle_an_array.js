function shuffle(input) {
    let numberOfCardsToShuffle = input.length;

// While there are elements in the array
    while (numberOfCardsToShuffle > 0) {
// Pick a random card
        card = Math.floor(Math.random() * numberOfCardsToShuffle);
// Decrease numberOfCardsToShuffle by 1
        numberOfCardsToShuffle--;
// And swap the last element with it
        temp = input[numberOfCardsToShuffle];
        input[numberOfCardsToShuffle] = input[card]; 
        input[card] = temp;
    }
    return input;
}
let deck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(deck));
// console.log(JSON.stringify(deck, null, 2));