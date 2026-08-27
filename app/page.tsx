import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Philosophy from "@/components/Philosophy";
import Hairducation from "@/components/Hairducation";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import ScrollReveal from "@/components/ScrollReveal";


export default function Home() {
  return (
    <>
    <Navbar />

    <main>
      

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

       <div className="page-background">

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Products />
      </ScrollReveal>

      <ScrollReveal>
        <Benefits />
      </ScrollReveal>

      <ScrollReveal>
        <Philosophy />
      </ScrollReveal>

      <ScrollReveal>
        <Hairducation />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <Footer />

      <WhatsAppButton />

      </div>
      
    </main>
    </>
  );
}