import {
    Description,
    Dialog,
    DialogPanel,
    DialogTitle
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

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        console.log(`close InfoModal...`);
        onClose();
    }

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="relative z-50"
        >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">{title}</DialogTitle>
            <Description>{text}</Description>
            <p>{text}</p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
        </Dialog>
    )
}


