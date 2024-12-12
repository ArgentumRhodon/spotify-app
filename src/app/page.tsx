import { Card, Deck } from "./classes";
import { PlayingCard } from "./components";
import { shuffleArray } from "./utils";

export default function Home() {
  const deck: Deck = new Deck();
  deck.shuffleDeck(3);
  const hand: Card[] = [];
  for (let i = 0; i < 5; i++) {
    let card = deck.drawCard();
    if (card) hand.push(card);
  }

  return (
    <div className="grid grid-cols-8 gap-12">
      {hand.map((card, i) => (
        <PlayingCard key={i} card={card} />
      ))}
    </div>
  );
}
