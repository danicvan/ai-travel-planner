import Card from "./Card";

export default function List({ list}: { list: { id: number; title: string, cards: { id: number; text: string } [] } }) {
    return (
        <div className="w-72 bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-4">{list.title}</h2>
            <ul className="space-y-2">
                {list.cards.map((card) => (
                    <Card key={card.id} card={card}/>
                ))}
            </ul>
        </div>
    );
}