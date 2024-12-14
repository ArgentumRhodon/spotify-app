import { Rank, Suit } from "../types";
import { rankToValue, suitToValue } from "../utils";

const symbolUnicodes = {
  clubs: "\u2663",
  hearts: "\u2665",
  spades: "\u2660",
  diamonds: "\u2666",
};

export class Card {
  public rank: Rank;
  public suit: Suit;
  public value: number;
  public suitValue: number;
  public unicode: string;

  constructor(rank: Rank, suit: Suit) {
    this.rank = rank;
    this.suit = suit;
    this.value = rankToValue(rank);
    this.suitValue = suitToValue(suit);
    this.unicode = symbolUnicodes[this.suit];
  }

  compare = (other: Card) => {
    if (this.value === other.value) return 0;
    if (this.value > other.value) return 1;
    if (this.value < other.value) return -1;
  };

  is = (other: Card) => {
    return this.value === other.value && this.suit === other.suit;
  };
}
