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

const validSuits: Suit[] = ["hearts", "spades", "diamonds", "clubs"];

export class Deck {
  public deck: Card[] = [];
  public cardsDrawn: Card[] = [];

  constructor() {
    this.buildDeck();
  }

  buildDeck() {
    this.deck = [];
    this.cardsDrawn = [];

    validSuits.forEach((suit) => {
      validRanks.forEach((rank) => {
        this.deck.push(new Card(rank, suit));
      });
    });
  }

  drawCard() {
    if (!this.isEmpty()) {
      const topCard = this.deck.pop();
      this.cardsDrawn.push(topCard!);
      return topCard;
    }

    return null;
  }

  shuffleDeck(times: number = 1) {
    for (let i = 0; i < times; i++) {
      shuffleArray(this.deck);
    }
  }

  isEmpty() {
    return this.deck.length === 0;
  }
}
