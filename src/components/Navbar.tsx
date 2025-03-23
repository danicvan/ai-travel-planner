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
            
        </header>
    );
}