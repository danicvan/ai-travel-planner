import {
    Description,
    Dialog,
    DialogPanel,
    DialogTitle,
    Button,
} from "@headlessui/react";
import { useState } from "react";

interface InfoModalProps {
    title: string;
    text: string;
    onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
    title,
    text,
    onClose
}) => {
    console.log(`title:`, title);
    console.log(`text`, text);

    if (!title || !text) return;

    return (
        <Dialog
            open={true}
            onClose={onClose}
            className="relative z-50"
        >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-white/70 backdrop-blur-sm">
          <DialogPanel className="w-full max-w-lg rounded-x1 bg-white shadow-lg p-6">
            <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                {title}
            </DialogTitle>
            <Description className="mt-2 text-sm text-gray-500">
                {text}
            </Description>
            <div className="flex justify-end gap-4 mt-6">
                <Button
                    className="rounded-md bg-blue-500 py-1.5 px-3 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={() => {
                        onClose()
                    }}
                >
                    Close
                </Button>
            </div>
          </DialogPanel>
        </div>
        </Dialog>
    )
}

export default InfoModal;
