import { Deck } from "./classes";
import { PlayingCard } from "./components";

export default function Home() {
  const deck: Deck = new Deck();

  return (
    <div className="grid grid-cols-8 gap-12">
      {deck.cards.map((card, i) => (
        <PlayingCard key={i} card={card} />
      ))}
    </div>
  );
}
