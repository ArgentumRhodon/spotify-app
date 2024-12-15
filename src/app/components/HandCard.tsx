"use client";

import { useState } from "react";
import { Card } from "../classes";
import PlayingCard from "./PlayingCard";

const HandCard = ({ card }: { card: Card }) => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = () => setSelected(!selected);
    const shadowClass =
        " 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";

    return (
        <button
            onClick={toggleSelected}
            className="transition-all rounded-xl shadow-md"
            style={{
                translate: selected ? "0 -15px" : "",
                boxShadow: selected ? shadowClass : "",
            }}
        >
            <PlayingCard card={card} />
        </button>
    );
};

export default HandCard;
