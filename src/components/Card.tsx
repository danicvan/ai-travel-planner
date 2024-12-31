export default function Card({ card }: { card: { id: number; text: string; image?: string } }) {
  return (
    <li className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300 cursor-pointer flex items-center space-x-4">
      {card.image && (
        <img src={card.image} alt="Task" className="w-12 h-12 object-cover rounded" />
      )}
      <span>{card.text}</span>
    </li>
  );
}
