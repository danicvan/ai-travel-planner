"use client";

import { useState } from "react";
import List from "@/components/List";

export default function BoardPage() {
    const [lists, setLists] = useState([
        { id: 1, title: "To Do", cards: [{ id: 1, text: "Set up project" }] },
        { id: 2, title: "In Progress", cards: [{ id: 2, text: "Develop features"}] },
        { id: 3, title: "Done", cards: [{ id:3, text: "Launch app"}] },
    ]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3x1 font-bold mb-6">Board Name</h1>
            <div className="flex space-x-6 overflow-x-auto">
                {lists.map((list) => (
                    <List key={list.id} list={list} />
                ))}
            </div>
        </div>
    );
}