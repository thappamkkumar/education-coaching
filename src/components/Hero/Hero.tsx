import { FC } from "react";
import { heroData } from "@/content/heroData";

const Hero: FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* BACKGROUND VIDEOS */}
      <div className="absolute inset-0">

        {/* Small screen video */}
        <video
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          src={heroData.smallScreenVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />

        {/* Large screen video */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src={heroData.largeScreenVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* CONTENT - BOTTOM ALIGNED */}
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-end">
        <div className="max-w-2xl pb-16 space-y-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {heroData.heading}
          </h1>

          <p className="text-lg md:text-xl opacity-90">
            {heroData.subheading}
          </p>

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
              className="px-8 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur text-white font-medium shadow-lg transition hover:bg-white/20 text-center"
            >
              {heroData.secondaryCTA.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
