"use client";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import GreetingMessage from "@/components/GreetingMessage";
import TaskModal from "@/components/TaskModal";
import AddTaskModal from "@/components/AddTaskModal";
import { databases } from "@/appwrite";

export default function HomePage() {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const fetchColumnsAndTasks = async () => {
            try {
                const columnsResponse = await databases.listDocuments("ai-travel-planner", "columns");
                const tasksResponse = await databases.listDocuments("ai-travel-planner", "tasks");

                const columnsWithTasks = columnsResponse.documents.map((column) => ({
                    ...column,
                    tasks: tasksResponse.documents.filter(
                        (task) => task.columnId === column.id
                    ),
                }));

                setColumns(columnsWithTasks);
            } catch (e) {
                console.error(`Failed to fetch columns and tasks`);
            }
         };

         fetchColumnsAndTasks();
    }, []);

    const [selectedTask, setSelectedTask] = useState(null);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

    const addTask = async (listId, taskText) => {
        try {
            const response = databases.createDocument(
                "ai-travel-planner",
                "tasks",
                "unique()",
                {
                    text: taskText,
                    columnId: listId,
                    imageUrl: "", 
                }
            );

            setColumns((prevColumns) => 
                prevColumns.map((column) =>
                    column.id === listId 
                    ? { ...column, tasks: [...column.tasks, response] }
                    : column
                )
            );
        } catch (e) {
            console.error(`Failed to create task:`, e);
        }
    }

    const handleOpenAddTaskModal = () => {
        setIsAddTaskModalOpen(true);
    };

    const [searchKey, setSearchKey] = useState("");

    const handleSearch = (key) => {
        setSearchKey(key);
    };

    const filterColumns = columns.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => 
            task.text.toLowerCase().includes(searchKey.toLowerCase())
        ),
    }));

    const handleDragEnd = async (result) => {
        const { source, destination } = result;

        if (!destination) return;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const sourceColumn = columns.find((col) => col.id === source.droppableId);
        const taskToMove = sourceColumn.tasks[source.index];

        sourceColumn.tasks.splice(source.index, 1);

        const destinationColumn = columns.find(
            (col) => col.id === destination.droppableId
        );

        destinationColumn.tasks.splice(destination.index, 0, taskToMove);

        setColumns([...columns]);

        try {
            await databases.updateDocument(
                "ai-travel-planner",
                "tasks",
                taskToMove.id,
                { columnId: destination.droppableId }
            );
        } catch (error) {
            console.error("Failed to update task column:", error);
        }
    };

    const addColumn = async () => {
        try {
            const newColumn = await databases.createDocument(
                "ai-travel-planner-backend",
                "columns",
                "unique()",
                {
                    title: "New column",
                    order: columns.length,
                }
            )

            setColumns((prevColumns) => [...prevColumns, { ...newColumn, tasks: [] }]);
        } catch (error) {
            console.error(`Failed to create column`, error);
        }
    }
    
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col text-gray-800">
            {/* Header Component */}
            <Header onSearch={handleSearch}/>

            <section className="flex-grow flex flex-col items-center mt-6 w-full max-w-5xl mx-auto">
                {/* Greeting Message */}
                <GreetingMessage
                    toDo={columns[0]?.tasks.length || 0}
                    inProgress={columns[1]?.tasks.length || 0}
                    done={columns[2]?.tasks.length || 0}
                    className="mb-4 text-sm text-gray-500"
                />

                {/* Drag-and-Drop Context */}
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="flex flex-row gap-4 w-full mt-9">
                        {filterColumns.map((column) => (
                            <Droppable key={column.id} droppableId={column.id}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className="w-1/3 p-4 bg-white rounded-lg shadow-sm rounded-lg"
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
                        <div className="w-1/3 p-4 bg-gray-100 rounded-lg flex items-center justify-center">
                            <button
                                className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                                onClick={addColumn}
                            >
                                + Add Column
                            </button>                            
                        </div>
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
                    lists={columns.map(({ id, title }) => ({ id: Number(id), title }))}
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
