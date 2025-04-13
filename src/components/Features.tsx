import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export default function Features () {
    const features = [
        {
            title: "Smart Automation",
            description: "Let AI organize your tasks automatically."
        },
        {
            title: "Data-Driven Suggestions",
            description: "Get recommendations to optimize your productivity."
        },
        {
            title: "Optimized Priorities",
            description: "AI helps you identify what needs the most attention."
        },
        {
            title: "Seamless Integration",
            description: "Works inside Trello without any hassle."
        }
    ];    

    return (
        <div className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4"> 
                        Why choose our AI for Trello?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        AI Trello combines simplicity with powerful features to help you manage your tasks efficiently.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <CheckCircle2 className="h-6 w-6 text-primary"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90"
                    >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </div>
    );
}
