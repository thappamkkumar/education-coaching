import { FC } from "react"; 
import { heroData } from "@/content/heroData";

const Hero: FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="
          w-full    
        bg-no-repeat bg-cover bg-right
      "
      style={{
        backgroundImage: ` 
          url(${heroData.backgroundImage})
        `,
				 
      }}
    >
      <div className="bg-[var(--color-background)]/00 backdrop-blur-md md:backdrop-blur-none  ">
				
				
				<div className="max-w-7xl mx-auto px-6 py-20 min-h-screen  flex flex-col justify-end">
					
					{/* CONTENT   FULL WIDTH, LEFT ALIGNED */}
					<div className="  space-y-8 max-w-2xl">
						<h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-text-primary)]">
							{heroData.heading}
						</h1>

						<p className="text-lg md:text-xl text-[var(--color-text-primary)]/90 leading-relaxed">
							{heroData.subheading}
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<a
								href={heroData.primaryCTA.href}
								className="
									text-center	 
									px-8 py-3 rounded-full
									bg-[var(--color-primary)] 
									text-white font-semibold
									shadow-lg transition-all
									hover:bg-[var(--color-primary)]/80 
								"
							>
								{heroData.primaryCTA.label}
							</a>

							<a
								href={heroData.secondaryCTA.href}
								className=" 
									text-center
									px-8 py-3 rounded-full
									border border-2 border-[var(--color-primary)] 
									bg-[var(--color-primary)]/0 
									text-[var(--color-primary)]
									font-semibold
									transition-all
									hover:bg-[var(--color-primary)]/50
								"
							>
								{heroData.secondaryCTA.label}
							</a>
						</div>
					</div>
					
					
								 
				
				
				</div>

					 
					
 

				
				
				
			</div>
    </section>
  );
};

export default Hero;
