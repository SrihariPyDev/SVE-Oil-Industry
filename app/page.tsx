import dynamic from 'next/dynamic';
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";

// Lazy load components below the fold
const Services = dynamic(() => import("@/components/Services"));
const Distributors = dynamic(() => import("@/components/Distributors"));
const Dealers = dynamic(() => import("@/components/Dealers"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const Contact = dynamic(() => import("@/components/Contact"));
const MapSection = dynamic(() => import("@/components/MapSection"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingButtons = dynamic(() => import("@/components/FloatingButtons"));

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Distributors />
      <Dealers />
      <WhyChooseUs />
      <Contact />
      <MapSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
