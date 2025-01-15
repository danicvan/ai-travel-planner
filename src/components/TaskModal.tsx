import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface TaskModalProps {
    task: { id: string; text: string; imageUrl?: string } | null;
    onClose: () => void;
    onDelete: (taskId: string) => void;
    onEdit: (taskId: string, newText: string) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onDelete, onEdit }) => {
    const [editedText, setEditedText] = useState(task?.text || "");

    if (!task) return null;

    const handleSave = () => {
        onEdit(task.id, editedText);
        onClose();
    };

    return (
        <Dialog
            open={Boolean(task)}
            onClose={onClose}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center">
                <DialogPanel className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                    <DialogTitle className="text-lg font-bold mb-4">Task Details</DialogTitle>
                    <p className="mb-2">
                        <strong>Task ID:</strong> {task.id}
                    </p>
                    <div className="mb-2">
                        <label htmlFor="taskText" className="block font-medium">
                            Text:
                        </label>
                        <input
                            id="taskText"
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            className="w-full px-2 py-1 border rounded focus:ring focus:outline-none"
                        />
                    </div>
                    {task.imageUrl && (
                        <img src={task.imageUrl} alt={task.text} className="w-full rounded mt-4" />
                    )}
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:ring focus:outline-none"
                        >
                            Close
                        </button>
                        <button
                            onClick={() => {
                                onDelete(task.id);
                                onClose();
                            }}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:ring focus:outline-none"
                        >
                            Delete
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:ring focus:outline-none"
                        >
                            Save
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default TaskModal;
