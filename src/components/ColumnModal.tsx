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
        newTitle === title ? onSave(id, newTitle) : '';
    }

    return (
        <div>
            <h2>Column Options</h2>
            <div>
                <label>Title</label>
                <textarea
                    rows={1}
                    placeholder="Description"
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                >
                </textarea>
            </div>
            <button
                onClick={() => handleSave()}
            >
                Save
            </button>
        </div>
    )
}

export default ColumnModal;
