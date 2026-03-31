import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import BMICalculator from "@/components/BMICalculator";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MotivationalPopup from "@/components/MotivationalPopup";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Transformations />
      <BMICalculator />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MotivationalPopup />
    </main>
  );
}
