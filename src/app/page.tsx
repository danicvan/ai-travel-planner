import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function LandingPage () {
    return (
        <div>
            <h1>Landing Page</h1>
            <Hero />
            <Navbar />
            <Features />
            <Testimonials />
        </div>
    )
}