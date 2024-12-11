import { Suit, Value } from "../enums";

export const PlayingCard = ({ value, suit }: { value: Value; suit: Suit }) => {
  return (
    <div className="card flex flex-col justify-between preset-filled w-36 p-2 aspect-[63/88] text-2xl">
      <span className="ml-1">
        {value} of {suit}
      </span>
      <span className="mr-2 transform -scale-y-100 -scale-x-100">
        {value} of {suit}
      </span>
    </div>
  );
};
