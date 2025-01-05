import Header from "@/components/Header";
import GreetingMessage from "@/components/GreetingMessage";

export default function HomePage() {
    const taskCounts = {
        toDo: 3,
        inProgress: 2,
        done: 1,
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <Header />

            {/* Page Content */}
            <section className="flex flex-col items-center mt-6 p-4 w-full max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-indigo-700 mb-4">Welcome to Trello AI</h1>
                <GreetingMessage {...taskCounts} />
            </section>

            {/* Footer */}
            <footer className="mt-auto p-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Trello AI. All rights reserved.
            </footer>
        </main>
    );
}
