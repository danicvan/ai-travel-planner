"use client"

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import Header from "@/components/Header";
import GreetingMessage from "@/components/GreetingMessage";
import Card from "@/components/Card";

export default function HomePage() {
    const [columns, setColumns] = useState([
        {
            id: "1",
            title: "To Do",
            tasks: [
                { id: "1", text: "Task 1" },
                { id: "2", text: "Task 2", imageUrl: "https://via.placeholder.com/150" },
                { id: "3", text: "Task 3" },
            ],
        },
        {
            id: "2",
            title: "In Progress",
            tasks: [
                { id: "4", text: "Task 4" },
                { id: "5", text: "Task 5", imageUrl: "https://via.placeholder.com/150" },
            ],
        },
        {
            id: "3",
            title: "Done",
            tasks: [{ id: "6", text: "Task 6" }],
        },
    ]);

    const handleDragEnd = (result: any) => {
        const { source, destination } = result;

        // If dropped outside any droppable area
        if (!destination) return;

        // If the item is dropped in the same location, do nothing
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        // Remove the task from the source column
        const sourceColumn = columns.find((col) => col.id === source.droppableId);
        const taskToMove = sourceColumn!.tasks[source.index];
        sourceColumn!.tasks.splice(source.index, 1);

        // Add the task to the destination column
        const destinationColumn = columns.find((col) => col.id === destination.droppableId);
        destinationColumn!.tasks.splice(destination.index, 0, taskToMove);

        // Update state
        setColumns([...columns]);
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <section className="flex flex-col items-center mt-6 p-4 w-full max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-indigo-700 mb-4">Welcome to Trello AI</h1>
                <GreetingMessage
                    toDo={columns[0].tasks.length}
                    inProgress={columns[1].tasks.length}
                    done={columns[2].tasks.length}
                />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="flex flex-wrap justify-between w-full gap-4 mt-8">
                        {columns.map((column) => (
                            <Droppable key={column.id} droppableId={column.id}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className="w-1/3 bg-white shadow rounded p-4"
                                    >
                                        <h2 className="text-lg font-bold mb-4">{column.title}</h2>
                                        <ul className="space-y-2">
                                            {column.tasks.map((task, index) => (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                >
                                                    {(provided) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="p-2 bg-gray-100 rounded shadow"
                                                        >
                                                            <Card
                                                                text={task.text}
                                                                imageUrl={task.imageUrl}
                                                            />
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </div>
                </DragDropContext>
            </section>

            {/* Footer */}
            <footer className="mt-auto p-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Trello AI. All rights reserved.
            </footer>
        </main>
    );
}