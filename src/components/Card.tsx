export default function Card({ card }: { card: { id: number, text: string } }) {
    return (
        <li className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300 cursor-pointer">
            {card.text}
        </li>
    );
}