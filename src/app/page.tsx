import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage () {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Features />
            <Testimonials />
            <CTASection />
            <Footer />
        </div>
    )
}