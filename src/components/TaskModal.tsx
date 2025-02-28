import Image from "next/image";
import React, { useState } from "react";
import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Textarea,
} from "@headlessui/react";
import clsx from "clsx";

interface TaskModalProps {
  task: { $id: string; text: string; imageUrl?: string; } | null;
  onClose: () => void;
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string, newText: string) => void;
  textDetail: string;
  columnId: string;
}

const TaskModal: React.FC<TaskModalProps> = ({
  task,
  onClose,
  onDelete,
  onEdit,
  textDetail,
  columnId
}) => {
  console.log(`task is:`, task);
  const [editedText, setEditedText] = useState(textDetail || "");
  console.log(`columnId`, columnId);

  if (!task) return null;

  const handleSave = () => {
    console.log(`my taskId on taskModal component is`, task.$id, task);
    onEdit(task.$id, editedText);
    onClose();
  };

  return (
    <Dialog
      open={Boolean(task)}
      onClose={onClose}
      className="relative z-50 focus:outline-none"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 bg-white/70 backdrop-blur-sm">
        <DialogPanel className="w-full max-w-lg rounded-xl bg-white shadow-lg p-6">
          <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
            Task Details
          </DialogTitle>
          <p className="mt-2 text-sm text-gray-500">
            Edit the details of your task below. Make sure to save your changes!
          </p>
          <div className="mt-4">
            <Field>
              <Label className="block text-sm font-medium text-gray-700">
                Task ID {task.$id}
              </Label>
              <Description className="text-sm text-gray-500">
                This will be shown under the product title.
              </Description>
              <Textarea
                className={clsx(
                  "mt-3 block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                )}
                rows={6}
                id="taskText"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            </Field>
          </div>
          {task.imageUrl && (
            <Image
              src={task.imageUrl}
              alt={task.text}
              className="w-full rounded-lg mt-4"
            />
          )}
          <div className="flex justify-end gap-4 mt-6">
            <Button
              className="rounded-md border border-gray-300 bg-white py-1.5 px-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              className="rounded-md border border-red-500 bg-red-50 py-1.5 px-3 text-sm font-semibold text-red-600 hover:bg-red-100 focus:outline-none"
              onClick={() => {
                onDelete(task.$id);
                onClose();
              }}
            >
              Delete
            </Button>
            <Button
              className="rounded-md bg-blue-500 py-1.5 px-3 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default TaskModal;
