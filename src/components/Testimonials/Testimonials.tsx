"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData, testimonialsSection } from "@/content/testimonialsData";
import TestimonialsGrid from "./TestimonialsGrid";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.children[0] as HTMLElement;
    if (!card) return;

    const gap = 24;
    const amount = card.offsetWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
			   className="  w-full py-20  bg-[var(--color-background)] "   
			 aria-labelledby="results"
			id="testimonials"
			>

				<div className="max-w-7xl mx-auto  px-6">
					
					{/* Header (same as Results) */}
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ">
						<div className="mb-4">
							<h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
								{testimonialsSection.heading}
							</h2>
							<p className="mt-2 max-w-xl text-[var(--color-text-secondary)]">
								{testimonialsSection.subHeading}
							</p>
						</div>

						<div className="flex justify-end gap-3">
							<button
								onClick={() => scroll("left")}
								className="cursor-pointer h-10 w-10 rounded-full  text-[var(--color-text-on-surface)] bg-[var(--color-primary)] shadow hover:scale-105 transition"
							>
								<ChevronLeft className="mx-auto" />
							</button>
							<button
								onClick={() => scroll("right")}
								className="cursor-pointer h-10 w-10 rounded-full text-[var(--color-text-on-surface)]  bg-[var(--color-primary)] shadow hover:scale-105 transition"
							>
								<ChevronRight className="mx-auto" />
							</button>
						</div>
					</div>

					<TestimonialsGrid scrollRef={scrollRef} items={testimonialsData} />
				</div>
		 
    </section>
  );
};

export default Testimonials;
