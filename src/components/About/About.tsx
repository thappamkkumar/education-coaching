"use client";

import Image from "next/image"; 
import { aboutData } from "@/content/aboutData";
 
 const About  = () => {
  const { title, description, bulletPoints, imageUrl } = aboutData;

  return (
    <section
			id="about"
      className="w-full py-20  " 
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Area */}
        <div>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            {title}
          </h2>

          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {description}
          </p>

          <ul className="space-y-3">
            {bulletPoints.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                <span className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Area */}
        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md"
             style={{ borderRadius: "var(--radius-base)", boxShadow: "var(--shadow-soft)" }}>
          <Image
            src={imageUrl}
            alt="About Us Image"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};
export default About;