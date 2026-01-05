
import { FC } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import About from "@/components/About/About";
import Courses from "@/components/Courses/Courses"; 
import Results from "@/components/Result/Results"; 
import TeachingMethodology from "@/components/Teaching/TeachingMethodology"; 
import Faculty from "@/components/Faculty/Faculty"; 

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
      <Results /> 
      <TeachingMethodology /> 
      <Faculty /> 
      
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;