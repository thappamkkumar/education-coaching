 
import { heroData } from "@/content/heroData";

export default function Hero() {
  
  return (
    <section
      className="
        bg-[var(--color-surface)]
        py-16
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6
          grid grid-cols-1 md:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1
            className="
              text-4xl md:text-5xl font-bold
              text-[var(--color-text-primary)]
              leading-tight
            "
          >
            {heroData.heading}
          </h1>

          <p
            className="
              text-lg text-[var(--color-text-secondary)]
              max-w-lg
            "
          >
            {heroData.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-2">
            <a
              href={heroData.primaryCTA.href}
              className="
                px-6 py-3
                rounded-[var(--radius-base)]
                bg-[var(--color-primary)]
                text-white font-medium
                shadow-[var(--shadow-soft)]
                transition
                hover:opacity-90
              "
            >
              {heroData.primaryCTA.label}
            </a>

            <a
              href={heroData.secondaryCTA.href}
              className="
                px-6 py-3
                rounded-[var(--radius-base)]
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                text-[var(--color-text-primary)]
                font-medium
                shadow-[var(--shadow-soft)]
                transition
                hover:bg-[var(--color-border)]
              "
            >
              {heroData.secondaryCTA.label}
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src={heroData.imageUrl}
            alt="Hero Image"
            className="
              w-full rounded-[var(--radius-base)]
              shadow-[var(--shadow-soft)]
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}
