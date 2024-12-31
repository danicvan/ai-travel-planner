import Card from "./Card";

export default function List({
  list,
  onCardClick,
}: {
  list: { id: number; title: string; cards: { id: number; text: string }[] };
  onCardClick?: (cardId: number, listId: number) => void;
}) {
  return (
    <div className="w-72 bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4">
      <h2 className="text-xl font-bold text-gray-800">{list.title}</h2>
      <ul className="space-y-2">
        {list.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={(cardId) => onCardClick?.(cardId, list.id)}
          />
        ))}
      </ul>
    </div>
  );
}
