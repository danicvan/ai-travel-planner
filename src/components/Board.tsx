import { useState } from "react";
import List from "./List";
import AddTaskModal from "./AddTaskModal";

// Definição do tipo de uma Task
type Task = {
  id: string;
  text: string;
  image?: string;
};

// Definição do tipo de uma Lista (Coluna)
type ListType = {
  id: string;
  title: string;
  tasks: Task[];
};

// Listas iniciais (To Do, In Progress, Done)
const initialLists: ListType[] = [
  { id: "1", title: "To Do", tasks: [] },
  { id: "2", title: "In Progress", tasks: [] },
  { id: "3", title: "Done", tasks: [] },
];

export default function Board() {
  const [lists, setLists] = useState<ListType[]>(initialLists);
  const [showModal, setShowModal] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);

  // Adiciona uma nova tarefa à lista correta
  const addTask = (listId: string, task: Task) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, tasks: [...list.tasks, { ...task, id: String(task.id) }] }
          : list
      )
    );
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Cabeçalho */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Trello AI</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded p-2 w-64"
        />
      </header>

      {/* Resumo das Tarefas */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          Today, we have {lists[0].tasks.length} tasks in To Do, {lists[1].tasks.length} in In Progress, and {lists[2].tasks.length} in Done.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Create Task
        </button>
      </div>

      {/* Renderização das Listas */}
      <div className="flex space-x-4">
        {lists.map((list) => (
          <List
            key={list.id}
            list={list}
            onAddTask={() => {
              setSelectedColumn(list.id);
              setShowModal(true);
            }}
          />
        ))}
      </div>

      {/* Modal para Adicionar Tarefa */}
      {showModal && selectedColumn && (
        <AddTaskModal
          lists={lists}
          selectedColumn={selectedColumn}
          onClose={() => setShowModal(false)}
          onAddTask={addTask}
        />
      )}
    </div>
  );
}
