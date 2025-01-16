import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Field, Label, Textarea, Button } from "@headlessui/react";
import clsx from "clsx";

interface AddTaskModalProps {
  lists: { id: number; title: string }[];
  onClose: () => void;
  onAddTask: (listId: number, task: { id: number; text: string; image?: string }) => void;
}

export default function AddTaskModal({ lists, onClose, onAddTask }: AddTaskModalProps) {
  const [selectedListId, setSelectedListId] = useState(lists[0].id);
  const [taskText, setTaskText] = useState("");
  const [taskImage, setTaskImage] = useState<string | undefined>("");

  const handleAddTask = () => {
    if (!taskText.trim()) return;

    onAddTask(selectedListId, { id: Date.now(), text: taskText, image: taskImage });
    setTaskText("");
    setTaskImage("");
    onClose();
  };

  return (
    <Dialog
      open
      onClose={onClose}
      className="relative z-50 focus:outline-none"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
        <DialogPanel
          transition
          className="w-full max-w-lg h-auto rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        >
          <DialogTitle as="h3" className="text-base/7 font-medium text-black">
            Add Task
          </DialogTitle>
          <div className="mt-4">
            <Field>
              <Label className="text-sm/6 font-medium text-black">
                Select List
              </Label>
              <select
                value={selectedListId}
                onChange={(e) => setSelectedListId(Number(e.target.value))}
                className="mt-2 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black focus:outline-none"
              >
                {lists.map((list) => (
                  <option key={list.id} value={list.id}>
                    {list.title}
                  </option>
                ))}
              </select>
            </Field>
            <Field className="mt-4">
              <Label className="text-sm/6 font-medium text-black">
                Task Description
              </Label>
              <Textarea
                className={clsx(
                  "mt-2 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
                rows={4}
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
              />
            </Field>
            <Field className="mt-4">
              <Label className="text-sm/6 font-medium text-black">
                Task Image (Optional)
              </Label>
              <Textarea
                className={clsx(
                  "mt-2 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
                rows={2}
                value={taskImage}
                onChange={(e) => setTaskImage(e.target.value)}
              />
            </Field>
          </div>
          <div className="flex justify-between mt-8">
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white"
              onClick={handleAddTask}
            >
              Add Task
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
