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
            <h2 className="text-lg max-w-lg rounded-xl bg-white shadow-lg p-6">Column Options</h2>
            <div>
                <label>Title</label>
                <textarea
                    rows={1}
                    placeholder="Description"
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    id="columnTile"
                    name="columnTitle"
                >
                </textarea>
            </div>
            <button
                onClick={() => handleSave()}
            >
                Save
            </button>
            <button
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </div>
    )
}

export default ColumnModal;
