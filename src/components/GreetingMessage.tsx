"use client";

type TaskCounts = {
    toDo: number;
    inProgress: number;
    done: number;
};

export default function GreetingMessage({ toDo, inProgress, done }: TaskCounts) {
    const tasksMessage = `Hello, today, you have ${toDo} tasks in To Do, ${inProgress} In Progress, and ${
        done === 1 ? "one task" : `${done} tasks`
    } in Done. Have a productive day!`;

    return (
        <div className="flex items-center justify-center">
            <div className="p-6 bg-white text-indigo-800 rounded-lg shadow-sm max-w-lg text-center">
                <p className="text-lg">{tasksMessage}</p>
            </div>
        </div>
    );
}
