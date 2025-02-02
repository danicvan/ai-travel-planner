import { useState } from "react"

export default function AddColumnModal() {
    const [ columnName, setColumnName ] = useState("");
    return (
        <div>
            <div>
                <label>Name</label>
                <input
                    name="txt_column_name"
                    onChange={(e)=> setColumnName(e.target.value)}
                >
                </input>
            </div>
        </div>
    )
}