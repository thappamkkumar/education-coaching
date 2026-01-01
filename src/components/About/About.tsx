 
import { FC } from "react";
import Image from "next/image";
import { aboutData } from "@/content/aboutData";
import { CheckCircle } from "lucide-react"; 

const About: FC = ()  => {
  const { title, description, bulletPoints, imageUrl, imageAltText, aboutBgImageUrl } = aboutData;

  return (
    <section
			id="about"
			aria-label="About section"
			style={{ backgroundImage: `url(${aboutBgImageUrl})` }}
			className="
				relative w-full 
				bg-cover bg-top-right bg-no-repeat
			"
		>
			<div className="  bg-[var(--color-background)]/80"  >

				<div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

					{/* LEFT CONTENT */}
					<div>
						<h2 className="text-3xl md:text-4xl font-bold   mb-4    text-[var(--color-text-primary)]">
							{title}
						</h2>

						<p className="text-base leading-relaxed mb-6 text-[var(--color-text-secondary)]">
							{description}
						</p>

						<ul className="space-y-4">
							{bulletPoints.map((item, idx) => (
								<li
									key={idx}
									className="flex items-start gap-3 text-[var(--color-text-primary)]"
								>
									<CheckCircle
										className="w-5 h-5 mt-0.5 text-[var(--color-primary)]"
										strokeWidth={2}
										aria-hidden="true"
									/>
									<span className="text-sm md:text-base leading-snug">
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* RIGHT IMAGE */}
					<div
						className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-xl   shadow-2xl  "
						
					>
						<Image
							src={imageUrl}
							alt={imageAltText} 
							fill
							className="object-cover"
						/>
					</div>

				</div>
      </div>
    </section>
  );
};

export default About;
