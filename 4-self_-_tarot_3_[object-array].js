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

function draw(input) {
  card = input.shift();
  return card;
}

function main() {
  shuffle(deck);
  while (deck.length > 0) {
    turn++;
    draw(deck);
    console.log(`Zug ${turn}:`, card.name, card[`meaning${turn}`]);
  }
}

// Start
let deck = [
  (NARR = {
    name:
      "Der Narr.\nEr steht für die neugierige, offene und experimentierfreudige Seite und für spontanes Handeln. Er vermag gut zu improvisieren, kann aber auch manche Überraschung und Chaos anzetteln.\n",
    meaning1:
      "\nEs geht um Offenheit, um anfängliches Chaos, um die Lust etwas auszuprobieren und um Überraschungen.\n",
    meaning2:
      "\nSie stehen der Frageangelegenheit neugierig gegenüber und haben Lust, es einfach mal zu versuchen und zu sehen, was möglich ist.\n",
    meaning3:
      "\nVergessen sie einmal alle Sorgen und Pläne, jeglichen Ernst und alle Vorsicht. Probieren sie einfach etwas aus. Gehen sie unbekümmert vor und vertrauen sie auf ihre Instinkte, die sie vor Gefahr warnen werden.\n",
    meaning4:
      "\nVor ihnen liegt ein Neuanfang, bei dem noch alles offen ist. Wenn sie spontan reagieren und gern improvisieren, dann wird es sehr lebendig werden und ihnen Freude machen.\n"
  }),
  (MAGIER = {
    name:
      "Der Magier.\nEr steht für Aktivität, für Ideen und die Kraft, etwas in Bewegung zu setzen, Probleme zu kösen und Aufgaben zu meistern.\n",
    meaning1:
      "\nEs geht darum, Initiative zu ergreifen, etwas in Bewegung zu setzen und etwas aktiv zu meistern.\n",
    meaning2:
      "\nSie fühlen sich stark und kompetent, sind vom Fragethema fasziniert und bereit, darauf zuzugehen und es aktiv zu gestalten.\n",
    meaning3:
      "\nZeigen sie Iniative. Bringen sie eine Bewegung in Gang. Zeigen sie Entschlossenheit und den festen Willen, mögliche Probleme aus dem Weg zu räumen und zu meistern.\n",
    meaning4:
      "\nSie haben gute Aussichten. Sie werden geschickte Lösungen und den richtigen Weg finden, bis sie schlißlich als Meister dastehen.\n"
  }),
  (HERRSCHERIN = {
    name:
      "Die Herrscherin.\nSie verkörpert Mutter Natur und Wachstum, Fruchtbarkeit und alles Lebendige.\n",
    meaning1:
      "\nEs geht um lebendiges Wachstum, um Kreativität und um Fruchtbarkeit.\n",
    meaning2:
      "\nSie sind zuversichtlich, dass das Fragethema sich lebendig entfalten kann und wachsen wird, und sie sind bereit, sich liebevoll darum zu kümmern.\n",
    meaning3:
      "\nVertrauen sie auf die natürlichen Rhythmen. Wenn sie lange genug gebrütet haben, wird das Neue zur Welt kommen und sich lebendig entfalten.\n",
    meaning4:
      "\nEs wird eine gute Entwicklung geben. Sie werden einen fruchtbaren Boden betreten, auf dem alles gut wachsen und gedeihen kann.\n"
  }),
  (HOHEPRIESTERIN = {
    name:
      "Die Hohepriesterin.\nSie Verkörpert intuitives Wissen und die Bereitschaft, geduldig auf die richtige Gelegenheit zu warten.\n",
    meaning1:
      "\nEs geht um Vertrauen in die innere Stimme, um Nähe, Verständnis, Nachsicht und Milde.\n",
    meaning2:
      "\nSie haben ein tiefes Veständnis und ein gutes Gespür für das Fragethema und sie warten auf den richtigen Uagenblick, um dann in stimmiger Weise zu reagieren.\n",
    meaning3:
      "\nLassen sie den Dingen Zeit und vertrauen sie darauf, dass es gut wird und zum richtigen Zeitpunkt intuitiv das Richtige tun werden.\n",
    meaning4:
      "\nDie Dinge werden gut, wenn sie auf ihre innere Führung vertrauen und der Entwicklung genug Zeit geben.\n"
  })
];
let turn = 0;
main();