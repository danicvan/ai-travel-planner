interface ListProps {
  list: { id: number; title: string; tasks: { id: number; text: string; image?: string }[] };
  onAddTask: () => void;
}

export default function List({ list, onAddTask }: ListProps) {
  return (
    <div className="bg-white p-4 rounded shadow w-1/3">
      <h3 className="text-lg font-bold mb-4">{list.title}</h3>
      <ul className="space-y-2 mb-4">
        {list.tasks.map((task) => (
          <li key={task.id} className="p-2 border rounded flex items-center">
            <span>{task.text}</span>
            {task.image && (
              <img src={task.image} alt={task.text} className="ml-2 w-8 h-8 rounded-full" />
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={onAddTask}
        className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
      >
        Add Task
      </button>
    </div>
  );
}
