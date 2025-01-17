"use client";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import Header from "@/components/Header";
import GreetingMessage from "@/components/GreetingMessage";
import Card from "@/components/Card";
import TaskModal from "@/components/TaskModal";
import AddTaskModal from "@/components/AddTaskModal";

export default function HomePage() {
    const [columns, setColumns] = useState([
        {
            id: "1",
            title: "To Do",
            tasks: [
                { id: "1", text: "Task 1" },
                {
                    id: "2",
                    text: "Task 2",
                    imageUrl: "https://via.placeholder.com/150",
                },
                { id: "3", text: "Task 3" },
            ],
        },
        {
            id: "2",
            title: "In Progress",
            tasks: [
                { id: "4", text: "Task 4" },
                {
                    id: "5",
                    text: "Task 5",
                    imageUrl: "https://via.placeholder.com/150",
                },
            ],
        },
        {
            id: "3",
            title: "Done",
            tasks: [{ id: "6", text: "Task 6" }],
        },
    ]);

    const [selectedTask, setSelectedTask] = useState(null);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
    const [selectedColumnId, setSelectedColumnId] = useState("");

    const deleteTask = (taskId: string) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) => ({
                ...column,
                tasks: column.tasks.filter((task) => task.id !== taskId),
            }))
        );
    };

    const editTask = (taskId: string, newText: string) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) => ({
                ...column,
                tasks: column.tasks.map((task) =>
                    task.id === taskId ? { ...task, text: newText } : task
                ),
            }))
        );
    };

    const addTask = (
        columnId: string,
        task: { id: number; text: string; image?: string }
    ) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === columnId
                    ? { ...column, tasks: [...column.tasks, task] }
                    : column
            )
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

        const destinationColumn = columns.find(
            (col) => col.id === destination.droppableId
        );
        destinationColumn!.tasks.splice(destination.index, 0, taskToMove);

        setColumns([...columns]);
    };

    const handleOpenAddTaskModal = (columnId: string) => {
        setSelectedColumnId(columnId);
        setIsAddTaskModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col text-gray-800">
    {/* Header Component */}
    <Header />

    <section className="flex-grow flex flex-col items-center mt-6 w-full max-w-5xl mx-auto">
        {/* Greeting Message */}
        <GreetingMessage
            toDo={columns[0].tasks.length}
            inProgress={columns[1].tasks.length}
            done={columns[2].tasks.length}
            className="mb-4 text-sm text-gray-500"
        />

        {/* Drag-and-Drop Context */}
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="flex flex-row gap-4 w-full">
                {columns.map((column) => (
                    <Droppable key={column.id} droppableId={column.id}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="w-1/3 p-4 bg-white rounded-lg shadow-sm"
                            >
                                <h2 className="mb-3 text-sm font-medium text-gray-700">
                                    {column.title}
                                </h2>

                                {/* Tasks List */}
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
                                                    className="p-3 bg-gray-100 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
                                                    onClick={() => setSelectedTask(task)}
                                                >
                                                    {task.text}
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>

                                {/* Add Task Button */}
                                <button
                                    className="mt-4 w-full bg-gray-50 border border-gray-200 text-sm text-gray-600 rounded-lg py-2 hover:bg-gray-100"
                                    onClick={() => handleOpenAddTaskModal(column.id)}
                                >
                                    + Add Task
                                </button>
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    </section>

    {/* Task Modal */}
    {selectedTask && (
        <TaskModal
            task={selectedTask}
            onClose={() => setSelectedTask(null)}
            onDelete={deleteTask}
            onEdit={editTask}
        />
    )}

    {/* Add Task Modal */}
    {isAddTaskModalOpen && (
        <AddTaskModal 
            lists={columns.map(({id, title}) => ({ id: Number(id), title}))}
            onClose={() => setIsAddTaskModalOpen(false)}
            onAddTask={(listId, task) => {
                addTask(listId.toString(), task);
                setIsAddTaskModalOpen(false);
            }}
        />
    )}

    {/* Footer */}
    <footer className="py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Trello AI
    </footer>
</main>

    );
}
