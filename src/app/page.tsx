
import { FC } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const Home: FC = () => {

  return (
    <div className=" bg-[var(--color-background)]  "   >
      <Header />
      <Hero />
      <Highlights />
      <About />
      <Services />
      <Gallery />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;