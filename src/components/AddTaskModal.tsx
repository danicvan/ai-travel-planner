import { useState } from "react";

interface AddTaskModalProps {
  lists: { id: number; title: string }[];
  selectedColumn: string;
  onClose: () => void;
  onAddTask: (listId: string, task: { id: number; text: string; image?: string }) => void;
}

export default function AddTaskModal({ lists, selectedColumn, onClose, onAddTask }: AddTaskModalProps) {
  console.log(`this is my addTaskModal by list: `, selectedColumn);
  const [selectedListId, setSelectedListId] = useState(selectedColumn);
  const [taskText, setTaskText] = useState("");
  const [taskImage, setTaskImage] = useState<string | undefined>("");

  const handleAddTask = () => {
    if (!taskText.trim()) return;

    onAddTask(selectedListId, { id: Date.now(), text: taskText, image: taskImage });
    setTaskText("");
    setTaskImage("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900">Add Task</h2>
        <p className="mt-1 text-sm text-gray-500">
          Create a new task by selecting a list and filling in the details.
        </p>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Select List
          </label>
          <select
            value={selectedListId}
            onChange={(e) => setSelectedListId(e.target.value)}
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {lists.map((list) => (
              <option key={list.id} value={list.id}>
                {list.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Task Description
          </label>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter task description"
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Task Image (Optional)
          </label>
          <input
            type="text"
            value={taskImage}
            onChange={(e) => setTaskImage(e.target.value)}
            placeholder="Enter image URL"
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-md border border-gray-300 bg-white py-1.5 px-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleAddTask}
            className="rounded-md bg-blue-500 py-1.5 px-3 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
