"use client";

import { useState } from "react";

interface Testimonial {
    name?: string;
    role?: string;
    content?: string;
    author?: string;
    avatar?: string;
    rating?: number;
}

interface TestimonialProps {
    title?: string;
    description?: string;
    testimonials?: Testimonial[];
}

const defaultTestimonials =[
    {
        name: "Ana Souza",
        role: "Gerente de Projetos",
        content: "Essa ferramenta mudou minha forma de gerenciar projetos no Trello! Agora tenho tudo organizado sem esforço.",
        author: "Ana Souza",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 5
    },
    {
        "name": "Lucas Martins",
        "role": "Empreendedor",
        "content": "Economizei horas por semana! A IA prioriza minhas tarefas e evita que eu esqueça prazos importantes.",
        "author": "Lucas Martins",
        "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
        "rating": 5
      },
      {
        "name": "Mariana Lima",
        "role": "Analista de Processos",
        "content": "Incrível como a IA entende meu fluxo de trabalho e otimiza automaticamente!",
        "author": "Mariana Lima",
        "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
        "rating": 5
      }
];

export default function Testimonial () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section className="py-20 md:py-28 bg-secondary">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-4">
                        <span className="text-sm font-medium text-primary">Depoimentos</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
                        O que nossos clientes dizem
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Centenas de pessoas já transformaram a forma de gerenciar suas tarefas com o AI Trello
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
                                                        src={testimonial.avatar}
                                                    />
                                                </div>    
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}