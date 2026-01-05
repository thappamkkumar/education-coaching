"use client";

import { facultyData } from "@/content/facultyData";
import FacultyCard from "./FacultyCard";

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            {facultyData.heading}
          </h2>
          {facultyData.subHeading && (
            <p className="mt-3 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {facultyData.subHeading}
            </p>
          )}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.items.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
