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
  public cardsDrawn: Card[] = [];

  constructor() {
    this.buildDeck();
  }

  buildDeck() {
    this.cards = [];
    this.cardsDrawn = [];

    validSuits.forEach((suit) => {
      validRanks.forEach((rank) => {
        this.cards.push(new Card(rank, suit));
      });
    });
  }

  drawCard() {
    if (!this.isEmpty()) {
      const topCard = this.cards.pop();
      this.cardsDrawn.push(topCard!);
      return topCard!;
    }

    return null;
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
