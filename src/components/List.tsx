import Card from "./Card";

export default function List({
  list,
  onAddTask,
}: {
  list: { id: number; title: string; tasks: { id: number; text: string; image?: string }[] };
  onAddTask: () => void;
}) {
  return (
    <div className="w-72 bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4">
      <h2 className="text-xl font-bold">{list.title} ({list.tasks.length})</h2>
      <ul className="space-y-2">
        {list.tasks.map((task) => (
          <Card key={task.id} card={task} />
        ))}
      </ul>
      <button
        onClick={onAddTask}
        className="bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600"
      >
        +
      </button>
    </div>
  );
}
