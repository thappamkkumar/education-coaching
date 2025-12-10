"use client";

import { serviceIconMap } from "@/lib/serviceIconMap";
import { servicesData } from "@/content/servicesData";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20 bg-[var(--color-background)]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left tracking-tight text-[var(--color-text-primary)]"
        >
          Explore Our Professional Services
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            const Icon = serviceIconMap[service.icon];

            return (
              <article
                key={index}
                className="flex items-center gap-4 p-6 md:p-8 rounded-2xl shadow-lg bg-[var(--color-primary)] text-[var(--color-text-tertiary)] transition-transform hover:scale-[1.03] "
              >
                {/* SMALL ICON LEFT */}
                {Icon && (
                  <div className="shrink-0 p-3 rounded-lg bg-[var(--color-text-tertiary)]/20 flex items-center justify-center">
                    <Icon
                      className="w-8 h-8 md:w-10 md:h-10"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>
                )}

                {/* TEXT CONTENT */}
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base">
                    Starting at{" "}
                    <span className="font-semibold text-[var(--color-text-tertiary)]/90">
                      {service.price}
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
