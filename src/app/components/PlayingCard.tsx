import { Card } from "../classes";
import { Suit } from "../types";

const PlayingCard = ({ card }: { card: Card }) => {
    const color: Record<Suit, string> = {
        diamonds: "text-red-500",
        clubs: "text-black",
        hearts: "text-red-500",
        spades: "text-black",
    };

    return (
        <div className="card rounded-xl bg-primary-50 min-w-24 w-24 flex flex-col justify-center items-center aspect-[63/88] p-3 shadow-md">
            <p className={`${color[card.suit]} flex items-center gap-1 -mt-2`}>
                <span className="text-2xl">{card.rank}</span>{" "}
                <span className="text-4xl">{card.unicode}</span>
            </p>
        </div>
    );
};

export default PlayingCard;
