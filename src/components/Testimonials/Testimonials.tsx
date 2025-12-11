"use client";

import { useState, useEffect } from "react";
import { testimonialsData } from "@/content/testimonialsData";
import TestimonialCard from "./TestimonialCard";

import { ChevronLeft, ChevronRight } from "lucide-react";



const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  if (length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center ">
          No testimonials available.
        </div>
      </section>
    );
  }

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto ">
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-primary)]"
        > What Our Customers Say
        </h2>

        <div className="relative    pb-5   overflow-hidden">
          <div
            className=" flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0  w-full px-6">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Arrows */}
          {length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-1 -translate-y-1/2  p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-lg cursor-pointer transition hover:bg-[var(--color-border)]"
                aria-label="Previous Slide"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-1 -translate-y-1/2   p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-lg cursor-pointer transition hover:bg-[var(--color-border)]"
                aria-label="Next Slide"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

 
       
      </div>
    </section>
  );
};

export default Testimonials;
