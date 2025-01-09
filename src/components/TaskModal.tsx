import React from "react";

interface TaskModalProps {
    task: { id: string; text: string; imageUrl?: string } | null;
    onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose}) => {
    if (!task) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full"></div>
            <h2 className="text-lg font-bold mb-4">Tasks Details</h2>
            <p className="mb-2">
                <strong>Task ID:</strong> {task.id}
            </p>
            <p className="mb-2">
                <strong>Text:</strong> {task.text}
            </p>
            {task.imageUrl && (
                <img src={task.imageUrl} alt={task.text} className="w-full rounded mt-4" />
            )}
            <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
                Close
            </button>
        </div>
    )
};

export default TaskModal;