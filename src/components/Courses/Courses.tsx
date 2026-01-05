 

import { FC } from "react"; 
import { coursesData, coursesHeading } from "@/content/coursesData";
import { BookOpen } from "lucide-react";

const Courses: FC = () => {
  return (
    <section
      id="courses"
      className="w-full py-20 bg-[var(--color-background)]"
      aria-labelledby="courses"
    >
      <div className="max-w-7xl mx-auto px-6">

         <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold   mb-2 text-[var(--color-text-primary)]"
        >
         {coursesHeading.coursesPrimaryHeading}
        </h2>
			 
				<p className="mt-2 max-w-2xl mb-12 text-[var(--color-text-secondary)]">
					{coursesHeading.coursesSecondaryHeading}
				</p>

         

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-6 md:gap-8">
          {coursesData.map((course, index) => { 

            return (
       
			 
											 
								<article
									key={index}
									className="group relative bg-white rounded-2xl
														 shadow-md border border-black/5
														 p-6 md:p-7
														 overflow-hidden cursor-pointer 
														 transition-all duration-500
														 hover:shadow-xl "
								>
									{/* Right side accent */}
									<div
										className="absolute top-0 right-0 h-full w-1 md:w-3
															 bg-[var(--color-primary)]
															 transition-all duration-500
															 group-hover:w-full group-hover:bg-[var(--color-primary)]"
									/>

									{/* Content */}
									<div className="relative z-10 flex gap-4 items-start">
										
										{/* Icon */}
										<div
											className="flex-shrink-0 w-12 h-12 rounded-full
																 bg-[var(--color-primary)] flex items-center justify-center
																 transition-colors duration-500
																 group-hover:bg-white/20"
										>
											<BookOpen
												className="w-6 h-6 text-white
																	 transition-colors duration-500
																	 group-hover:text-white"
											/>
										</div>

										{/* Text */}
										<div>
											<h3
												className="text-lg md:text-xl font-bold mb-2
																	 text-[var(--color-text-primary)]
																	 transition-colors duration-500
																	 group-hover:text-white"
											>
												{course.title}
											</h3>

											<p
												className="text-sm md:text-base leading-relaxed
																	 text-[var(--color-text-primary)]/70
																	 transition-colors duration-500
																	 group-hover:text-white/90"
											>
												{course.description}
											</p>
										</div>
									</div>

									 
									<p
										className="relative mt-4 text-right text-xs font-semibold tracking-wide
															 text-[var(--color-primary)]
															 transition-colors duration-500
															 group-hover:text-white/80"
									>
										AVAILABLE NOW
									</p>
								</article>


						


            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
