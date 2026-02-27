import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Benefits />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
