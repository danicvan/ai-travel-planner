import { useState } from "react";

interface AddColumnProps {
    onClose: () => void;
}

export default function AddColumnModal({ onClose } : AddColumnProps) {
    const [ columnName, setColumnName ] = useState("");

    const handleAddColumn = () => {
        if (!columnName.trim()) return;
    }

    return (
        <div className="fixed inset-0 z-50 flex items justify-center p-4 bg-white/70 backdrop-blur-sm">
            <div className="w-full max-w-lg roundex-xl bg-white shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900">Add Column</h2>
                <p className="mt-1 text-sm text-gray-500">
                    Create a new column selecting the name below.
                </p>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        value={columnName}
                        name="txt_column_name"
                        onChange={(e)=> setColumnName(e.target.value)}
                        placeholder="Enter column description"
                        className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                    </input>
                </div>
                
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="rounded-md border border-gray-300 bg-white py-1.5 px-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAddColumn}
                        className="rounded-md bg-blue-500 py-1.5 px-3 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Add Column
                    </button>
                </div>
            </div>
        </div>
    )
}