import Deck from "./deck.js";

export default function startGame() {
  const deck = new Deck();
  deck.shuffle();

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
  const playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
  const computerDeck = new Deck(
    deck.cards.slice(deckMidpoint, deck.numberOfCards)
  );

  return { playerDeck, computerDeck };
}
