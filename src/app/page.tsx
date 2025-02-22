"use client";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import GreetingMessage from "@/components/GreetingMessage";
import TaskModal from "@/components/TaskModal";
import AddTaskModal from "@/components/AddTaskModal";
import { databases } from "@/appwrite";
import AddColumnModal from "@/components/AddColumnModal";
import InfoModal from "@/components/InfoModal";
import ColumnModal from "@/components/ColumnModal";
import PreviousMap_ from "postcss/lib/previous-map";
import { useToast } from "@/hooks/use-toast";

export default function HomePage() {
    const { toast } = useToast();
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const fetchColumnsAndTasks = async () => {
            try {
                const columnsResponse = await databases.listDocuments("ai-travel-planner", "columns");
                const tasksResponse = await databases.listDocuments("ai-travel-planner", "tasks");

                console.log(`columnsResponse: `, columnsResponse);
                console.log(`tasksResponse: `, tasksResponse);

                const columnsWithTasks = columnsResponse.documents.map((column) => ({
                    ...column,
                    tasks: tasksResponse.documents.filter(
                        (task) => task.columnId === column.$id
                    ),
                }));

                setColumns(columnsWithTasks);
                console.log(`columnsWithTasks is:`, columnsWithTasks)
            } catch (e) {
                console.error(`Failed to fetch columns and tasks`);
            }
         };

         fetchColumnsAndTasks();
    }, []);

    const [isAddColumnModalOpen, setIsAddColumnModalOpen ] = useState(false);

    const handleAddColumnModal = () => {
        setIsAddColumnModalOpen(true);
    };

    const addColumn = async (columnName) => {
        try {
            const newColumn = await databases.createDocument(
                "ai-travel-planner",
                "columns",
                "unique()",
                {
                    title: columnName,
                    order: columns.length,
                }
            )

            console.log(`The new column id is ${newColumn.$id}`);

            setColumns((prevColumns) => [...prevColumns, { ...newColumn, tasks: [] }]);
            console.log(`columns is:`, columns);

            toast({
                description: `Column added successfully!`
            });
        } catch (error) {
            console.error(`Failed to create column`, error);
        }
    }

    const [selectedTask, setSelectedTask] = useState([]);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

    const addTask = async (listId, task) => {
        try {
            console.log(`listId`, listId);
            console.log(`task`, task);
            const response = await databases.createDocument(
                "ai-travel-planner",
                "tasks",
                "unique()",
                {
                    text: task.text,
                    columnId: listId,
                    imageUrl: task.image || "",
                }
            );

            console.log(`response is: `, response);

            setColumns((prevColumns) => 
                prevColumns.map((column) =>
                    column.$id === listId 
                    ? { ...column, tasks: [...column.tasks, response] }
                    : column
                )
            );

            toast({
                description: `Task added successfully!`
            });

        } catch (e) {
            console.error(`Failed to create task:`, e);
        }
    }

    const [columnSelected, setColumnSelected] = useState('');
    const [columnTitleSelected, setColumnTitleSelected] = useState('');

    const handleSelectedColumn = (columnId: string, columnTitle: string) => {
        console.log('columnId and columnTitle is:', columnId, columnTitle)
        setIsColumnModalOpen(true);
        setColumnSelected(columnId);
        setColumnTitleSelected(columnTitle);
    }

    const handleOpenAddTaskModal = (selectedColumn :string) => {
        console.log('selectedColumn is', selectedColumn);
        setColumnSelected(selectedColumn);
        setIsAddTaskModalOpen(true);
    };

    const handleSelectedTask = (task, columnId) => {
        console.log(`My task is`, task);
        setSelectedTask([task, columnId]);
        setIsTaskModalOpen(true);
    }

    const handleCloseTask = () => {
        setIsTaskModalOpen(false);
    }
    
    const handleEditTask = async (taskId: string, text:string) => {
        console.log(`My taskId and text are:`, taskId, text);
        if (!taskId || !text) return;
        console.log(`My taskId and text are:`, taskId, text);

        const response = await databases.updateDocument(
            `ai-travel-planner`,
            `tasks`,
            taskId,
            {
                textDetail: text,
            }
        );

        console.log(`My response is`, response);

        setColumns((prevColumns) => 
            prevColumns.map((column) => ({
                ...column,
                tasks: column.tasks.map((task) =>
                    task.$id === taskId 
                    ? {...task, textDetail: text}
                    : task
                )
            }))
        )

        toast({
            description: `Task edited successfully!`
        });

        console.log(`columns: `, columns);
    }

    const handleDeleteTask = async (task) => {
        console.log(`Button delete clicked!`);
        if (!task[0].$id) return;

        console.log(`task[0].$id is:`, task[0].$id);

        console.log(`Before databases.deleteDocument process`);
        const response = await databases.deleteDocument(
            `ai-travel-planner`,
            `tasks`,
            task[0].$id,
        )

        console.log(`response of deleteDocument: `, response);

        console.log(`the column selected is: `, task[1]);
        console.log(`column is:`, columns);
        console.log(`column[0] is:`, columns[0].tasks);

        setColumns((prevColumns) => 
            prevColumns.map((column) => 
                column.$id === task[1]
                ? {...column, tasks: [...column.tasks.filter((c) => c.$id !== task[0].$id)]} : {...column}
            )
        )

        toast({
            description: `Task deleted successfully!`
        });
    }

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

        const sourceColumn = columns.find((col) => col.$id === source.droppableId);
        console.log(`sourceColumn: ` + sourceColumn);

        const taskToMove = sourceColumn.tasks[source.index];
        console.log(`taskToMove`);

        sourceColumn.tasks.splice(source.index, 1);

        const destinationColumn = columns.find(
            (col) => col.$id === destination.droppableId
        );

        destinationColumn.tasks.splice(destination.index, 0, taskToMove);

        setColumns([...columns]);

        console.log(`taskMove.$id`, taskToMove.$id);

        try {
            await databases.updateDocument(
                "ai-travel-planner",
                "tasks",
                taskToMove.$id,
                { columnId: destination.droppableId }
            );
        } catch (error) {
            console.error("Failed to update task column:", error);
        }
    };

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [titleInfoModal, setTitleInfoModal] = useState("");
    const [textInfoModal, setTextInfoModal] = useState("");

    const handleCloseInfoModal = () => {
        setTitleInfoModal("");
        setTextInfoModal("");
        setIsInfoModalOpen(false);
    }

    const [titles, setTitles] = useState(
        filterColumns.reduce((acc, column)=> {
            acc[column.$id] = column.title;
            return acc;
        }, {})
    );

    console.log(`fullFilterColumns`, filterColumns);

    useEffect(() => {
        console.log(`updates titles:`, titles);
    }, [titles]);

    const handleColumnTitle = async (columnId: string, event) => {
        console.log(`handleColumnTitle is`, columnId);
        const newTitle = event.target.value;
        const response = await databases.updateDocument(
            `ai-travel-planner`,
            `columns`,
            columnId,
            {
                title: newTitle
            }
        );

        console.log(`response`, response);

        console.log(`newTile:`, newTitle);
        setTitles((prev) => ({
            ...prev,
            [columnId]: newTitle
        }));
        
        console.log(`titles is (before state update):`, titles);
    };

    const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);

    const handleCloseColumnModal = () => {
        console.log(`Close Column Modal button was clicked!`);
        setIsColumnModalOpen(false);
    }

    const handleDeleteColumnModal = async (columnId: string) => {
        if (!columnId) return;

        const response = await databases.deleteDocument(
            'ai-travel-planner',
            'columns',
            columnId,
        );

        console.log('delete column response is', response);
        console.log('column is:', columns);

        setColumns((prevColumns) => 
            prevColumns.filter((e) => e.$id !== columnId)
        )

        console.log('new columns is:', columns);
        setIsColumnModalOpen(false);

        toast({
            description: `Column deleted successfully!`
        });
    }

    const handleSaveColumnModal = async (columnId: string, newTitle: string) => {
        if (!columnId || !newTitle) {
            console.log('columnId or newTitle not founded.');
            setIsColumnModalOpen(false);
            return;
        }

        console.log('columnId', columnId);
        console.log('newTitle', newTitle);

        const response = await databases.updateDocument(
            'ai-travel-planner',
            'columns',
            columnId,
            {
                title : newTitle
            }
        );

        console.log('my column response is: ', response);  

        setTitles((prev) => ({
            ...prev,
            [columnId]: newTitle
        }));

        setIsColumnModalOpen(false);
        toast({
            description: `Column title updated successfully!`
        });
    }

    return (
        <main className="overflow-hidden min-h-screen bg-gray-50 flex flex-col text-gray-800">
            {/* Header Component */}
            <Header onSearch={handleSearch}/>

            <section className="flex-grow flex flex-col items-center w-full">
                {/* Greeting Message */}
                <GreetingMessage
                    toDo={columns[0]?.tasks.length || 0}
                    inProgress={columns[1]?.tasks.length || 0}
                    done={columns[2]?.tasks.length || 0}
                    className="mb-4 text-sm text-gray-500"
                />

                {/* Drag-and-Drop Context */}
                <DragDropContext onDragEnd={handleDragEnd}>
                    <ol className="flex flex-row gap-3 w-full overflow-x-scroll scrollbar-show h-full my-3 flex-grow px-4">
                        {filterColumns.map((column) => (
                            <li className="list-none">
                                <Droppable key={column.$id} droppableId={column.$id}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className="min-h-16 h-auto min-w-72 bg-white rounded-xl shadow-sm rounded-lg px-2 py-2 flex flex-col justify-between"
                                        >
                                            <div className="w-full flex items-center justify-between w-72 py-2 text-center gap-1">
                                                <textarea 
                                                    className="h-8 py-2 px-3 text-left leading-tight text-sm font-semibold text-gray-700 bg-transparent resize-none w-full border border-transparent"
                                                    value={titles[column.$id] ?? column.title}
                                                    onChange={(e) => handleColumnTitle(column.$id, e)}
                                                >
                                                </textarea>

                                                <span
                                                    className="cursor-pointer hover:bg-gray-200 rounded-lg py-1 px-2"
                                                    onClick={() => handleSelectedColumn(column.$id, titles[column.$id] ?? column.title)}
                                                >
                                                    ...
                                                </span>
                                            </div>

                                            {/* Tasks List */}
                                            <ul>
                                                {column.tasks.map((task, index) => (
                                                    <Draggable
                                                        key={task.$id}
                                                        draggableId={task.$id}
                                                        index={index}
                                                    >
                                                        {(provided) => (
                                                            <li
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                className="mb-2 py-2 px-3 bg-gray-100 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
                                                                onClick={() => handleSelectedTask(task, column.$id)}
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
                                                className="w-full text-sm text-gray-600 text-left rounded-lg py-2 px-3 hover:bg-gray-100 hover:cursor-pointer"
                                                onClick={() => handleOpenAddTaskModal(column.$id)}
                                            >
                                                + Add Task
                                            </button>
                                        </div>
                                    )}
                                </Droppable>
                            </li>
                        ))}
                        <div>
                            <div className="min-w-72 h-auto py-2.5 px-3 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                                <button
                                    className="w-full text-sm text-gray-600 font-semibold border-gray-200 rounded-lg text-left px-2"
                                    onClick={() => handleAddColumnModal()}
                                >
                                    + Add another list
                                </button>                            
                            </div>
                        </div>
                    </ol>
                </DragDropContext>
            </section>

            {/* Task Modal */}
            {isTaskModalOpen && (
                <TaskModal
                    task={selectedTask}
                    onClose={handleCloseTask}
                    onDelete={() => handleDeleteTask(selectedTask)}
                    onEdit={(taskId, text, selectedTask) => handleEditTask(taskId, text)}
                    textDetail={selectedTask}
                />
            )}

            {/* Add Task Modal */}
            {isAddTaskModalOpen && (
                <AddTaskModal
                    lists={filterColumns.map(({ $id, title }) => ({ id: $id, title: titles[$id] ?? title}))}
                    selectedColumn={columnSelected}
                    onClose={() => setIsAddTaskModalOpen(false)} 
                    onAddTask={(listId, task) => {
                        addTask(listId, task);
                        setIsAddTaskModalOpen(false);
                    }}
                />
            )}

            {/* Add Column Modal */}
            {isAddColumnModalOpen && (
                <AddColumnModal
                    onClose={() => setIsAddColumnModalOpen(false)}
                    onAddColumn={(columnName) => {
                        addColumn(columnName);
                        setIsAddColumnModalOpen(false);
                    }}
                />
            )}

            {/* Info Modal */}
            {isInfoModalOpen && (
                <InfoModal
                    title={titleInfoModal}
                    text={textInfoModal}
                    onClose={() => handleCloseInfoModal()}
                />
            )}

            {/* Column Modal */}
            {isColumnModalOpen && (
                <ColumnModal 
                    id={columnSelected}
                    title={columnTitleSelected}
                    onClose={() => handleCloseColumnModal()}
                    onDelete={(columnId) => handleDeleteColumnModal(columnId)}
                    onSave={(columnId, newTitle) => handleSaveColumnModal(columnId, newTitle)}
                />
            )}

            {/* Footer */}
            <footer className="py-4 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Trello AI
            </footer>
        </main>
    );
}