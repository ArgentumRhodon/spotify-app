import { Card, Deck } from "./classes";
import { PlayingCard } from "./components";
import { gameStore } from "./stores/GameStore";

export default function Home() {
  const deck: Deck = new Deck(true);
  deck.shuffleDeck(3);
  const hand: Card[] = [];
  for (let i = 0; i < 5; i++) {
    let card = deck.drawCard();
    if (card) hand.push(card);
  }

  console.log(gameStore);

  return (
    <div>
      {gameStore.players.map((player, indx) => {
        return (
          <div key={indx} className="grid grid-cols-13 gap-12">
            {player.hand.map((card, i) => (
              <PlayingCard key={i} card={card} />
            ))}
            <p>i</p>
          </div>
        );
      })}
    </div>

    // <div className="grid grid-cols-8 gap-12">
    //   {hand.map((card, i) => (
    //     <PlayingCard key={i} card={card} />
    //   ))}
    // </div>
  );
}
