import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface NavbarProps {
    className?: string;
}

export default function Navbar ({ className }: NavbarProps) {
    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6", 
                className
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-2xl font-semibold bg-gradient-to-r from-primary to-boardly-blue bg-clip-text text-transparent">
                        AI Trello
                    </span>
                </div>

                <nav className="md:flex items-center space-x-8">
                    <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                        Features
                    </a>
                    <a href="#testiomials" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                        Testimonials
                    </a>
                    <a href="#premium" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                        Premium
                    </a>
                </nav>

                
            </div>
        </header>
    );
}