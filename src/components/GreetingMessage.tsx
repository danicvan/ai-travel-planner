"use client";

type TaskCounts = {
    toDo: number;
    inProgress: number;
    done: number;
};

export default function GreetingMessage({ toDo, inProgress, done }: TaskCounts) {
    const tasksMessage = `Hello! Today, you have ${toDo} tasks in To Do, ${inProgress} In Progress, and ${
        done === 1 ? "one task" : `${done} tasks`
    } in Done. Have a productive day!`;

    return (
        <div className="flex items-center justify-center">
            <div className="p-6 bg-white text-indigo-800 rounded-lg shadow-xl max-w-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Good Morning!</h1>
                <p className="text-lg">{tasksMessage}</p>
                <div className="mt-4 flex justify-center gap-4">
                    <div className="bg-indigo-500 text-white rounded-full px-4 py-2">
                        To Do: {toDo}
                    </div>
                    <div className="bg-indigo-400 text-white rounded-full px-4 py-2">
                        In Progress: {inProgress}
                    </div>
                    <div className="bg-indigo-600 text-white rounded-full px-4 py-2">
                        Done: {done}
                    </div>
                </div>
            </div>
        </div>
    );
}
