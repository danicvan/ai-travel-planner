interface ColumnModalProps {
    id: string;
    title: string;
    onClose: () => void;
    onDelete: () => void;
    onSave: () => void;
}

const ColumnModal: React.FC<ColumnModalProps> = ({
    id,
    onClose,
    onDelete,
    onSave
}) => {
    console.log(`call ColumModal component`);

    return (
        <div>
            <h1>Column Modal component called</h1>
        </div>
    )
}

export default ColumnModal;
