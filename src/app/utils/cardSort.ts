import { Card } from "../classes";

export const cardSort = (a: Card, b: Card): number => {
  // If same value, sort by suit
  if (a.value === b.value) {
    return a.suitValue - b.suitValue;
  } else {
    // Else, sort by value
    return a.value - b.value;
  }
};
