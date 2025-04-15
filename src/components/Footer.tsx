import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer () {

    const currentYear = new Date().getFullYear();
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
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"  arial-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors">
                              <Twitter size={20} />  
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" arial-label="Instagram" className="text-foreground/60 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" arial-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors">
                              <Linkedin size={20} />  
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-base mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                About Us
                            </li>
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Customers
                            </li>
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Blog
                            </li>
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Contact
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-base mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Features
                            </li>
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Prices
                            </li>
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Support
                            </li>
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Demo
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-base mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Terms of Service
                            </li>
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Privacy Politic
                            </li>
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Cookies Politic
                            </li>
                            <li className="text-foreground/70 hover:text-primary transition-colors">
                                Security
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-foreground/60 text-sm">
                        &copy; {currentYear} AI Trello. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <ul className="flex space-x-6 text-sm">
                            <li className="text-foreground/60 hover:text-primary transition-colors">
                                Terms
                            </li>
                            <li className="text-foreground/60 hover:text-primary transition-colors">
                                Privacy
                            </li>
                            <li className="text-foreground/60 hover:text-primary transition-colors">
                                Cookies
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}