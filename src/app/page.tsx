"use client";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import Header from "@/components/Header";
import GreetingMessage from "@/components/GreetingMessage";
import Card from "@/components/Card";
import TaskModal from "@/components/TaskModal";

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

    const [selectedTask, setSelectedTask] = useState(null);

    const deleteTask = (taskId: string) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) => ({
                ...column,
                tasks: column.tasks.filter((task) => task.id !== taskId),
            }))
        );
    };

    const handleDragEnd = (result: any) => {
        const { source, destination } = result;

        if (!destination) return;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const sourceColumn = columns.find((col) => col.id === source.droppableId);
        const taskToMove = sourceColumn!.tasks[source.index];
        sourceColumn!.tasks.splice(source.index, 1);

        const destinationColumn = columns.find((col) => col.id === destination.droppableId);
        destinationColumn!.tasks.splice(destination.index, 0, taskToMove);

        setColumns([...columns]);
    };

    const handleAddTask = (columnId) => {
        const newTask = {
            id: Date.now().toString(),
            // text: `New Task ${Date.now()}`,
            text: `New Task`,
        };

        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === columnId
                    ? { ...column, tasks: [...column.tasks, newTask] }
                    : column
            )
        );
    };

    return (    
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <section className="flex flex-col items-center mt-6 p-4 w-full max-w-7xl mx-auto">
                <div className="flex flex-row items-center w-full">
                    <h1 className="text-2xl font-bold text-indigo-700 mb-4">Welcome to Trello AI</h1>
                    <GreetingMessage
                        toDo={columns[0].tasks.length}
                        inProgress={columns[1].tasks.length}
                        done={columns[2].tasks.length}
                    />
                </div>

                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="flex flex-row justify-between w-full gap-4 mt-8">
                        {columns.map((column) => (
                            <Droppable key={column.id} droppableId={column.id}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className="w-1/3 bg-white shadow rounded p-4"
                                    >
                                        <h2 className="text-lg font-bold mb-4">{column.title}</h2>
                                        <ul className="space-y-2 h-64 overflow-y-auto">
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
                                                            onClick={() => setSelectedTask(task)}
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

                                        <button
                                            className="mt-4 bg-gray-200 text-black rounded p-2 hover:bg-gray-400 hover:text-white"
                                            onClick={() => handleAddTask(column.id)}
                                        >
                                            + Add To Card
                                        </button>
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </div>
                </DragDropContext>
            </section>

            {selectedTask && (
                <TaskModal
                    task={selectedTask}
                    onClose={() => setSelectedTask(null)}
                    onDelete={deleteTask}
                />
            )}

            <footer className="mt-auto p-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Trello AI. All rights reserved.
            </footer>
        </main>
    );
}
