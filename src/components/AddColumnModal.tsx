import { useState } from "react"

export default function AddColumnModal() {
    const [ columnName, setColumnName ] = useState("");
    return (
        <div className="fixed inset-0 z-50 flex items justify-center p-4 bg-white/70 backdrop-blur-sm">
            <div className="w-full max-w-lg bg-white shadow-lg p-6">
                <div>
                    <label>Name</label>
                    <input
                        name="txt_column_name"
                        onChange={(e)=> setColumnName(e.target.value)}
                    >
                    </input>
                </div>
                
                <div className="mt-4">
                    <button>
                        Cancel
                    </button>
                    <button>
                        Add Column
                    </button>
                </div>
            </div>
        </div>
    )
}