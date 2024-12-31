export default function Card({
    card,
    onClick,
  }: {
    card: { id: number; text: string };
    onClick?: (id: number) => void;
  }) {
    return (
      <li
        className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => onClick?.(card.id)}
        tabIndex={0} // Makes the card focusable with the keyboard
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClick?.(card.id); // Handle keyboard interaction
        }}
        aria-label={`Card: ${card.text}`} // Improves accessibility for screen readers
      >
        {card.text}
      </li>
    );
  }
  