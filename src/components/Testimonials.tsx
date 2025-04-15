"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

interface Testimonial {
    name?: string;
    role?: string;
    content?: string;
    author?: string;
    avatar?: string;
    rating?: number;
}

const defaultTestimonials = [
    {
      "name": "Ana Souza",
      "role": "Project Manager",
      "content": "This tool has changed the way I manage projects on Trello! Now I have everything organized effortlessly.",
      "author": "Ana Souza",
      "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
      "rating": 5
    },
    {
      "name": "Lucas Martins",
      "role": "Entrepreneur",
      "content": "I saved hours per week! The AI prioritizes my tasks and prevents me from missing important deadlines.",
      "author": "Lucas Martins",
      "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
      "rating": 5
    },
    {
      "name": "Mariana Lima",
      "role": "Process Analyst",
      "content": "It's amazing how AI understands my workflow and optimizes it automatically!",
      "author": "Mariana Lima",
      "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
      "rating": 5
    }
 ];  

export default function Testimonial () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const {inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? defaultTestimonials.length - 1 : prev - 1));
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => prev === defaultTestimonials.length - 1 ? 0 : prev + 1);
    }

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 md:py-28 bg-secondary">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-4">
                        <span className="text-sm font-medium text-primary">Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
                        What our customers say
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Hundreds of people have already transformed the way they manage their tasks with AI Trello.
                    </p>
                </div>

                <div
                    className={`relative max-w-4xl mx-auto transition-all duration-1000 ease-apple ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                >
                    <div className="overflow-hidden relative roudend-2xl glass-card shadow-elevated">
                        <div
                            className="flex transition-transform duration-500 ease-apple"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {defaultTestimonials.map((testimonial, index) => {
                                const displayName = testimonial.name || testimonial.author;
                                const displayRole = testimonial.role || '';

                                return (
                                    <div key={index} className="min-w-full p-10 md:p-12">
                                        <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="md:w-1/3 flex flex-col items-center">
                                                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-subtle">
                                                    <img 
                                                        src={testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random`}
                                                        alt={displayName}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <h4 className="text-lg font-medium text-center">{displayName}</h4>   
                                                <p className="text-foreground/70 text-sm text-center">{displayRole}</p>
                                                <div className="flex items-center mt-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star 
                                                            key={1}
                                                            className={`h-4 w-4 ${i < (testimonial.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="md:w-2/3">
                                                    <blockquote>
                                                        <p className="text-xl italic">{testimonial.content}</p>
                                                    </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-subtle flex items-center justify-center text-foreground hover:bg-white transition-all"
                        >
                            <ChevronLeft className="h-5 w-5"/>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-subtle flex items-center justify-center text-foreground hover:bg-white transition-all "
                        >
                            <ChevronRight className="h-5 w-5"/>
                        </button>
                    </div>

                    <div className="flex justify-center items-center mt-8 space-x-2">
                            {defaultTestimonials.map((_, index) => (
                                <button 
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        currentSlide === index ? 'bg-primary scale-2' : 'bg-foreground/20'
                                    }`}
                                    aria-label={`Go to the slide ${index + 1}`}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}