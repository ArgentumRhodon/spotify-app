import { Suit } from "../types";

const valueCards: Record<Suit, number> = {
  diamonds: 0,
  clubs: 1,
  hearts: 2,
  spades: 3,
};

export const suitToValue = (suit: Suit) => {
  return valueCards[suit];
};
