import { makeAutoObservable } from "mobx";
import { Card, Deck } from "../classes";
import { Player } from "../types/Player";
import { Mode } from "../types";

class GameStore {
  players: Player[] = [];
  // Cards played
  table: Card[] = [];
  currentPlayerId: number = 0;
  // Games always start in singles with the 2 of D
  mode: Mode = "singles";
  // Winner is null until someone wins
  winner: number | null = null;

  constructor() {
    makeAutoObservable(this);
    this.startGame();
  }

  startGame() {
    this.players = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      hand: [],
      knocked: false,
    }));
    this.dealCards();
    this.determineStartingPlayer();
    this.table = [];
    this.mode = "singles";
    this.winner = null;
  }

  dealCards() {
    const deck = new Deck(true);
    deck.shuffleDeck();

    this.players.forEach((player) => {
      for (let i = 0; i < 13; i++) {
        const card = deck.drawCard();
        if (card) player.hand.push(card);
      }
    });
  }

  // Player with the 2 of D starts the game
  determineStartingPlayer() {
    this.currentPlayerId = this.players.findIndex((player) => {
      player.hand.some((card) => card.rank === "2" && card.suit === "diamonds");
    });
  }
}

export const gameStore = new GameStore();
