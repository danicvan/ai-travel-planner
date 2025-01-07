import { useState } from "react";

interface AddTaskModalProps {
  lists: { id: number; title: string }[];
  onClose: () => void;
  onAddTask: (listId: number, task: { id: number; text: string; image?: string }) => void;
}

export default function AddTaskModal({ lists, onClose, onAddTask }: AddTaskModalProps) {
  const [selectedListId, setSelectedListId] = useState(lists[0].id);
  const [taskText, setTaskText] = useState("");
  const [taskImage, setTaskImage] = useState<string | undefined>("");

  const handleAddTask = () => {
    if (!taskText.trim()) return;

    onAddTask(selectedListId, { id: Date.now(), text: taskText, image: taskImage });
    setTaskText("");
    setTaskImage("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Task</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2">Select List</label>
          <select
            value={selectedListId}
            onChange={(e) => setSelectedListId(Number(e.target.value))}
            className="w-full border rounded p-2"
          >
            {lists.map((list) => (
              <option key={list.id} value={list.id}>
                {list.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Task Description</label>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter task description"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Task Image (Optional)</label>
          <input
            type="text"
            value={taskImage}
            onChange={(e) => setTaskImage(e.target.value)}
            placeholder="Enter image URL"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAddTask}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
