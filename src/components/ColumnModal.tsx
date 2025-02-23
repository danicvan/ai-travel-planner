import { useState } from "react";

interface ColumnModalProps {
    id: string;
    title: string;
    onClose: () => void;
    onDelete: (columndId: string) => void;
    onSave: (columndId: string, newTitle: string) => void;
}

const ColumnModal: React.FC<ColumnModalProps> = ({
    id,
    title,
    onClose,
    onDelete,
    onSave
}) => {
    console.log(`call ColumModal component`);

    const [newTitle, setNewTitle] = useState(title);
    const handleSave = () => {
        if (newTitle !== '' && newTitle !== title) {
            onSave(id, newTitle);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-xl bg-white shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900">Column Details</h2>
                <p className="mt-1 text-sm text-gray-500">
                    Edit or delete a existed column or close to cancel the any action.
                </p>
                <div className="mt-4">
                    <textarea
                        placeholder="Enter column description"
                        rows={5}
                        onChange={(e) => setNewTitle(e.target.value)}
                        value={newTitle}
                        id="columnTile"
                        name="columnTitle"
                        className="resize-none mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                    </textarea>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="rounded-md border border-gray-300 bg-white py-1.5 px-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className="rounded-md border border-red-500 bg-red-50 py-1.5 px-3 text-sm font-semibold text-red-600 hover:bg-red-100 focus:outline-none "
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => handleSave()}
                        className="rounded-md bg-blue-500 py-1.5 px-3 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ColumnModal;
