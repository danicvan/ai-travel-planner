import React from "react";

interface TaskModalProps {
    task: { id: string; text: string; imageUrl?: string } | null;
    onClose: () => void;
    onDelete: (taskId: string) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onDelete }) => {
    if (!task) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                <h2 className="text-lg font-bold mb-4">Task Details</h2>
                <p className="mb-2">
                    <strong>Task ID:</strong> {task.id}
                </p>
                <p className="mb-2">
                    <strong>Text:</strong> {task.text}
                </p>
                {task.imageUrl && (
                    <img src={task.imageUrl} alt={task.text} className="w-full rounded mt-4" />
                )}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                        Close
                    </button>
                    <button
                        onClick={() => {
                            onDelete(task.id);
                            onClose();
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
