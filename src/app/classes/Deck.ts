import { Rank, Suit } from "../types";
import { shuffleArray } from "../utils";
import { Card } from "./Card";

const validRanks: Rank[] = [
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
  "A",
];

const validSuits: Suit[] = ["diamonds", "clubs", "hearts", "spades"];

export class Deck {
  public cards: Card[] = [];

  constructor(buildDeck: boolean = false) {
    if (buildDeck) this.buildDeck();
  }

  buildDeck() {
    this.cards = [];

    validSuits.forEach((suit) => {
      validRanks.forEach((rank) => {
        this.cards.push(new Card(rank, suit));
      });
    });
  }

  drawCard() {
    if (!this.isEmpty()) {
      return this.cards.pop()!;
    }

    return null;
  }

  addCard(card: Card) {
    if (this.cards.find((c) => c.is(card))) return;

    this.cards.push(card);
  }

  shuffleDeck(times: number = 1) {
    for (let i = 0; i < times; i++) {
      shuffleArray(this.cards);
    }
  }

  isEmpty() {
    return this.cards.length === 0;
  }
}
