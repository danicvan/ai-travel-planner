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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
        <h2 className="text-lg font-semibold text-black">Add Task</h2>
        <p className="mt-1 text-sm text-black/50">
          Create a new task by selecting a list and filling in the details.
        </p>
        <div className="mt-4">
          <label className="block text-sm font-medium text-black">
            Select List
          </label>
          <select
            value={selectedListId}
            onChange={(e) => setSelectedListId(Number(e.target.value))}
            className="mt-2 block w-full rounded-lg bg-black/5 py-1.5 px-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/25"
          >
            {lists.map((list) => (
              <option key={list.id} value={list.id}>
                {list.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-black">
            Task Description
          </label>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter task description"
            className="mt-2 block w-full rounded-lg bg-black/5 py-1.5 px-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/25"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-black">
            Task Image (Optional)
          </label>
          <input
            type="text"
            value={taskImage}
            onChange={(e) => setTaskImage(e.target.value)}
            placeholder="Enter image URL"
            className="mt-2 block w-full rounded-lg bg-black/5 py-1.5 px-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/25"
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white focus:outline-none hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleAddTask}
            className="rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white focus:outline-none hover:bg-gray-600"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
