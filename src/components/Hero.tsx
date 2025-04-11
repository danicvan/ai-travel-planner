import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero () {
    return (
        <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-[50%] -top-[100%] w-[200%] h-[300%] bg-gradient-to-br from-boardly-blue/20 via-transparent to-boardly-green/20 opacity-50 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto text-center relative">
                <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        Boost your Trello with Artificial Intelligence!
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
                    Manage your projects <br className="md:block" />
                    <span className="bg-gradient-to-r from-primary to-boardly-blue bg-clip-text text-transparent">in Trello intelligently!</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}> 
                    Take advantage of AI to automate tasks,
                    prioritize demands, and optimize your workflow.  
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 transition-all"
                    >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                    <Button 
                        variant="outline"
                        size="lg"
                    >
                        Try for Free
                    </Button>
                </div>
            </div>

            <div className="mt-16 md:mt-24 max-w-6xl mx-auto relative animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <div className="bg-muted w-full h-full flex items-center justify-center p-6">
                        <div className="flex gap-6 overflow-x-scroll py-4 px-2 w-full custom-scrollbar">
                            <div className="board-column min-h-[300px]">
                                <h2 className="text-sm font-semibold mb-2">To Do</h2>
                                <div className="space-y-2">
                                    <div className="board-card">
                                        <div className="flex gap-1 mb-2">
                                            <span className="bg-boardly-blue text-xs px-2 py-0.5 rounded-full text-boardly-blue-foreground">Design</span>
                                        </div>
                                        <h3 className="text-sm font-medium">Create wireframes</h3>
                                    </div>
                                    <div className="board-card">
                                        <h3 className="text-sm font-medium">Update documentation</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="board-column min-h-[300px]">
                                <h2 className="text-sm font-semibold mb-2">In Progress</h2>
                                <div className="space-y-2">
                                    <div className="board-card">
                                        <div className="flex gap-1 mb-2">
                                            <span className="bg-boardly-amber text-xs px-2 py-0.5 rounded-full text-boardly-amber-foreground">Feature</span>
                                        </div>
                                        <h3 className="text-sm font-medium">Implement drag and drop</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="board-column min-h-[300px]">
                                <h2 className="text-sm font-semibold mb-2">Done</h2>
                                <div className="space-y-2">
                                    <div className="board-card">
                                        <div className="flex gap-1 mb-2">
                                            <span className="bg-boardly-green text-xs px-2 py-0.5 rounded-full text-boardly-green-foreground">Complete</span>
                                        </div>
                                        <h3 className="text-sm font-medium">Set up project repository</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/20 to-boardly-blue/20 -z-10 rounded-xl blur-lg opacity-70"></div>
                </div>
            </div>
        </div>
    );
}