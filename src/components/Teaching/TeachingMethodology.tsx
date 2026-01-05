"use client";

import { methodologyData } from "@/content/methodologyData";
import MethodologyCard from "./MethodologyCard";

const TeachingMethodology = () => {
  return (
    <section id="methodology" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            {methodologyData.heading}
          </h2>
          {methodologyData.subHeading && (
            <p className="mt-3 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {methodologyData.subHeading}
            </p>
          )}
        </div>

        {/* Grid of methodology cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologyData.items.map((item) => (
            <MethodologyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodology;
