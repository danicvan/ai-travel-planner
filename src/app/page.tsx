"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [boards, setBoards] = useState([
    { id: 1, name: "Marketing Campaign" },
    { id: 2, name: "Development Sprint" },
  ]);

  const createBoard = () => {
    const newBoardId = boards.length + 1;
    const newBoardName = `New Board ${newBoardId}`;
    setBoards([...boards, { id: newBoardId, name: newBoardName }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Boards</h1>
        <button
          onClick={createBoard}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Create Board
        </button>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boards.map((board) => (
          <li
            key={board.id}
            className="p-6 bg-white shadow rounded hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/boards/${board.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
              {board.name}
            </Link>
          </li>
        ))}
      </ul>

      {boards.length === 0 && (
        <p className="text-center text-gray-500 mt-12">No boards yet. Click "Create Board" to get started!</p>
      )}
    </div>
  );
}
