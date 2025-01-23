"use client";

import { useEffect, useState } from "react";

type TaskCounts = {
    toDo: number;
    inProgress: number;
    done: number;
};

const fetchData = async (message: string) => {
    if (!message) {
        return console.log(`Message is required!`);
    };
    
    const response = await fetch("http://localhost:5000/api/chat", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    const result = await response.json();
    console.log(`My response is: ${result}`);
    return result;
};

export default function GreetingMessage({ toDo, inProgress, done }: TaskCounts) {
    const [taskMessage, setTaskMessage] = useState<string | null>(null);

    useEffect(() => {
        const message = `Make a funny daily message for trello with this data: Todo: ${toDo}, In Progress: ${inProgress}, Done: ${ done === 1 ? '1' : done}.`
        fetchData(message).then(setTaskMessage);
    }, [toDo, inProgress, done]);

    return (
        <div className="flex items-center justify-center">
            <div className="p-6 bg-white text-indigo-800 rounded-lg shadow-sm max-w-lg text-center">
                <p className="text-lg">{taskMessage}</p>
            </div>
        </div>
    );
}