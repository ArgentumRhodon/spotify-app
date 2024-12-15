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
    <div className="card rounded-2xl bg-primary-50 flex flex-col justify-between min-w-24 w-24 aspect-[63/88] p-4 text-2xl">
      <p className={`${color[card.suit]} flex items-center gap-2 -mt-2 w-fit`}>
        <span>{card.rank}</span>{" "}
        <span className="text-4xl">{card.unicode}</span>
      </p>
      <p
        className={`${
          color[card.suit]
        } flex w-fit items-center gap-2 -scale-x-100 -scale-y-100 -mb-2 ml-auto`}
      >
        <span>{card.rank}</span>{" "}
        <span className="text-4xl">{card.unicode}</span>
      </p>
    </div>
  );
};

export default PlayingCard;
