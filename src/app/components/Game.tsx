"use client";

import { observer } from "mobx-react-lite";
import { gameStore } from "../stores/GameStore";
import Hand from "./Hand";

const Game = observer(() => {
  const { players } = gameStore;
  const userPlayer = players[0];

  return (
    <div>
      <Hand hand={userPlayer.hand} />
    </div>
  );
});

export default Game;
