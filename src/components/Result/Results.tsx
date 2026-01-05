"use client";

import { useRef } from "react";
import ResultsHeader from "./ResultsHeader";
import ResultsGrid from "./ResultsGrid";
import ResultsControls from "./ResultsControls";
import { achievementsData } from "@/content/achievementsData";

const Results = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector<HTMLElement>("[data-card]");
    if (!card) return;

    const gap = parseInt(getComputedStyle(container).columnGap || "24", 10);
    const scrollAmount = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section 
			style={{ backgroundImage: `url('/bg/bg1.jpg')` }} 
			className="   relative bg-cover bg-center bg-no-repeat"  
			id="results" aria-labelledby="results"
		>
      <div className="  w-full py-20  bg-[var(--color-primary)]/90"  >

				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
						<ResultsHeader data={achievementsData} />

						<div className="hidden lg:block">
							<ResultsControls onScroll={handleScroll} />
						</div>
					</div>

					<div className="flex justify-end mb-6 lg:hidden">
						<ResultsControls onScroll={handleScroll} />
					</div>

					<ResultsGrid
						scrollRef={scrollRef}
						items={achievementsData.items}
					/>
				</div>
      </div>
    </section>
  );
};

export default Results;
