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

    const [newTitle, setNewTitle] = useState('');
    const handleSave = () => {
        newTitle !== '' && newTitle !== title ? onSave(id, newTitle) : '';
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-xl bg-white shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900">Column Options</h2>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <textarea
                        rows={1}
                        placeholder="Description"
                        onChange={(e) => setNewTitle(e.target.value)}
                        value={newTitle}
                        id="columnTile"
                        name="columnTitle"
                        className="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                    </textarea>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        onClick={() => handleSave()}
                        className="rounded-md bg-blue-500 py-1.5 px-3 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ColumnModal;
