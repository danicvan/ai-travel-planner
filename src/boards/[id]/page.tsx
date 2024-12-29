import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function BoardPage() {
  const [lists, setLists] = useState([
    { id: 1, title: "To Do", cards: [{ id: 1, text: "Set up project" }] },
    { id: 2, title: "In Progress", cards: [{ id: 2, text: "Develop features" }] },
    { id: 3, title: "Done", cards: [{ id: 3, text: "Launch app" }] },
  ]);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceList = lists.find((list) => list.id === parseInt(source.droppableId));
    const destList = lists.find((list) => list.id === parseInt(destination.droppableId));

    if (sourceList && destList) {
      const [movedCard] = sourceList.cards.splice(source.index, 1);
      destList.cards.splice(destination.index, 0, movedCard);
      setLists([...lists]);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-6 overflow-x-auto">
        {lists.map((list) => (
          <Droppable key={list.id} droppableId={list.id.toString()}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="w-72 bg-white shadow rounded p-4">
                <h2 className="text-xl font-bold mb-4">{list.title}</h2>
                {list.cards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300 cursor-pointer"
                      >
                        {card.text}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
