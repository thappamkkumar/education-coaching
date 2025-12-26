"use client";

import { FC } from "react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types/testimonials";
 
interface TestimonialCardProps {
  testimonial: Testimonial;
}


const TestimonialCard: FC<TestimonialCardProps>  = ({ testimonial }) => {
  return (
    <div
      className="max-w-3xl  mx-auto   bg-[linear-gradient(150deg,var(--color-primary),rgba(255,255,255,0.9))] rounded-2xl p-8 flex flex-col-reverse md:flex-row md:item-center md:justify-between text-left shadow-lg gap-2	"  
    >
		
			<div className="pt-4 md:p-0">
				<h3 className="text-lg md:text-xl  text-center md:text-start font-bold mb-1 text-[var(--color-text-primary)]  flex items-center justify-center md:justify-start gap-3"  >	
						<span className="w-6 h-[3px] md:h-[4px] bg-[var(--color-text-primary)] inline-block"></span>
						<span>{testimonial.name}</span>
						<span className="w-6 h-[3px] md:h-[4px] md:hidden bg-[var(--color-text-primary)] inline-block"></span>
				</h3>
				
				<div className="flex gap-1 mb-2   justify-center md:justify-start">
					{Array.from({ length: testimonial.rating }).map((_, i) => (
						<Star key={i} className="w-4 h-4 text-[var(--color-text-primary)]/80" />
					))}
				</div>
				
				
				<p className="text-base leading-relaxed text-[var(--color-text-primary)]  text-center md:text-start">{testimonial.comment}</p>
				
				
			</div>
			
				<div className="shrink-0 flex justify-center md:justify-end">
					<div className="w-28 aspect-square">
						<img
							src={testimonial.photo}
							alt={`Photo of ${testimonial.name}`}
							className="w-full h-full rounded-full border-4 border-[var(--color-primary)] object-cover"
						/>
					</div>
				</div>

    </div>
  );
};

export default TestimonialCard;