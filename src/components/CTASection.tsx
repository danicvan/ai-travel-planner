"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CtaSectionProps {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
};

const CtaSectionText = ({
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
};

export default function CTASection () {
    return (
        <section>

            
        </section>
    )
}