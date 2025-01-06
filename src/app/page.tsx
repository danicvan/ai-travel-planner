import Header from "@/components/Header";
import GreetingMessage from "@/components/GreetingMessage";
import Card from "@/components/Card";

export default function HomePage() {
    const taskCounts = {
        toDo: 3,
        inProgress: 2,
        done: 1,
    };

    const columns = [
        {
            id: 1,
            title: "To Do",
            tasks: [
                { id: 1, text: "Task 1" },
                { id: 2, text: "Task 2", imageUrl: "https://via.placeholder.com/150" },
                { id: 3, text: "Task 3" },
            ],
        },
        {
            id: 2,
            title: "In Progress",
            tasks: [
                { id: 4, text: "Task 4" },
                { id: 5, text: "Task 5", imageUrl: "https://via.placeholder.com/150" },
            ],
        },
        {
            id: 3,
            title: "Done",
            tasks: [{ id: 6, text: "Task 6" }],
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <Header />

            {/* Page Content */}
            <section className="flex flex-col items-center mt-6 p-4 w-full max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-indigo-700 mb-4">Welcome to Trello AI</h1>
                <GreetingMessage {...taskCounts} />

                {/* Columns */}
                <div className="flex flex-wrap justify-between w-full gap-4 mt-8">
                    {columns.map((column) => (
                        <div key={column.id} className="w-1/3 bg-white shadow rounded p-4">
                            <h2 className="text-lg font-bold mb-4">{column.title}</h2>
                            <ul className="space-y-2">
                                {column.tasks.map((task) => (
                                    <Card key={task.id} text={task.text} imageUrl={task.imageUrl} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto p-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Trello AI. All rights reserved.
            </footer>
        </main>
    );
}
