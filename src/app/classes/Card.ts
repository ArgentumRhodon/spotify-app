import { Rank, Suit } from "../types";

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
    public unicode: string;

    constructor(rank: Rank, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
        this.value = valueCards[rank];
        this.unicode = `${symbolUnicodes[this.suit]}${rank}}`;
    }

    compare = (other: Card) => {
        if (this.value === other.value) return 0;
        if (this.value > other.value) return 1;
        if (this.value < other.value) return -1;
    };
}
