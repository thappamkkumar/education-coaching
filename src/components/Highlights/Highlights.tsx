import { FC } from "react";
import { highlightsIconMap } from "@/lib/highlightsIconMap";
import { highlightsData, bgImage } from "@/content/highlightsData";

const Highlights: FC = () => {
  return (
    <section
      id="highlights"
			style={{ backgroundImage: `url(${bgImage})` }}
      className="    relative w-full 	bg-cover bg-bottom-left bg-no-repeat "
      aria-label="Key highlights"
    >
			<div className="  bg-[var(--color-background)]/90"  >


				<div className="relative max-w-7xl mx-auto px-6  py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{highlightsData.map((item, index) => {
						const Icon = highlightsIconMap[item.icon];

						return (
							<div
								key={index}
								className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl group transition-shadow duration-300 overflow-hidden"
							>
								{/* Image at top */}
								<div className="relative w-full h-48">
									
									<img
										src={item.image}
										alt={item.text}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									
                 {/* Diagonal shine overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute w-0 h-0 bg-white/20 rounded-full
                                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    transition-all duration-500
                                    group-hover:w-[300%] group-hover:h-[300%] rotate-45 origin-center">
                    </div>
                  </div>		
																	
									{/* Bigger Icon over the image */}
									{Icon && (
										<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[var(--color-primary)] w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
											<Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
										</div>
									)}
								</div>

								{/* Text */}
								<div className="flex-1 px-6 pt-10 pb-6 text-center">
									<p className="text-[var(--color-text-primary)] font-bold text-lg tracking-wide">
										{item.text}
									</p>
								</div>
							</div>
						);
					})}
				</div>
      </div>
    </section>
  );
};

export default Highlights;
