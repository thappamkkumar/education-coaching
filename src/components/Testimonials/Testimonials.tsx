"use client";
 
import { testimonialsData } from "@/content/testimonialsData";
import  TestimonialCard  from "./TestimonialCard";

 const Testimonials  = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[var(--color-text-primary)] mb-12"  >
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default  Testimonials;
