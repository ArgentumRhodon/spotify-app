"use client";

import dynamic from "next/dynamic";
import { Card } from "../classes";
// Import PlayingCard as client side component
const PlayingCard = dynamic(() => import("./PlayingCard"), { ssr: false });

const Hand = ({ hand }: { hand: Card[] }) => {
    return (
        <div className="grid grid-cols-[repeat(13,100px)] justify-center gap-1">
            {hand.map((card, idx) => (
                <button key={idx}>
                    <PlayingCard card={card} />
                </button>
            ))}
        </div>
    );
};

export default Hand;
