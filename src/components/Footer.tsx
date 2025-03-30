import { Facebook, Link } from "lucide-react";

export default function Footer () {
    return (
        <footer className="bg-secondary py-16">
            <div className="container mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <p className="text-2xl font-display font-semibold tracking-tight mb-4 inline-block">
                            AI Trello
                        </p>
                        <p className="text-foreground/70 mt-4 max-w-xs">
                            Transforming workflows managers with advanced technology and design centralized on users.  
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" arial-label="Facebook" className="text-foreground/60 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}