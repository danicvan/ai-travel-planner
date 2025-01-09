import React from "react";

interface TaskModalProps {
    task: { id: string; text: string; imageUrl?: string } | null;
    onClose: () => void;
}


