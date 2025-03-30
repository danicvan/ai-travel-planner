"use client";

import { ArrowRight, Link } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";

interface CtaSectionProps {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
};

const CtaSection = ({
    title = "Transform the way you manage your projects today",
    description = "Join hundreds of users who have already optimized their workflow with AI Trello. Start now with a 14-day trial.",
    ctaText = "Start free trial",
    ctaLink = "/register"
}: CtaSectionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <section ref={ref} className="py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6 md:px-10">
                <div
                    className={`relative rounded-3xl bg-primary overflow-hidden transition-all duration-1000 ease-apple ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary to-blue-600 opacity-80" />
                        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4" />
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
                    </div>

                    <div className="relative z-10 py-16 md:py-20 px-8 md:px-16 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 text-white">
                            {title}
                        </h2>
                        <p className="text-xl text-white/80 mb-10">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 transition-all text-base">
                                {ctaText}<ArrowRight />
                             </Button>
                           
                            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-primary border-white/30 hover:bg-white/10 hover:text-white transition-all text-base">
                                Request a demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;