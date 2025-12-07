"use client";

import { FC } from "react";
import { Star } from "lucide-react";
 
const TestimonialCard  = ({ testimonial }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-soft p-6 flex flex-col items-center text-center"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <img
        src={testimonial.photo}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mb-4"
      />
      <p className="text-sm text-gray-700 mb-2">{testimonial.comment}</p>
      <div className="flex mb-2">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400" />
        ))}
      </div>
      <span className="font-medium" style={{ color: "var(--color-text-primary)" }}>
        {testimonial.name}
      </span>
    </div>
  );
};

export default TestimonialCard;