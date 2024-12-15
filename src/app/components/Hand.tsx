"use client";

import dynamic from "next/dynamic";
import { Card } from "../classes";
// Import PlayingCard as client side component
const PlayingCard = dynamic(() => import("./PlayingCard"), { ssr: false });

const Hand = ({ hand }: { hand: Card[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {hand.map((card, idx) => (
        <PlayingCard key={idx} card={card} />
      ))}
    </div>
  );
};

export default Hand;
