import { useState } from "react";

export default function AddTaskModal({
  lists,
  onClose,
  onAddTask,
}: {
  lists: { id: number; title: string }[];
  onClose: () => void;
  onAddTask: (listId: number, task: { id: number; text: string; image?: string }) => void;
}) {
  const [taskName, setTaskName] = useState("");
  const [selectedList, setSelectedList] = useState(lists[0]?.id || 0);
  const [image, setImage] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!taskName) return;
    const newTask = { id: Date.now(), text: taskName, image };
    onAddTask(selectedList, newTask);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add a New Task</h2>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
          className="border p-2 w-full mb-4"
        />
        <select
          value={selectedList}
          onChange={(e) => setSelectedList(Number(e.target.value))}
          className="border p-2 w-full mb-4"
        >
          {lists.map((list) => (
            <option key={list.id} value={list.id}>
              {list.title}
            </option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
        >
          Add Task
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white p-2 rounded w-full mt-2 hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
