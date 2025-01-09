"use client";

type TaskCounts = {
    toDo: number;
    inProgress: number;
    done: number;
};

export default function GreetingMessage({ toDo, inProgress, done }: TaskCounts) {
    const tasksMessage = `Hello, today we have ${toDo} tasks in To Do, ${inProgress} In Progress, and ${done === 1 ? "One" : done} in Done. Have a nice day!`;

    return (
        <div className="p-4 bg-indigo-100 text-indigo-800 rounded-md shadow-md max-w-lg mx-auto mt-2">
            <p className="text-lg font-semibold">{tasksMessage}</p>
        </div>
    );
}
