import Link from "next/link";

export default function Home() {
  const boards = [
    { id: 1, name: "Marketing Campaign" },
    { id: 2, name: "Development Sprint" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3x1 font-bold mb-6">Your Boards</h1>
      <ul>
        {boards.map((board) => (
          <li key={board.id} className="p-4 bg-white shadow rounded">
            <Link href={`/boards/${board.id}`} className="text-lg font-semibold">
              {board.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}