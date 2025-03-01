import { useState } from "react";
import List from "./List";
import AddTaskModal from "./AddTaskModal";

const initialLists: { id: number; title: string; tasks: { id: number; text: string; image?: string }[] }[] = [
  { id: 1, title: "To Do", tasks: [] },
  { id: 2, title: "In Progress", tasks: [] },
  { id: 3, title: "Done", tasks: [] },
];

export default function Board() {
  const [lists, setLists] = useState<typeof initialLists>(initialLists);
  const [showModal, setShowModal] = useState(false);

  const addTask = (listId: number, task: { id: number; text: string; image?: string }) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, tasks: [...list.tasks, task] }
          : list
      )
    );
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Trello AI</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded p-2 w-64"
        />
      </header>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          Today, we have {lists[0].tasks.length} tasks in To Do, {lists[1].tasks.length} in In Progress, and {lists[2].tasks.length} in Done.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Create Task
        </button>
      </div>
      <div className="flex space-x-4">
        {lists.map((list) => (
          <List key={list.id} list={list} onAddTask={() => setShowModal(true)} />
        ))}
      </div>
      {showModal && (
        <AddTaskModal
          lists={lists}
          onClose={() => setShowModal(false)}
          onAddTask={addTask}
        />
      )}
    </div>
  );
}
