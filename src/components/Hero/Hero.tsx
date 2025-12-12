import { FC } from "react";
import { heroData } from "@/content/heroData";
import Image from "next/image";

 const Hero: FC = () => {
  return (
    <section 
			id="home"
      className="  w-full pt-30 pb-20  overflow-hidden bg-[var(--color-surface)]"
			 aria-label="Hero Section"
		>
      <div
        className="  max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="space-y-8 z-10">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight text-[var(--color-text-primary)]"
          >
            {heroData.heading}
          </h1>

          <p
            className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-md"
          >
            {heroData.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={heroData.primaryCTA.href}
              aria-label={heroData.primaryCTA.label}
              className="px-8 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium shadow-lg transition hover:opacity-90 text-center"
            >
              {heroData.primaryCTA.label}
            </a>

            <a
              href={heroData.secondaryCTA.href}
              aria-label={heroData.secondaryCTA.label}
              className="px-8 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-medium shadow-lg transition hover:bg-[var(--color-border)] text-center"
            >
              {heroData.secondaryCTA.label}
            </a>
          </div>
        </div>

        {/* RIGHT RESPONSIVE MODERN IMAGE STACK */}
        <div className="relative w-full h-[360px] sm:h-[420px] md:h-[520px] flex justify-center">
          {/* IMAGE 1 */}
          <div
            className="absolute top-4 left-6 sm:left-10 w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-60 lg:h-80 rounded-2xl overflow-hidden shadow-xl transform -rotate-3"
          >
            <Image
              src={heroData.primaryimageUrl}
              alt={heroData.primaryAltText || "Hero image 1"}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 25vw"
              className="object-cover"
              priority
            />
          </div>

          {/* IMAGE 2 */}
          <div
            className="absolute bottom-4 right-6 sm:right-10 w-48 h-64 sm:w-56 sm:h-72 md:w-60 md:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl transform rotate-2"
          >
            <Image
              src={heroData.secondaryImageUrl}
              alt={heroData.secondaryAltText || "Hero image 2"}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 25vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}



export default Hero;