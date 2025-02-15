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

    const [newTitle, setNewTitle] = useState(``);
    const handleSave = () => {
        newTitle === title ? onSave(id, newTitle) : ''
    }
    
    return (
        <div>
            <h1>Column Modal component called</h1>
        </div>
    )
}

export default ColumnModal;
