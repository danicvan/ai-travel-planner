import React, { useState } from "react";
import { Button, Description, Dialog, DialogPanel, DialogTitle, Field, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";

interface TaskModalProps {
    task: { id: string; text: string; imageUrl?: string } | null;
    onClose: () => void;
    onDelete: (taskId: string) => void;
    onEdit: (taskId: string, newText: string) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
    task,
    onClose,
    onDelete,
    onEdit,
}) => {
    const [editedText, setEditedText] = useState(task?.text || "");

    if (!task) return null;

    const handleSave = () => {
        onEdit(task.id, editedText);
        onClose();
    };

    return (
        <Dialog
            open={Boolean(task)}
            onClose={onClose}
            className="relative z-50 focus:outline-none"
        >
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel
                    transition
                    className="w-full max-w-lg h-auto rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                >
                    <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                        Task Details
                    </DialogTitle>
                    <p className="mt-2 text-sm/6 text-black/50">
                        Your payment has been successfully submitted. We’ve sent you an
                        email with all of the details of your order.
                    </p>
                    <div className="w-full max-w-md px-4 mt-4">
                        <Field>
                            <Label className="text-sm/6 font-medium text-black">Task ID {task.id}</Label>
                            <Description className="text-sm/6 text-black/50">This will be shown under the product title.</Description>
                            <Textarea
                            className={clsx(
                              'mt-3 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                            rows={6}
                            id="taskText"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                          />
                        </Field>
                    </div>
                    {task.imageUrl && (
                        <img
                            src={task.imageUrl}
                            alt={task.text}
                            className="w-full rounded mt-4"
                        />
                    )}
                    <div className="flex justify-between mt-8">
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={onClose}
                        >
                            Close
                        </Button>
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => {
                                onDelete(task.id);
                                onClose();
                            }}
                        >
                            Delete
                        </Button>
                         <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
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
