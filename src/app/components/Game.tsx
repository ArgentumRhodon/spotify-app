"use client";

import { observer } from "mobx-react-lite";
import { gameStore } from "../stores/GameStore";
import dynamic from "next/dynamic";
const HandCard = dynamic(() => import("./HandCard"), { ssr: false });
import { DndContext } from "@dnd-kit/core";

const Game = observer(() => {
    const { players } = gameStore;
    const userPlayer = players[0];

    return (
        <div>
            <div className="card rounded-xl preset-outlined w-28 aspect-[63/88] flex justify-center items-center">
                <p className="text-gray-400">Play Deck</p>
            </div>

            <DndContext>
                <div className="grid grid-cols-[repeat(13,100px)] justify-center gap-1">
                    {userPlayer.hand.map((card, idx) => (
                        <HandCard key={idx} card={card} />
                    ))}
                </div>
            </DndContext>
        </div>
    );
});

export default Game;
