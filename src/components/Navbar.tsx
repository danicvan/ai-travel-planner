"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface NavbarProps {
    className?: string;
}

export default function Navbar ({ className }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    
    const handlePaymentPage = () => {
        router.push("/payment");
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6", 
                scrolled ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm" : "bg-transparent",
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

                <div className="flex items-center space-x-4 ">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-sm font-medium md:inline-flex"
                    >
                        Sign In
                    </Button>
                    <Button
                        onClick={() => handlePaymentPage()}
                        variant="default"
                        size="sm"
                        className="bg-primary hover:primary/90 transition-colors"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
}