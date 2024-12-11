import { PlayingCard } from "./components/PlayingCard";
import { Suit, Value } from "./enums";

export default function Home() {
  const cards = [];
  const suits = Object.values(Suit);
  const values = Object.values(Value);

  for (let i = 0; i < 4; i++) {
    const value = values[Math.round(Math.random() * (values.length - 1))];
    const suit = suits[Math.round(Math.random() * (suits.length - 1))];
    cards.push([value, suit]);
  }

  return (
    <div className="flex gap-2">
      {cards.map((c, i) => (
        <PlayingCard key={i} suit={c[1]} value={c[0]} />
      ))}
    </div>
  );
}
