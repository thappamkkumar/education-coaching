"use client";

import { Star } from "lucide-react";
import type { Testimonial } from "@/types/testimonials";
 
interface TestimonialCardProps {
  testimonial: Testimonial;
}


const TestimonialCard: FC<TestimonialCardProps>  = ({ testimonial }) => {
  return (
    <div
      className="max-w-3xl  mx-auto   bg-[linear-gradient(150deg,var(--color-primary),rgba(255,255,255,0.9))] rounded-2xl p-8 flex flex-col-reverse md:flex-row md:item-center md:justify-between text-left shadow-lg" 
    >
		
			<div className=" ">
				<h3 className="text-lg md:text-xl  text-center md:text-start font-bold mb-1 text-[var(--color-text-primary)]"  >
					{testimonial.name}
				</h3>
				
				<div className="flex gap-1 mb-2   justify-center md:justify-start">
					{Array.from({ length: testimonial.rating }).map((_, i) => (
						<Star key={i} className="w-4 h-4 text-[var(--color-text-primary)]/80" />
					))}
				</div>
				
				
				<p className="text-base leading-relaxed text-[var(--color-text-primary)]  text-center md:text-start">{testimonial.comment}</p>
				
				
			</div>
			
				<img
        src={testimonial.photo}
        alt={`Photo of ${testimonial.name}`}
        className="w-28 h-28 rounded-full border-4 border-[var(--color-primary)] object-cover mx-auto mb-2 md:mx-0 md:mb-0 "
      />
    </div>
  );
};

export default TestimonialCard;