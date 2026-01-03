
import { FC } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import About from "@/components/About/About";
import Courses from "@/components/Courses/Courses";
import Gallery from "@/components/Gallery/Gallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const Home: FC = () => {

  return (
    <div className="  "   >
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Courses />
      <Gallery />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;