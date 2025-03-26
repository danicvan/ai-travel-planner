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
    
]

export default function Testimonials () {
    return (
        <h1>Testimonial</h1>
    )
}