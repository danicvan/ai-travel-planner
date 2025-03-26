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

export default function Testimonials () {
    return (
        <h1>Testimonial</h1>
    )
}