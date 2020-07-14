function draw() {
    // 0 <= number < 4
    const numberCard = Math.floor(Math.random() * deck.length);
    // {string "Kartenname"}
    const nameCard = deck[numberCard]
     // entfernt Position {numberCard} aus {deck}
    deck.splice(numberCard, 1);
    // return {string: "Kartenname"}
    return nameCard;
}


function interpret(divCard) {
    let divination = "";
    /*
     * Positionen:
     * 1: Thema
     * 2: Einstellung
     * 3: Vorschlag
     * 4: Ausblick
     */
    switch (divCard) {
        case "Der Narr": divination += " steht für die neugierige, offene und experimentierfreudige Seite und für spontanes Handeln. Er vermag gut zu improvisieren, kann aber auch manche Überraschung und Chaos anzetteln.\n";
            switch (turn) {
                case 1: divination += "Es geht um Offenheit, um anfängliches Chaos, um die Lust etwas auszuprobieren und um Überraschungen.\n"
                    break;
                case 2: divination += "Sie stehen der Frageangelegenheit neugierig gegenüber und haben Lust, es einfach mal zu versuchen und zu sehen, was möglich ist.\n"
                    break;
                case 3: divination += "Vergessen sie einmal alle Sorgen und Pläne, jeglichen ernst und alle Vorsicht. Probieren sie einfach etwas aus. Gehen sie unbekümmert vor und vertrauen sie auf ihre Instinkte, die sie vor Gefahr warnen werden.\n"
                    break;
                case 4: divination += "Vor ihnen liegt ein Neuanfang, bei dem noch alles offen ist. Wenn sie spontan reagieren und gern improvisieren, dann wird es sehr lebendig werden und ihnen Freude machen.\n"
                    break;
            }
            break;

        case "Der Magier": divination += " ist magisch.\n";  // Was das Bild ausdrückt
        switch (turn) {
            case 1: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
            case 2: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
            case 3: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
            case 4: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
        }
            break;
    
        case "Die Herrscherin": divination += " ist herrschsüchtig.\n";
        switch (turn) {
            case 1: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
            case 2: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
            case 3: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
            case 4: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
        }
            break;
   
        case "Die Hohepriesterin": divination += " ist hochmütig.\n";
        switch (turn) {
            case 1: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
            case 2: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
            case 3: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
            case 4: divination += `${divCard} liegt auf Position ${turn}.\n`
                break;
        }
            break;
        }
    return divCard + divination; 
/*
 * gibt string zurück: 
 * "{Kartenname} ist {Eigenschaft}.\n
 * {Kartenname} liegt auf Position {turn}" 
 * -> der Teil wird später ersetzt durch die Deutung der Position der Karte
 */
}


function main() {
    while (deck.length > 0) {
        turn++
        card = draw();
        // Ausgabe {string: "{turn}, Kartenname"}
        console.log(`Zug ${turn}, du ziehst: ${card}`);
        console.log(interpret(card))
    }
}


// Start
let deck = ["Der Narr", "Der Magier", "Die Herrscherin", "Die Hohepriesterin"];
turn = 0;
main();