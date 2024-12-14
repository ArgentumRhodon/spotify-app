import { Card, Deck } from "../classes";
import { gameStore } from "../stores/GameStore";
import { cardSort } from "../utils";

test("starting player hand count is 13", () => {
  gameStore.players.forEach((player) => {
    expect(player.hand.length).toBe(13);
  });
});

test("all player hands are disjoint", () => {
  for (let i = 0; i < gameStore.players.length - 1; i++) {
    const playerA = gameStore.players[i];
    // Starts at zero to ensure hands don't have repeat cards either
    for (let j = i + 1; j < gameStore.players.length; j++) {
      const playerB = gameStore.players[j];

      for (let j = 0; j < playerA.hand.length; j++) {
        expect(playerA.hand[j].is(playerB.hand[j])).toBe(false);
      }
    }
  }
});

test("player hands have no repeats", () => {
  gameStore.players.forEach((player) => {
    const handSet = new Set(player.hand);
    expect(handSet.size).toBe(player.hand.length);
  });
});

test("player hands make valid deck", () => {
  let deck = new Deck(true);
  let allCards: Card[] = [];

  gameStore.players.forEach((player) => {
    allCards = allCards.concat(player.hand);
  });
  // "Serializes to the same string" error when using toEqual and raw arrays
  const stringyAllCards = JSON.stringify(allCards.sort(cardSort));
  const stringyDeck = JSON.stringify(deck.cards.sort(cardSort));
  expect(stringyAllCards).toBe(stringyDeck);
});
