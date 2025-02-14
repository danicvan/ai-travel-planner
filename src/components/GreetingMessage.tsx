"use client";

import { useEffect, useState } from "react";

type TaskCounts = {
    toDo: number;
    inProgress: number;
    done: number;
};

const fetchData = async (message: string) => {
    if (!message) {
        console.log(`Message is required!`);
        return null;
    };
    
    try {
        const response = await fetch("http://localhost:9000/api/chat", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            console.error(`API request failed:`, response.status, response.statusText);
            return "Failed to fetch message.";
        }

        const result = await response.json();
        console.log(`My response is: ${result}`);
        return result.reply;
    } catch (error) {
        console.error("Error while fetching data:", error);
        return "An error ocurred while fetching the message.";
    }
};

export default function GreetingMessage({ toDo, inProgress, done }: TaskCounts) {
    const [taskMessage, setTaskMessage] = useState<string | null>(null);

    useEffect(() => {
        const message = `Make a funny daily message for trello: Todo: ${toDo}, In Progress: ${inProgress}, Done: ${ done === 1 ? '1' : done}. I wanna only 2 rows.`
        console.log(`Request message is: ${message}`);

        fetchData(message)
        .then((response) => {
            console.log("Message received: ", response);
            setTaskMessage(response);
        });
    }, [toDo, inProgress, done]);

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full p-4 bg-gray-200 text-indigo-800 text-center">
                <p className="text-md">{taskMessage || `Loading message...`}</p>
            </div>
        </div>
    );
}